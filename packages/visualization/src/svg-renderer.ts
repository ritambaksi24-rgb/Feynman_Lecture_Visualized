import type{VisualizationState}from"@feynman/contracts";
import type{RenderContext,ScientificRenderer}from"./renderer.js";
import{assertRendererState,projectSeries}from"./renderer.js";
export class SvgScientificRenderer implements ScientificRenderer<RenderContext>{
  readonly id="renderer.svg";readonly version="1.0.0";private svg:SVGSVGElement|undefined;
  mount(context:RenderContext):void{
    this.destroy();
    this.svg=document.createElementNS("http://www.w3.org/2000/svg","svg");
    this.svg.setAttribute("viewBox","0 0 800 240");
    this.svg.setAttribute("role","img");
    this.svg.setAttribute("aria-label","Scientific trajectory plot");
    this.svg.style.width="100%";this.svg.style.height="auto";
    context.container.replaceChildren(this.svg);
  }
  render(state:VisualizationState):void{
    if(!this.svg)throw new Error("Renderer is not mounted");
    assertRendererState(state);this.svg.replaceChildren();
    for(const series of state.series){
      if(series.x.length===0)continue;
      const polyline=document.createElementNS("http://www.w3.org/2000/svg","polyline");
      const points=projectSeries(series,state.viewport).map(point=>point.x.toFixed(2)+","+point.y.toFixed(2)).join(" ");
      polyline.setAttribute("points",points);polyline.setAttribute("fill","none");
      polyline.setAttribute("stroke","currentColor");polyline.setAttribute("stroke-width","2");
      polyline.setAttribute("vector-effect","non-scaling-stroke");this.svg.append(polyline);
    }
  }
  resize(width:number,height:number):void{
    if(this.svg&&width>0&&height>0)this.svg.setAttribute("viewBox","0 0 "+Math.max(1,width)+" "+Math.max(1,height));
  }
  destroy():void{this.svg?.remove();this.svg=undefined;}
}
