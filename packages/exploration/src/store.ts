export interface ExplorationSnapshot{readonly version:number;readonly values:Readonly<Record<string,number>>}
export class ExplorationStore{private version=0;private values:Record<string,number>={};private listeners=new Set<(snapshot:ExplorationSnapshot)=>void>();
get snapshot():ExplorationSnapshot{return{version:this.version,values:{...this.values}}}
set(id:string,value:number):void{if(!Number.isFinite(value))throw new Error("Exploration values must be finite");this.values[id]=value;this.version++;const s=this.snapshot;for(const l of this.listeners)l(s)}
subscribe(listener:(snapshot:ExplorationSnapshot)=>void):()=>void{this.listeners.add(listener);return()=>this.listeners.delete(listener)}}