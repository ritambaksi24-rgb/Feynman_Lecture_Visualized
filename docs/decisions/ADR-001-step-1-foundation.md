# ADR-001 — Step 1 Foundation

**Status:** Accepted after Step 1 quality gate  
**Date:** 2026-10-03

## Context

The project is intended to visualize the Feynman Lectures chapter by chapter while preserving source flow, maintaining scientific rigor, supporting multiple visualization technologies, using a modular design system, integrating Figma, and remaining maintainable over a long lifecycle.

## Decisions

1. Treat the Feynman Lectures as the authoritative conceptual source while maintaining a clear copyright/provenance boundary.
2. Model content independently from UI.
3. Separate scientific models from computation and rendering.
4. Design visualization around renderer-independent specifications and adapters.
5. Use shadcn/ui + Base UI as the proposed UI foundation, with implementation-stage verification.
6. Use a tokenized design system with Light and Dark modes as first-class requirements.
7. Use the repository's machine-readable token source as the canonical implementation token source; Figma variables mirror/reconcile with it.
8. Use Markdown for architectural documentation and structured JSON/schema formats for machine-consumed content and tokens where appropriate.
9. Use ADRs for important architectural decisions.
10. Apply the 95% hard quality gate before advancing stages.

## Consequences

The project incurs more upfront architecture work and validation. In return, chapter expansion, renderer replacement, theme support, scientific validation, and design-system evolution can proceed with less cross-layer coupling.

## Revisit triggers

Revisit this ADR if the chosen UI foundation cannot satisfy accessibility or modularity requirements; the content model proves insufficient for multiple volumes; renderer adapters create unacceptable performance or complexity; licensing requirements materially change; Figma/token synchronization creates unacceptable drift; or a future subsystem requires breaking a stated boundary.
