import type{ScientificModel,ScientificState}from"@feynman/scientific-domain";
import{FeynmanError}from"@feynman/contracts";

export interface IntegrationLimits{readonly maxSteps?:number}
export interface Trajectory{readonly states:readonly ScientificState[];readonly energies:readonly number[]}
const DEFAULT_MAX_STEPS=1_000_000;

export function integrate(model:ScientificModel,steps:number,dt:number,signal?:AbortSignal,limits:IntegrationLimits={}):Trajectory{
  const maxSteps=limits.maxSteps??DEFAULT_MAX_STEPS;
  if(!Number.isInteger(steps)||steps<1||steps>maxSteps)throw new FeynmanError({kind:"resource-limit",code:"INTEGRATION_STEP_LIMIT",message:"Integration step limit exceeded",details:{steps,maxSteps}});
  if(!Number.isFinite(dt)||dt<=0)throw new FeynmanError({kind:"invalid-input",code:"INVALID_TIME_STEP",message:"Integration time step must be positive and finite",details:{dt}});
  const states:ScientificState[]=[model.initialState];
  const energies:number[]=[model.energy(model.initialState)];
  let current=model.initialState;
  for(let index=0;index<steps;index++){
    if(signal?.aborted)throw new FeynmanError({kind:"cancelled",code:"COMPUTATION_CANCELLED",message:"Computation was cancelled"});
    current=model.step(current,dt);
    states.push(current);
    energies.push(model.energy(current));
  }
  return{states,energies};
}