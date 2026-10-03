export type Brand<T,B extends string> = T & {readonly __brand:B};
export type ContractId=Brand<string,"ContractId">;
export type ModelId=Brand<string,"ModelId">;
export type ExperimentId=Brand<string,"ExperimentId">;
export type VisualizationId=Brand<string,"VisualizationId">;
export function asContractId(value:string):ContractId{
 if(!/^[-a-z0-9]+(?:\.[-a-z0-9]+)*$/i.test(value)) throw new Error("Invalid contract id");
 return value as ContractId;
}