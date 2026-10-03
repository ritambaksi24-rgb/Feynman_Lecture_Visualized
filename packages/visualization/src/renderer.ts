import type{VisualizationState,VisualizationViewport,VisualizationSeries}from"@feynman/contracts";
export interface RenderContext{readonly container:HTMLElement}
export interface ScientificRenderer<TTarget=RenderContext>{
  readonly id:string;
  readonly version:string;
  mount(target:TTarget):void;
  render(state:VisualizationState):void;
  resize(width:number,height:number):void;
  destroy():void;
}
export interface RenderedPoint{
  readonly x:number;
  readonly y:number;
}
export function projectPoint(x:number,y:number,viewport:VisualizationViewport,width=800,height=240):RenderedPoint{
  if(!(viewport.xMax>viewport.xMin)||!(viewport.yMax>viewport.yMin))throw new Error("Visualization viewport must have increasing bounds");
  if(!(Number.isFinite(x)&&Number.isFinite(y)))throw new Error("Cannot project non-finite point");
  const xSpan=viewport.xMax-viewport.xMin;
  const ySpan=viewport.yMax-viewport.yMin;
  return{
    x:20+(width-40)*(x-viewport.xMin)/xSpan,
    y:height-20-(height-50)*(y-viewport.yMin)/ySpan
  };
}
export function projectSeries(series:VisualizationSeries,viewport:VisualizationViewport,width=800,height=240):readonly RenderedPoint[]{
  return series.x.map((x,index)=>projectPoint(x,series.y[index]??0,viewport,width,height));
}
export function assertRendererState(state:VisualizationState):void{
  if(state.series.length>32)throw new Error("Visualization series limit exceeded");
  const {xMin,xMax,yMin,yMax}=state.viewport;
  if(!(Number.isFinite(xMin)&&Number.isFinite(xMax)&&Number.isFinite(yMin)&&Number.isFinite(yMax))||!(xMax>xMin)||!(yMax>yMin))throw new Error("Visualization viewport is invalid");
  for(const series of state.series){
    if(series.x.length!==series.y.length)throw new Error("Series "+series.id+" has mismatched axes");
    if(series.x.length>100000)throw new Error("Series "+series.id+" exceeds point limit");
    for(let i=0;i<series.x.length;i++){
      const x=series.x[i],y=series.y[i];
      if(x===undefined||y===undefined||!Number.isFinite(x)||!Number.isFinite(y))throw new Error("Series "+series.id+" contains non-finite values");
    }
  }
}
