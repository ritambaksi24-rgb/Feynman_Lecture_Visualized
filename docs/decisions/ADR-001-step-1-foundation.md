# ADR-001 — Step 1 Foundation

**Status:** Accepted after Step 1 quality gate  
**Date:** 2026-10-03

## Context

The project visualizes the Feynman Lectures chapter by chapter while preserving source flow, maintaining scientific rigor, supporting multiple visualization technologies, integrating Figma, providing interactive scientific/mathematical exploration, and remaining maintainable.

## Decisions

1. Feynman Lectures are the conceptual source of truth within a clear copyright/provenance boundary.
2. Content is independent from UI implementation.
3. Scientific models, computation, exploration, visualization, and rendering are separate responsibilities.
4. Stable subsystem boundaries use contract-first/API-first design.
5. JSON Schema is used for persisted/exchanged JSON, TypeScript contracts for internal APIs, and OpenAPI for genuine external HTTP services.
6. The Scientific Exploration Engine is first-class and connects parameters, expressions, calculations, graphs, plots, tables, simulations, and visualization through shared state.
7. shadcn/ui + Base UI remains the proposed UI foundation, subject to implementation-stage verification.
8. Repository DTCG token data is canonical for implementation; Figma variables mirror/reconcile.
9. Light and Dark themes are foundational.
10. Three.js is a browser visualization capability; Manim is optional offline animation tooling; VisPy is optional Python scientific tooling.
11. Scientific provenance, reproducibility, accessibility, performance, security, and licensing are architectural requirements.
12. The 95% quality gate is mandatory.

## Consequences

The project has greater upfront architecture work but can expand chapters, scientific models, exploration definitions, renderers, and design-system components with controlled coupling.

## Revisit triggers

Revisit when a boundary repeatedly requires exceptions, the exploration model proves insufficient, technology or licensing assumptions materially change, or implementation evidence contradicts this architecture.
