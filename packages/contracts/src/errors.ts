export type ErrorKind="invalid-input"|"contract-violation"|"cycle"|"cancelled"|"resource-limit"|"computation"|"rendering";
export interface FeynmanErrorShape{readonly kind:ErrorKind;readonly code:string;readonly message:string;readonly details?:Readonly<Record<string,unknown>>;readonly cause?:unknown}
export class FeynmanError extends Error{
 readonly kind:ErrorKind;readonly code:string;readonly details:Readonly<Record<string,unknown>>|undefined;
 constructor(input:FeynmanErrorShape){super(input.message,{cause:input.cause});this.name="FeynmanError";this.kind=input.kind;this.code=input.code;this.details=input.details;}
}