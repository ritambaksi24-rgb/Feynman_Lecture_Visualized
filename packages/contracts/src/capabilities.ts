export type CapabilityKind="model"|"compute"|"exploration"|"visualization"|"renderer";
export interface CapabilityDescriptor{readonly id:string;readonly version:string;readonly kind:CapabilityKind;readonly description:string}
export interface CapabilityEntry<T=unknown>{readonly descriptor:CapabilityDescriptor;readonly create:()=>T}
export interface CapabilityRegistry{register<T>(entry:CapabilityEntry<T>):void;resolve<T=unknown>(id:string,version:string):CapabilityEntry<T>|undefined}