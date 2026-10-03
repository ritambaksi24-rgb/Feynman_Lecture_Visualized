import {asContractId} from "@feynman/contracts";
import type {ScientificModel,ScientificState} from "./model.js";
export interface HarmonicOscillatorParameters{readonly mass:number;readonly springConstant:number}
export function createHarmonicOscillator(p:HarmonicOscillatorParameters,initialPosition=1,initialVelocity=0):ScientificModel{
 const {mass,springConstant}=p;if(!(mass>0)||!(springConstant>0))throw new Error("Mass and spring constant must be positive");
 return {id:asContractId("model.harmonic-oscillator"),version:"1.0.0",title:"One-dimensional harmonic oscillator",
 parameters:[{id:"mass",label:"Mass",unit:"kg",defaultValue:mass,min:1e-9,dimension:"mass"},{id:"springConstant",label:"Spring constant",unit:"N/m",defaultValue:springConstant,min:1e-9,dimension:"force-per-length"}],
 initialState:{time:0,values:{x:initialPosition,v:initialVelocity}},invariants:[{id:"mass-positive",description:"m > 0"},{id:"spring-positive",description:"k > 0"}],
 step(state:ScientificState,dt:number):ScientificState{if(!(dt>0)||!Number.isFinite(dt))throw new Error("dt must be positive and finite");const x=state.values.x??0,v=state.values.v??0,a=-(springConstant/mass)*x;const vh=v+0.5*a*dt,nx=x+vh*dt,na=-(springConstant/mass)*nx,nv=vh+0.5*na*dt;return{time:state.time+dt,values:{x:nx,v:nv}}},
 energy(state:ScientificState):number{const x=state.values.x??0,v=state.values.v??0;return .5*mass*v*v+.5*springConstant*x*x}
 } as ScientificModel
}