# 14 — Future Extensibility Tests

## Purpose

These tests challenge architecture boundaries against future requirements before those requirements exist.

## Core scenarios

### T1 — New chapter

Add Chapter 2 with new scientific concepts.

**Pass:** mostly new content/model/exploration/visualization definitions with shared application infrastructure.

**Fail:** copy Chapter 1 page architecture.

### T2 — New renderer

Add a renderer other than Three.js.

**Pass:** implement an adapter against the renderer contract.

**Fail:** content or scientific models import renderer code.

### T3 — New mathematical backend

Replace the expression/plot engine.

**Pass:** exploration contracts remain stable.

**Fail:** chapter content is rewritten around vendor APIs.

### T4 — New scientific model

Add a numerical model without existing UI support.

**Pass:** model is tested independently and connected to exploration/visualization.

**Fail:** physics logic is embedded in React.

### T5 — Parameter reactivity

Change one model parameter.

**Pass:** dependent expressions, plots, tables, and visualizations update through the dependency graph.

**Fail:** duplicated manual synchronization is required.

### T6 — Reproducible experiment

Save and restore an experiment.

**Pass:** same versions/parameters reconstruct the same result within tolerance.

### T7 — Theme

Open the same exploration in Light and Dark.

**Pass:** controls, equations, plots, annotations, and scientific scene remain legible without color hacks.

### T8 — Accessibility

Use keyboard-only controls and reduced-motion settings.

**Pass:** core information and interaction remain available.

### T9 — Localization

Add another language.

**Pass:** display content changes while model/exploration/visualization IDs remain stable.

### T10 — Dataset replacement

Replace an external dataset with a newer licensed version.

**Pass:** update data adapter/provenance without rewriting visual encodings.

### T11 — Large simulation

Scale to millions of elements.

**Pass:** computation and rendering strategies can evolve independently.

### T12 — HTTP service addition

Add a server for saved experiments or remote computation.

**Pass:** internal contracts remain valid and the new service has an explicit external API contract.

### T13 — HTTP service removal

Remove the server for a static deployment.

**Pass:** core reading and client-side scientific experiences remain functional.

### T14 — Dependency replacement

Replace UI, renderer, or math dependency.

**Pass:** affected adapters/foundation layers change while content/domain contracts remain intact.

### T15 — Figma token change

Change a semantic token.

**Pass:** token reconciliation updates Figma/runtime systematically.

### T16 — Failure injection

Force numerical error, timeout, invalid input, cancellation, or renderer failure.

**Pass:** explicit failure state is shown and fake/stale output is not silently substituted.

### T17 — Contract evolution

Add a backward-compatible persisted field.

**Pass:** compatible readers continue to work.

### T18 — Breaking contract change

Change required structure or output meaning.

**Pass:** version/migration policy is invoked.

### T19 — Expression safety

Submit malformed, pathological, or malicious expressions.

**Pass:** parser/evaluator rejects or bounds them without arbitrary code execution.

### T20 — Multi-view consistency

Change one exploration parameter while calculator, graph, table, and 3D visualization are visible.

**Pass:** all dependent views reflect the same evaluated snapshot/version.

### T21 — Cancel and supersede

Start a long-running simulation, change parameters, then start another.

**Pass:** obsolete computation cannot overwrite current state.

### T22 — Renderer failure isolation

Break one renderer while other views are active.

**Pass:** unaffected views remain functional and failure is explicit.

## Survival criterion

Healthy extensions are primarily:

~~~text
new content
+ new schema
+ new model
+ new computation
+ new exploration definition
+ new visualization
+ new adapter
~~~

not page copying and special cases.
