import type {ScientificModel,ScientificState} from "@feynman/scientific-domain";
export interface Trajectory{readonly states:readonly ScientificState[];readonly energies:readonly number[]}
export function integrate(model:ScientificModel,steps:number,dt:number,signal?:AbortSignal):Trajectory{
 if(!Number.isInteger(steps)||steps<1||steps>1000000)throw new Error("steps out of supported range");
 const states:ScientificState[]=[model.initialState],energies=[model.energy(model.initialState)];let current=model.initialState;
 for(let i=0;i<steps;i++){if(signal?.aborted)throw new Error("COMPUTATION_CANCELLED");current=model.step(current,dt);states.push(current);energies.push(model.energy(current))}
 return{states,energies}
}