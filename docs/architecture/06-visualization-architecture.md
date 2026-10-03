# 06 — Visualization Architecture

## 1. Goal

Visualization is a first-class scientific subsystem capable of supporting multiple rendering strategies without coupling educational content or scientific models to one engine.

## 2. Conceptual pipeline

~~~text
Content
   ↓
Visualization Definition
   ↓
Scientific Inputs
   ↓
Computed State
   ↓
Visual Encoding
   ↓
Renderer Adapter
   ↓
GPU / Canvas / DOM / Video
~~~

## 3. Renderer families

The architecture must be able to host Three.js/WebGL/WebGPU-style 3D rendering, 2D mathematical canvases, interactive plots, SVG/canvas diagrams, pre-rendered Manim-style educational animation assets, and future specialized scientific renderers.

The renderer is a capability decision, not a chapter-level architecture decision.

## 4. Renderer adapters

A renderer adapter translates renderer-independent visual specifications into engine-specific objects.

Example:

~~~text
Scientific State
      ↓
Particle Visualization Spec
      ↓
Three.js Adapter
~~~

The visualization specification should remain usable without importing Three.js.

## 5. Interactive mathematical canvas

The project may implement a GeoGebra-like mathematical environment for graphing, geometry, parameter exploration, and symbolic/numeric explanation.

This is a dedicated subsystem with its own mathematical model and rendering contract, not a collection of chart components.

## 6. Manim integration

Manim-style rendering is treated initially as an asset-generation or specialized animation pipeline. Rendered sequences should be reproducible from source definitions and metadata.

The runtime application must not depend on Manim being installed in the browser.

## 7. Real scientific data

Visualized values must originate from analytical formulas, numerical computation, measured datasets with provenance, or explicitly declared educational approximations.

Mock values are prohibited in production scientific scenes.

## 8. Time and animation

Animation uses a documented timeline/state model rather than arbitrary timer chains. Simulation time and presentation time must be distinguishable.

## 9. Camera and view state

Camera configuration is presentation state. It must not be embedded in the scientific model.

## 10. Performance boundary

Expensive computation belongs in suitable compute contexts, including workers or precomputation where required.

The rendering loop must not repeatedly perform expensive scientific work when the result can be cached or computed incrementally.

## 11. Scientific visual semantics

Color, opacity, scale, line weight, glyph shape, motion, and spatial position must have documented meaning.

Where scientific meaning is represented by color, a complementary non-color cue should be used when needed for interpretation or accessibility.

## 12. Theme compatibility

Visualization roles map through semantic tokens so Light and Dark themes preserve scientific legibility.

Renderer code consumes semantic visualization tokens rather than raw color literals.

## 13. Error states

A scientific visualization distinguishes valid state, loading, invalid parameters, numerical failure, and unavailable capability.

A broken simulation must not silently display plausible-looking output.
