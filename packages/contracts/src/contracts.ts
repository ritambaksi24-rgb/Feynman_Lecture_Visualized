export interface VersionedContract{readonly contractId:string;readonly contractVersion:string}
export interface ValidationInvariant{readonly id:string;readonly description:string}
export interface ComputeRequest<Input>{readonly requestId:string;readonly contract:VersionedContract;readonly input:Input;readonly signal?:AbortSignal}
export interface ComputeResult<Output>{readonly requestId:string;readonly contract:VersionedContract;readonly output:Output;readonly diagnostics?:readonly string[]}
export interface VisualizationState{
 readonly visualizationId:string; readonly version:string; readonly title:string;
 readonly dimensions:readonly {id:string;label:string;unit?:string}[];
 readonly series:readonly {id:string;label:string;x:readonly number[];y:readonly number[]}[];
}