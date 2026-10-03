import test from "node:test";
import assert from "node:assert/strict";
import {performance} from "node:perf_hooks";
import {createHarmonicOscillator} from "../packages/scientific-domain/dist/index.js";
import {integrate} from "../packages/computation/dist/index.js";

test("100k-step computation stays inside the foundation budget",()=>{
  const model=createHarmonicOscillator({mass:1,springConstant:1});
  const start=performance.now();const result=integrate(model,100000,0.0005);const elapsed=performance.now()-start;
  assert.equal(result.states.length,100001);
  assert.ok(elapsed<5000,"100k-step integration exceeded 5 s: "+elapsed.toFixed(1)+" ms");
});