import type{ProvenanceRecord}from"./provenance.js";

export interface VersionedContract{
  readonly contractId:string;
  readonly contractVersion:string;
}

export interface ValidationInvariant{
  readonly id:string;
  readonly description:string;
}

export interface ComputeRequest<Input>{
  readonly requestId:string;
  readonly contract:VersionedContract;
  readonly input:Input;
  readonly signal?:AbortSignal;
}

export interface ComputeResult<Output>{
  readonly requestId:string;
  readonly contract:VersionedContract;
  readonly output:Output;
  readonly diagnostics?:readonly string[];
  readonly provenance?:ProvenanceRecord;
}

export interface VisualizationDimension{
  readonly id:string;
  readonly label:string;
  readonly unit?:string;
}

export interface VisualizationSeries{
  readonly id:string;
  readonly label:string;
  readonly x:readonly number[];
  readonly y:readonly number[];
}

export interface VisualizationViewport{
  readonly xMin:number;
  readonly xMax:number;
  readonly yMin:number;
  readonly yMax:number;
}

export interface VisualizationState{
  readonly visualizationId:string;
  readonly version:string;
  readonly title:string;
  readonly dimensions:readonly VisualizationDimension[];
  readonly viewport:VisualizationViewport;
  readonly series:readonly VisualizationSeries[];
  readonly provenance?:ProvenanceRecord;
}
