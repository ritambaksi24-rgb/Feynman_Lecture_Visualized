# 01 — Architecture Principles

**Status:** Architecture foundation  
**Revision:** 2026-10-03

## Purpose

Feynman Lectures Visualized is a long-lived scientific visualization platform organized around the chapter-by-chapter conceptual flow of *The Feynman Lectures on Physics*. It is not a static textbook clone, a dashboard, or a gallery of unrelated demonstrations.

## Non-negotiable principles

### P1 — Source fidelity
The Feynman Lectures are the authoritative conceptual source for subject matter, historical framing, and educational sequence. Implementation may differ, but meaningful editorial changes to conceptual order are documented.

### P2 — Copyright-aware source use
Source authority and provenance do not imply a right to redistribute the source work. Public content distinguishes source references and permitted quotations from original project material.

### P3 — Scientific truth over visual convenience
Every scientific visualization is justified by an explicit physical or mathematical model, documented assumptions, parameters, units, and data-generation method. Fabricated scientific values are prohibited in production content.

### P4 — Content is not UI
Educational content is independently structured from React components, routes, and layout implementation.

### P5 — Contract-first subsystem boundaries
Stable subsystem interfaces are designed and reviewed as contracts before implementation. Consumers depend on contracts rather than concrete implementations. This does not require an interface around every local function.

### P6 — Scientific models are not renderers
Physics and mathematics do not depend on React, DOM APIs, Three.js, VisPy, Manim, or another renderer.

### P7 — Scientific exploration is first-class
Parameters, expressions, equations, calculations, graphs, plots, tables, simulations, and visualizations can represent the same underlying scientific state and react consistently to changes.

### P8 — Progressive modularity
Modules represent meaningful responsibility, stable contracts, independent testing, or meaningful reuse. File count is not the goal.

### P9 — Design-system consistency
Application UI uses the project design system. Scientific UI composes with the design system rather than duplicating interaction primitives.

### P10 — Dual-theme by construction
Light and Dark themes are foundational. Scientific visualization semantics remain meaningful and legible in both.

### P11 — Provenance and reproducibility
Source references, datasets, scientific models, generated assets, and external dependencies require traceable provenance. Reproducible outputs should be recoverable from versioned inputs and definitions.

### P12 — Replaceable infrastructure
Rendering engines, math engines, computation backends, state implementations, and external services should be replaceable without rewriting content or scientific models.

### P13 — Secure and accessible by default
Security, accessibility, reduced motion, keyboard operation, error handling, and safe parsing are architectural concerns.

### P14 — Explicit decisions
Material architecture decisions are captured in ADRs. Important technology choices have documented evaluation criteria.

### P15 — Quality before expansion
No subsequent stage begins below 95/100 or with an unresolved critical defect.

## Canonical relationship

~~~text
Feynman Source
      ↓
Content Structure
      ↓
Scientific Interpretation
      ↓
Contract
      ↓
Scientific Model
      ↓
Computation
      ↓
Scientific State
      ↓
Exploration / Visualization
      ↓
Interaction
      ↓
Presentation
~~~

Contracts may exist at several boundaries, but they do not replace domain semantics.

## Anti-goals

The project must not become a scraped mirror, framework-specific physics engine, hardcoded chapter collection, fake-science dashboard, GeoGebra clone, dependency pile, or architecture where Figma/React/one renderer becomes scientific truth.
