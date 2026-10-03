# 01 — Architecture Principles

**Status:** Proposed foundation  
**Applies to:** Entire project  
**Gate:** Step 1 cannot pass below 95/100 or with a critical unresolved defect.

## 1. Purpose

Feynman Lectures Visualized is a long-lived scientific visualization platform organized around the chapter-by-chapter conceptual flow of *The Feynman Lectures on Physics*. It is not a static textbook clone and not a collection of unrelated interactive demos.

The architecture must allow content, scientific reasoning, computation, visualization, interaction, presentation, and design to evolve independently while remaining traceable to one another.

## 2. Non-negotiable principles

### P1 — Source fidelity
The original Feynman Lectures are the authoritative conceptual source for subject matter, sequence, and historical framing. The application preserves chapter and section flow unless an editorial decision is explicitly documented.

Source fidelity does not mean redistributing the copyrighted work. Public application content must distinguish source references from original explanatory material.

### P2 — Scientific truth over visual convenience
A visualization exists to explain a scientific idea, not to fill empty space or simulate realism.

Every scientific visualization must identify the model, assumptions, parameters, units, and data-generation method that justify what is shown.

Mock scientific data is prohibited in production content.

### P3 — Content is not UI
Chapter content must not be encoded as large React component trees. Content is structured independently from presentation so the same concept can be presented through text, equations, 2D plots, 3D scenes, animation, or other renderers.

### P4 — Scientific models are not renderers
Physics and mathematics must not depend on Three.js, DOM APIs, React, or a specific visualization engine.

Renderers consume scientific state; they do not define scientific truth.

### P5 — Progressive modularity
Modules must represent meaningful responsibilities. We avoid both monoliths and fragmentation.

A module is justified when it has a coherent responsibility, a stable contract, independent testability, or meaningful reuse.

### P6 — Design-system consistency
Application UI is composed from the project design system. One-off styling and locally invented interaction patterns require an explicit reason.

### P7 — Dual-theme by construction
Light and Dark themes are first-class. Tokens and components support both from the beginning; dark mode is not a later recoloring exercise.

### P8 — Accessibility by default
Controls, navigation, typography, motion behavior, focus management, and color usage must meet the agreed accessibility baseline. Scientific visualizations must provide non-color-only interpretation where scientific meaning depends on color.

### P9 — Provenance
Every chapter idea and scientific visualization must be traceable to source material, an editorial interpretation, a scientific model, or an original design decision.

### P10 — Replaceable infrastructure
Infrastructure is selected and wrapped so replacing a rendering library, math engine, or state library does not require rewriting content or scientific models.

### P11 — Explicit decisions
Important architectural choices are recorded in ADRs. Repeatedly rediscovering why a technology or pattern was selected is architectural debt.

### P12 — Quality before expansion
The project follows a hard 95% gate. No next architectural stage begins while the current stage is below 95/100 or contains a critical unresolved defect.

## 3. Design goals

The architecture should produce an experience that feels like a premium scientific instrument and an interactive textbook: rigorous, calm, legible, visually sophisticated, computationally real, responsive, traceable, and extensible across all volumes.

## 4. Anti-goals

The project is not intended to become:

- a scraped mirror of the Feynman Lectures website;
- a gallery of disconnected animations;
- a mock-data dashboard;
- a framework-specific physics engine;
- a collection of hardcoded chapter pages;
- a generic UI kit with scientific terminology added afterward.

## 5. Architectural invariant

The canonical relationship is:

Source → Content Structure → Scientific Interpretation → Model → Computation → Visualization → Interaction → Presentation

No layer may silently absorb the responsibilities of another layer.

## 6. Change rule

A change that violates an invariant requires an ADR and re-evaluation of the architecture score before implementation continues.
