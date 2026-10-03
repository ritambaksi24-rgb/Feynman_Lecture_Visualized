import{useEffect,useMemo,useRef,useState}from"react";
import type{JSX}from"react";
import{FeynmanButton}from"@feynman/design-system";
import{SvgScientificRenderer}from"@feynman/visualization";
import{useScientificProof}from"./application/useScientificProof.js";

export function App():JSX.Element{
  const[initialPosition,setInitialPosition]=useState(1);
  const[theme,setTheme]=useState<"light"|"dark">("light");
  const proof=useScientificProof(initialPosition);
  const host=useRef<HTMLDivElement>(null);
  const renderer=useMemo(()=>new SvgScientificRenderer(),[]);

  useEffect(()=>{document.documentElement.dataset.theme=theme;},[theme]);

  useEffect(()=>{
    if(!host.current||!proof.visualization)return;
    renderer.mount({container:host.current});
    renderer.render(proof.visualization);
    return()=>renderer.destroy();
  },[renderer,proof.visualization]);

  const series=proof.visualization?.series.find(value=>value.id==="position");
  const drift=proof.energyInitial===undefined||proof.energyFinal===undefined?undefined:Math.abs(proof.energyFinal-proof.energyInitial);

  return <main className="app-shell">
    <header className="hero">
      <p className="eyebrow">Step 2 foundation proof</p>
      <h1>Scientific state, from model to renderer</h1>
      <p>A deterministic scientific model is executed independently, converted to renderer-neutral state, and consumed by an isolated renderer adapter.</p>
      <div className="controls">
        <label className="control">
          <span>Initial position</span>
          <input aria-label="Initial position" type="range" min="-2" max="2" step="0.1" value={initialPosition} onChange={event=>setInitialPosition(Number(event.target.value))}/>
          <output>{initialPosition.toFixed(1)} m</output>
        </label>
        <FeynmanButton type="button" tone="neutral" onClick={()=>setTheme(theme==="light"?"dark":"light")}>Use {theme==="light"?"dark":"light"} theme</FeynmanButton>
      </div>
      <div className="actions">
        <FeynmanButton type="button" onClick={()=>setInitialPosition(1)}>Reset experiment</FeynmanButton>
        <output aria-label="Initial position summary">x₀ = {initialPosition.toFixed(3)} m</output>
        {drift!==undefined&&<output aria-label="Energy drift">ΔE = {drift.toExponential(2)} J</output>}
      </div>
    </header>
    <section className="proof-card" aria-labelledby="proof-title">
      <h2 id="proof-title">{proof.visualization?.title??"Scientific computation"}</h2>
      {proof.status==="error"&&<p role="alert">{proof.error}</p>}
      {proof.status==="running"&&<p role="status">Computing deterministic trajectory…</p>}
      {proof.status==="ready"&&series&&<><p role="status">{series.label} · {series.x.length} samples</p><div ref={host} className="plot-host"/></>}
    </section>
  </main>;
}