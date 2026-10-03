export interface ExplorationSnapshot{
  readonly version:number;
  readonly values:Readonly<Record<string,number>>;
}

export class ExplorationStore{
  private version=0;
  private values:Record<string,number>={};
  private listeners=new Set<(snapshot:ExplorationSnapshot)=>void>();

  get snapshot():ExplorationSnapshot{
    return{version:this.version,values:{...this.values}};
  }

  set(id:string,value:number):void{
    if(!Number.isFinite(value))throw new Error("Exploration values must be finite");
    this.values[id]=value;
    this.version+=1;
    const snapshot=this.snapshot;
    for(const listener of this.listeners)listener(snapshot);
  }

  subscribe(listener:(snapshot:ExplorationSnapshot)=>void):()=>void{
    this.listeners.add(listener);
    return()=>this.listeners.delete(listener);
  }
}

export type DerivedComputer=(inputs:Readonly<Record<string,number>>)=>number;

export class ReactiveGraph{
  private readonly dependencies=new Map<string,ReadonlySet<string>>();
  private readonly computers=new Map<string,DerivedComputer>();
  private readonly values=new Map<string,number>();

  addValue(id:string,initialValue:number):void{
    if(this.dependencies.has(id))throw new Error("Duplicate reactive node: "+id);
    if(!Number.isFinite(initialValue))throw new Error("Reactive values must be finite");
    this.dependencies.set(id,new Set());
    this.values.set(id,initialValue);
  }

  addDerived(id:string,dependencies:readonly string[],compute:DerivedComputer):void{
    if(this.dependencies.has(id))throw new Error("Duplicate reactive node: "+id);
    for(const dependency of dependencies){
      if(!this.dependencies.has(dependency))throw new Error("Unknown dependency node: "+dependency);
    }
    this.dependencies.set(id,new Set(dependencies));
    this.computers.set(id,compute);
    this.recompute();
  }

  setValue(id:string,value:number):void{
    if(!this.dependencies.has(id)||this.computers.has(id))throw new Error("Reactive value node not found: "+id);
    if(!Number.isFinite(value))throw new Error("Reactive values must be finite");
    this.values.set(id,value);
    this.recompute();
  }

  get(id:string):number{
    const value=this.values.get(id);
    if(value===undefined)throw new Error("Reactive node not found: "+id);
    return value;
  }

  snapshot():Readonly<Record<string,number>>{
    return Object.fromEntries(this.values.entries());
  }

  private recompute():void{
    const visiting=new Set<string>();
    const visited=new Set<string>();
    const order:string[]=[];

    const visit=(id:string):void=>{
      if(visiting.has(id))throw new Error("Reactive dependency cycle at "+id);
      if(visited.has(id))return;
      visiting.add(id);
      const dependencies=this.dependencies.get(id);
      if(dependencies===undefined)throw new Error("Unknown dependency node: "+id);
      for(const dependency of dependencies)visit(dependency);
      visiting.delete(id);
      visited.add(id);
      order.push(id);
    };

    for(const id of this.dependencies.keys())visit(id);

    for(const id of order){
      const compute=this.computers.get(id);
      if(compute===undefined)continue;
      const inputs:Record<string,number>={};
      for(const dependency of this.dependencies.get(id)??[])inputs[dependency]=this.get(dependency);
      const result=compute(inputs);
      if(!Number.isFinite(result))throw new Error("Derived node "+id+" produced a non-finite value");
      this.values.set(id,result);
    }
  }
}