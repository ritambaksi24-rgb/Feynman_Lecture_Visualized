import type{VisualizationState}from"@feynman/contracts";
import type{ScientificRenderer}from"./renderer.js";
import{assertRendererState}from"./renderer.js";

export class MemoryScientificRenderer implements ScientificRenderer<null>{
  readonly id="renderer.memory";
  readonly version="1.0.0";
  private state:VisualizationState|undefined;
  mount(_target:null):void{this.state=undefined;}
  render(state:VisualizationState):void{assertRendererState(state);this.state=structuredClone(state);}
  resize(_width:number,_height:number):void{}
  destroy():void{this.state=undefined;}
  get renderedState():VisualizationState|undefined{return this.state;}
}