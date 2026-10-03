import type{CapabilityEntry,CapabilityRegistry}from"./capabilities.js";
export class InMemoryCapabilityRegistry implements CapabilityRegistry{
  private readonly entries=new Map<string,CapabilityEntry>();
  register<T>(entry:CapabilityEntry<T>):void{
    const key=entry.descriptor.id+"@"+entry.descriptor.version;
    if(this.entries.has(key))throw new Error("Duplicate capability: "+key);
    this.entries.set(key,entry as CapabilityEntry);
  }
  resolve<T=unknown>(id:string,version:string):CapabilityEntry<T>|undefined{
    return this.entries.get(id+"@"+version) as CapabilityEntry<T>|undefined;
  }
}