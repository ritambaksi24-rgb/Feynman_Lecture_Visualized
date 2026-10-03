export interface ProvenanceSource{
  readonly kind:"content"|"model"|"algorithm"|"asset"|"external";
  readonly id:string;
  readonly version?:string;
  readonly locator?:string;
}

export interface ProvenanceRecord{
  readonly recordVersion:string;
  readonly sources:readonly ProvenanceSource[];
  readonly contentVersion:string;
  readonly modelVersion:string;
  readonly explorationVersion:string;
  readonly algorithm:string;
  readonly numericalSettings:Readonly<Record<string,string|number|boolean>>;
  readonly randomSeed?:number;
  readonly classification:"exact"|"numerical-tolerance"|"statistical"|"illustrative";
}

export function validateProvenance(record:ProvenanceRecord):void{
  if(!record.recordVersion||record.sources.length===0)throw new Error("Invalid provenance record");
  if(!record.contentVersion||!record.modelVersion||!record.explorationVersion||!record.algorithm)throw new Error("Incomplete provenance record");
}