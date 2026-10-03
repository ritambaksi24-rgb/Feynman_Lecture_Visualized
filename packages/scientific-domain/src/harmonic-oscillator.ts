import {asModelId} from "@feynman/contracts";
import type {ScientificModel,ScientificState} from "./model.js";

export interface HarmonicOscillatorParameters{
  readonly mass:number;
  readonly springConstant:number;
}

export function createHarmonicOscillator(
  parameters:HarmonicOscillatorParameters,
  initialPosition=1,
  initialVelocity=0
):ScientificModel{
  const {mass,springConstant}=parameters;
  if(!(mass>0)||!(springConstant>0))throw new Error("Mass and spring constant must be positive");
  if(!Number.isFinite(initialPosition)||!Number.isFinite(initialVelocity))throw new Error("Initial state values must be finite");

  return{
    id:asModelId("model.harmonic-oscillator"),
    version:"1.0.0",
    title:"One-dimensional harmonic oscillator",
    variables:[
      {id:"x",label:"Position",unit:"m",dimension:"length",role:"state"},
      {id:"v",label:"Velocity",unit:"m/s",dimension:"velocity",role:"state"},
      {id:"energy",label:"Total energy",unit:"J",dimension:"energy",role:"derived"}
    ],
    parameters:[
      {id:"mass",label:"Mass",unit:"kg",defaultValue:mass,min:1e-9,dimension:"mass"},
      {id:"springConstant",label:"Spring constant",unit:"N/m",defaultValue:springConstant,min:1e-9,dimension:"force-per-length"}
    ],
    assumptions:[
      "The oscillator is one-dimensional.",
      "The spring obeys Hooke's law.",
      "The system is isolated and deterministic."
    ],
    validityDomain:{mass:"m > 0",springConstant:"k > 0",timeStep:"dt > 0"},
    initialState:{time:0,values:{x:initialPosition,v:initialVelocity}},
    invariants:[
      {id:"mass-positive",description:"m > 0"},
      {id:"spring-positive",description:"k > 0"},
      {id:"energy-definition",description:"E = 1/2 m v² + 1/2 k x²"}
    ],
    randomness:{kind:"deterministic"},
    numericalMethod:{name:"velocity-verlet"},
    step(state:ScientificState,dt:number):ScientificState{
      if(!(dt>0)||!Number.isFinite(dt))throw new Error("dt must be positive and finite");
      const x=state.values.x??0;
      const v=state.values.v??0;
      const acceleration=-(springConstant/mass)*x;
      const halfVelocity=v+0.5*acceleration*dt;
      const nextX=x+halfVelocity*dt;
      const nextAcceleration=-(springConstant/mass)*nextX;
      const nextV=halfVelocity+0.5*nextAcceleration*dt;
      return{time:state.time+dt,values:{x:nextX,v:nextV}};
    },
    derivedQuantities(state:ScientificState){
      const x=state.values.x??0;
      const v=state.values.v??0;
      return{energy:0.5*mass*v*v+0.5*springConstant*x*x};
    }
  };
}