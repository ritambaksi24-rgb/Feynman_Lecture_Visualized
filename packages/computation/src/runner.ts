import type{ComputeRequest,ComputeResult}from"@feynman/contracts";
import{FeynmanError}from"@feynman/contracts";
import{integrate}from"./integrate.js";
export interface TrajectoryRequest{readonly model:import("@feynman/scientific-domain").ScientificModel;readonly steps:number;readonly dt:number}
export async function runTrajectory(request:ComputeRequest<TrajectoryRequest>):Promise<ComputeResult<ReturnType<typeof integrate>>>{
  if(request.signal?.aborted)throw new FeynmanError({kind:"cancelled",code:"COMPUTATION_CANCELLED",message:"Computation was cancelled"});
  return{requestId:request.requestId,contract:request.contract,output:integrate(request.input.model,request.input.steps,request.input.dt,request.signal)};
}