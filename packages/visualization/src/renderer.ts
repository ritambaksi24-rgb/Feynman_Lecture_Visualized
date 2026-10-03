import type{VisualizationState}from"@feynman/contracts";
export interface RenderContext{readonly container:HTMLElement}
export interface ScientificRenderer<TTarget=RenderContext>{
  readonly id:string;
  readonly version:string;
  mount(target:TTarget):void;
  render(state:VisualizationState):void;
  resize(width:number,height:number):void;
  destroy():void;
}
export function assertRendererState(state:VisualizationState):void{
  if(state.series.length>32)throw new Error("Visualization series limit exceeded");
  for(const series of state.series){
    if(series.x.length!==series.y.length)throw new Error("Series "+series.id+" has mismatched axes");
    if(series.x.length>100000)throw new Error("Series "+series.id+" exceeds point limit");
    for(let i=0;i<series.x.length;i++){
      const x=series.x[i],y=series.y[i];
      if(x===undefined||y===undefined||!Number.isFinite(x)||!Number.isFinite(y))throw new Error("Series "+series.id+" contains non-finite values");
    }
  }
}