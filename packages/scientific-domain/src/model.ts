import type {ModelId,ValidationInvariant} from "@feynman/contracts";

export interface ScientificVariable{
  readonly id:string;
  readonly label:string;
  readonly unit:string;
  readonly dimension:string;
  readonly role:"state"|"derived";
}

export interface ScientificParameter{
  readonly id:string;
  readonly label:string;
  readonly unit:string;
  readonly defaultValue:number;
  readonly min?:number;
  readonly max?:number;
  readonly dimension:string;
}

export interface ScientificState{
  readonly time:number;
  readonly values:Readonly<Record<string,number>>;
}

export interface ScientificModel{
  readonly id:ModelId;
  readonly version:string;
  readonly title:string;
  readonly variables:readonly ScientificVariable[];
  readonly parameters:readonly ScientificParameter[];
  readonly assumptions:readonly string[];
  readonly validityDomain:Readonly<Record<string,string>>;
  readonly initialState:ScientificState;
  readonly invariants:readonly ValidationInvariant[];
  readonly randomness:{readonly kind:"deterministic"|"seeded"|"stochastic";readonly seed?:number};
  readonly numericalMethod:{readonly name:string;readonly tolerance?:number};
  step(state:ScientificState,dt:number):ScientificState;
  derivedQuantities(state:ScientificState):Readonly<Record<string,number>>;
}