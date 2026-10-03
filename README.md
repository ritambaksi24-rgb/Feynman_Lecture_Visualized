# Feynman Lectures Visualized

A scientific visualization platform for exploring *The Feynman Lectures on Physics* chapter by chapter.

The project preserves the source's conceptual flow while building original explanations, scientific models, interactive mathematical/scientific exploration, and a modular design system.

## Current stage

**Step 1 — Foundational Architecture Revision**

Architecture is established before application implementation. The project follows a hard quality gate: no later stage begins until the current stage reaches at least 95/100 with no unresolved critical defect.

## Core rules

- Feynman Lectures are the conceptual source of truth; public distribution respects copyright and provenance.
- Content is separate from UI.
- Scientific models are separate from computation and rendering.
- Stable subsystem boundaries are contract-first.
- The Scientific Exploration Engine connects parameters, expressions, calculations, graphs, plots, tables, simulations, and visualizations through shared scientific state.
- Light and Dark themes are first-class.
- Repository design tokens are the canonical implementation token source; Figma is reconciled with them.
- Scientific output comes from real models, calculations, or licensed data, not fabricated production values.
- Three.js, mathematical canvas tooling, Manim, VisPy, and future engines remain replaceable capabilities.
