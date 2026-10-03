# Feynman Lectures Visualized

A scientific visualization platform for exploring *The Feynman Lectures on Physics* chapter by chapter.

The project preserves the source's conceptual flow while building original explanations, scientific models, interactive mathematical/scientific exploration, and a modular design system.

## Current stage

**Step 1.5 — AI-Resilient Project Governance**

The repository now contains the durable project control plane for human contributors, coding agents, and Figma AI agents. Step 2 implementation is blocked until Step 1.5 passes its independent quality gate.

The project follows a hard quality gate: no later stage begins until the current stage reaches at least 95/100 with no unresolved critical defect.

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
- AI agents must inspect repository state, follow the governance control plane, verify their work, and never use conversation memory as project authority.

## Governance

- [Governance control plane](./docs/governance/README.md)
- [Project constitution](./docs/governance/PROJECT-CONSTITUTION.md)
- [Current state](./docs/governance/CURRENT-STATE.md)
- [Step 1.5 quality gate](./docs/governance/QUALITY-GATE.md)
- [Figma AI agent rules](./docs/governance/FIGMA-AI-AGENTS.md)
