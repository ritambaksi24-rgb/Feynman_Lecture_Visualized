export type Brand<T,B extends string>=T & {readonly __brand:B};
export type ContractId=Brand<string,"ContractId">;
export type ModelId=Brand<string,"ModelId">;
export type ExperimentId=Brand<string,"ExperimentId">;
export type VisualizationId=Brand<string,"VisualizationId">;
function asId<T extends string,B extends string>(value:string):Brand<T,B>{if(!/^[-a-z0-9]+(?:\.[-a-z0-9]+)*$/i.test(value))throw new Error("Invalid id");return value as Brand<T,B>}
export function asContractId(value:string):ContractId{return asId<string,"ContractId">(value)}
export function asModelId(value:string):ModelId{return asId<string,"ModelId">(value)}
export function asExperimentId(value:string):ExperimentId{return asId<string,"ExperimentId">(value)}
export function asVisualizationId(value:string):VisualizationId{return asId<string,"VisualizationId">(value)}