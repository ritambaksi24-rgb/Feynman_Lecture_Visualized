import{useEffect,useState}from"react";
import type{VisualizationState}from"@feynman/contracts";
import{executeHarmonicOscillatorProof}from"./scientificProof.js";

export interface ScientificProofState{
  readonly status:"running"|"ready"|"error";
  readonly visualization:VisualizationState|undefined;
  readonly energyInitial:number|undefined;
  readonly energyFinal:number|undefined;
  readonly error:string|undefined;
}

export function useScientificProof(initialPosition:number):ScientificProofState{
  const[state,setState]=useState<ScientificProofState>({
    status:"running",visualization:undefined,energyInitial:undefined,energyFinal:undefined,error:undefined
  });

  useEffect(()=>{
    const controller=new AbortController();
    setState({status:"running",visualization:undefined,energyInitial:undefined,energyFinal:undefined,error:undefined});
    void executeHarmonicOscillatorProof(initialPosition,controller.signal)
      .then(result=>{
        if(controller.signal.aborted)return;
        setState({status:"ready",visualization:result.visualization,energyInitial:result.energyInitial,energyFinal:result.energyFinal,error:undefined});
      })
      .catch(error=>{
        if(controller.signal.aborted)return;
        setState({status:"error",visualization:undefined,energyInitial:undefined,energyFinal:undefined,error:error instanceof Error?error.message:"Scientific computation failed"});
      });
    return()=>controller.abort();
  },[initialPosition]);

  return state;
}