import {useEffect,useMemo,useRef,useState} from "react";
import type {JSX} from "react";
import {FeynmanButton} from "@feynman/design-system";
import {createHarmonicOscillator} from "@feynman/scientific-domain";
import {integrate} from "@feynman/computation";
import {SvgScientificRenderer} from "@feynman/visualization";

function buildVisualizationState(initialPosition:number){
  const model=createHarmonicOscillator({mass:1,springConstant:1},initialPosition);
  const trajectory=integrate(model,400,0.02);
  return {
    title:"Harmonic oscillator position",
    series:{
      id:"position",
      label:"x(t)",
      x:trajectory.states.map(state=>state.time),
      y:trajectory.states.map(state=>state.values.x??0)
    },
    energyInitial:trajectory.energies[0]??0,
    energyFinal:trajectory.energies.at(-1)??0
  };
}

export function App():JSX.Element{
  const [initialPosition,setInitialPosition]=useState(1);
  const [theme,setTheme]=useState<"light"|"dark">("light");
  const [status,setStatus]=useState<"ready"|"error">("ready");
  const [error,setError]=useState<string|undefined>();
  const [result,setResult]=useState(()=>buildVisualizationState(1));
  const host=useRef<HTMLDivElement>(null);
  const renderer=useMemo(()=>new SvgScientificRenderer(),[]);

  useEffect(()=>{
    document.documentElement.dataset.theme=theme;
  },[theme]);

  useEffect(()=>{
    try{
      setStatus("ready");
      setError(undefined);
      setResult(buildVisualizationState(initialPosition));
    }catch(nextError){
      setStatus("error");
      setError(nextError instanceof Error?nextError.message:"Scientific computation failed");
    }
  },[initialPosition]);

  useEffect(()=>{
    if(!host.current||status!=="ready")return;
    renderer.mount(host.current);
    renderer.render({
      visualizationId:"visualization.harmonic-oscillator",
      version:"1.0.0",
      title:result.title,
      dimensions:[
        {id:"time",label:"Time",unit:"s"},
        {id:"position",label:"Position",unit:"m"}
      ],
      series:[result.series]
    });
    return()=>renderer.destroy();
  },[renderer,result,status]);

  const drift=Math.abs(result.energyFinal-result.energyInitial);

  return <main className="app-shell">
    <header className="hero">
      <p className="eyebrow">Step 2 foundation proof</p>
      <h1>Scientific state, from model to renderer</h1>
      <p>A deterministic scientific model is computed independently, converted to renderer-neutral state, and consumed by an isolated renderer adapter.</p>

      <div className="controls">
        <label className="control">
          <span>Initial position</span>
          <input aria-label="Initial position" type="range" min="-2" max="2" step="0.1" value={initialPosition} onChange={event=>setInitialPosition(Number(event.target.value))}/>
          <output>{initialPosition.toFixed(1)} m</output>
        </label>

        <FeynmanButton type="button" tone="neutral" onClick={()=>setTheme(theme==="light"?"dark":"light")}>
          Use {theme==="light"?"dark":"light"} theme
        </FeynmanButton>
      </div>

      <div className="actions">
        <FeynmanButton type="button" onClick={()=>setInitialPosition(1)}>Reset experiment</FeynmanButton>
        <output aria-label="Initial position summary">x₀ = {initialPosition.toFixed(3)} m</output>
        <output aria-label="Energy drift">ΔE = {drift.toExponential(2)} J</output>
      </div>
    </header>

    <section className="proof-card" aria-labelledby="proof-title">
      <h2 id="proof-title">{status==="ready"?result.title:"Scientific computation error"}</h2>
      {status==="error"&&<p role="alert">{error}</p>}
      {status==="ready"&&<p role="status">{result.series.label} · {result.series.x.length} samples</p>}
      {status==="ready"&&<div ref={host} className="plot-host"/>}
    </section>
  </main>;
}