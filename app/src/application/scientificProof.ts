import type{ProvenanceRecord,VisualizationState}from"@feynman/contracts";
import{validateProvenance}from"@feynman/contracts";
import{runTrajectory}from"@feynman/computation";
import{createHarmonicOscillator}from"@feynman/scientific-domain";

export interface ScientificProofResult{
  readonly visualization:VisualizationState;
  readonly energyInitial:number;
  readonly energyFinal:number;
}

const TRAJECTORY_STEPS=400;
const TRAJECTORY_DT=0.02;
const POSITION_VIEWPORT={xMin:0,xMax:TRAJECTORY_STEPS*TRAJECTORY_DT,yMin:-2.2,yMax:2.2} as const;

export async function executeHarmonicOscillatorProof(initialPosition:number,signal?:AbortSignal):Promise<ScientificProofResult>{
  const model=createHarmonicOscillator({mass:1,springConstant:1},initialPosition);
  const provenance:ProvenanceRecord={
    recordVersion:"1.0.0",
    sources:[
      {kind:"model",id:"model.harmonic-oscillator",version:model.version},
      {kind:"algorithm",id:"algorithm.velocity-verlet",version:"1.0.0"}
    ],
    contentVersion:"prototype",
    modelVersion:model.version,
    explorationVersion:"1.0.0",
    algorithm:"velocity-verlet",
    numericalSettings:{steps:TRAJECTORY_STEPS,dt:TRAJECTORY_DT},
    classification:"numerical-tolerance"
  };
  validateProvenance(provenance);

  const baseRequest={
    requestId:"experiment.harmonic-oscillator.prototype",
    contract:{contractId:"compute.trajectory",contractVersion:"1.0.0"},
    input:{model,steps:TRAJECTORY_STEPS,dt:TRAJECTORY_DT}
  } as const;
  const result=signal===undefined
    ? await runTrajectory(baseRequest)
    : await runTrajectory({...baseRequest,signal});

  const trajectory=result.output;
  return{
    visualization:{
      visualizationId:"visualization.harmonic-oscillator",
      version:"1.0.0",
      title:"Harmonic oscillator position",
      dimensions:[
        {id:"time",label:"Time",unit:"s"},
        {id:"position",label:"Position",unit:"m"}
      ],
      viewport:POSITION_VIEWPORT,
      series:[{
        id:"position",
        label:"x(t)",
        x:trajectory.states.map(state=>state.time),
        y:trajectory.states.map(state=>state.values.x??0)
      }],
      provenance
    },
    energyInitial:trajectory.energies[0]??0,
    energyFinal:trajectory.energies.at(-1)??0
  };
}
