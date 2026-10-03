import test from "node:test";
import assert from "node:assert/strict";
import {createHarmonicOscillator} from "../packages/scientific-domain/dist/index.js";
import {integrate} from "../packages/computation/dist/index.js";
import {parseExpression,evaluateExpression,ReactiveGraph,ExplorationStore} from "../packages/exploration/dist/index.js";
import {DependencyGraph,DependencyCycleError} from "../packages/exploration/dist/index.js";
import {InMemoryCapabilityRegistry,validateProvenance,FeynmanError} from "../packages/contracts/dist/index.js";
import {assertRendererState,MemoryScientificRenderer,projectPoint} from "../packages/visualization/dist/index.js";

test("harmonic oscillator matches analytic position and conserves energy",()=>{
  const model=createHarmonicOscillator({mass:1,springConstant:1});
  const trajectory=integrate(model,5000,0.001);
  const initial=trajectory.energies[0],final=trajectory.energies.at(-1),position=trajectory.states.at(-1)?.values.x;
  assert.notEqual(initial,undefined);assert.notEqual(final,undefined);assert.notEqual(position,undefined);
  assert.ok(Math.abs(final-initial)<1e-5);assert.ok(Math.abs(position-Math.cos(5))<1e-6);
});
test("expression parser has no dynamic execution surface",()=>{
  assert.equal(evaluateExpression(parseExpression("2*(x+3)/5"),{x:2}),2);
  assert.throws(()=>parseExpression("globalThis.process"),/Unsupported|Unexpected/);
  assert.throws(()=>parseExpression("1".repeat(4097)),/maximum input length/);
});
test("dependency graph rejects cycles",()=>{
  const graph=new DependencyGraph();graph.addNode("a",["c"]);graph.addNode("b",["a"]);graph.addNode("c",["b"]);
  assert.throws(()=>graph.topologicalOrder(),DependencyCycleError);
});
test("reactive graph invalidates dependents",()=>{
  const graph=new ReactiveGraph();graph.addValue("x",2);graph.addValue("y",3);graph.addDerived("sum",["x","y"],v=>v.x+v.y);graph.addDerived("double",["sum"],v=>2*v.sum);
  assert.equal(graph.get("double"),10);graph.setValue("x",5);assert.equal(graph.get("double"),16);
});
test("exploration store publishes snapshots",()=>{
  const store=new ExplorationStore();let received;
  const unsubscribe=store.subscribe(snapshot=>{received=snapshot});store.set("x",4);
  assert.equal(received.values.x,4);unsubscribe();
});
test("registry resolves exact versions",()=>{
  const registry=new InMemoryCapabilityRegistry();const value={name:"svg"};
  registry.register({descriptor:{id:"renderer.svg",version:"1.0.0",kind:"renderer",description:"SVG proof"},create:()=>value});
  assert.equal(registry.resolve("renderer.svg","1.0.0")?.create(),value);
  assert.equal(registry.resolve("renderer.svg","2.0.0"),undefined);
  assert.throws(()=>registry.register({descriptor:{id:"renderer.svg",version:"1.0.0",kind:"renderer",description:"duplicate"},create:()=>value}),/Duplicate capability/);
});
test("provenance round-trips and validates",()=>{
  const record={recordVersion:"1.0.0",sources:[{kind:"model",id:"model.harmonic-oscillator",version:"1.0.0"}],contentVersion:"prototype",modelVersion:"1.0.0",explorationVersion:"1.0.0",algorithm:"velocity-verlet",numericalSettings:{steps:100,dt:0.01},classification:"numerical-tolerance"};
  validateProvenance(JSON.parse(JSON.stringify(record)));assert.throws(()=>validateProvenance({...record,sources:[]}),/Invalid provenance/);
});
test("resource and cancellation errors are typed",()=>{
  const model=createHarmonicOscillator({mass:1,springConstant:1});
  assert.throws(()=>integrate(model,1000001,0.001),e=>e instanceof FeynmanError&&e.kind==="resource-limit");
  const controller=new AbortController();controller.abort();
  assert.throws(()=>integrate(model,10,0.001,controller.signal),e=>e instanceof FeynmanError&&e.kind==="cancelled");
});
test("renderer implementations share the renderer-neutral contract",()=>{
  const state={visualizationId:"v",version:"1.0.0",title:"plot",dimensions:[],viewport:{xMin:0,xMax:2,yMin:-2,yMax:2},series:[{id:"s",label:"s",x:[0,1],y:[0,1]}]};
  const renderer=new MemoryScientificRenderer();renderer.mount(null);renderer.render(state);assert.deepEqual(renderer.renderedState,state);
  assert.deepEqual(projectPoint(0,0,state.viewport),{x:20,y:220-95});
  assert.deepEqual(projectPoint(2,2,state.viewport),{x:780,y:20});
  assert.throws(()=>assertRendererState({...state,viewport:{xMin:1,xMax:1,yMin:-2,yMax:2}}),/viewport/);
  assert.throws(()=>assertRendererState({...state,series:[{id:"s",label:"s",x:[0],y:[Number.NaN]}]}),/non-finite/);
  renderer.destroy();assert.equal(renderer.renderedState,undefined);
});
