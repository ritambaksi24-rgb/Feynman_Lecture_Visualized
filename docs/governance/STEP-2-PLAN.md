# Step 2 — Implementation Foundation Plan

Status: IN_PROGRESS
Baseline: e35acff00a5c45d3509a62294bc24834374bad57

## Objective

Turn the accepted Step 1 architecture and Step 1.5 governance into a small, executable, testable implementation foundation while preserving the architecture's boundaries.

Step 2 is a foundation stage, not a feature-completion stage. It establishes the contracts, package boundaries, runtime seams, design-system source, scientific kernel, and one end-to-end proof needed for later chapter work.

## Scope

1. Repository / Build Foundation
2. Architecture Enforcement
3. Contract & Schema Infrastructure
4. Design Token System
5. Light / Dark Themes
6. Base UI Foundation
7. Figma Foundation
8. Scientific Domain Foundation
9. Computation Foundation
10. Scientific Exploration Engine Kernel
11. Mathematical Canvas Foundation
12. Scientific Visualization Foundation
13. Renderer Abstraction
14. First Renderer Proof
15. Scientific Data / Provenance
16. State / Reactivity
17. Accessibility
18. Security
19. Testing Infrastructure
20. Performance Infrastructure
21. Diagnostics / Failure Handling
22. Capability Registry
23. Authoring Tooling
24. Technology ADRs
25. Developer Documentation
26. End-to-End Scientific Prototype

## Implementation order

### Track A — Repository and contracts

Create the package/workspace layout, strict TypeScript configuration, build scripts, CI entry points, public package surfaces, shared identifiers, error model, versioned contracts, and JSON schemas.

### Track B — Design system

Establish DTCG 2025.10 token files as the canonical repository source. Add primitive and semantic layers, Light/Dark mappings, token-reference validation, CSS generation, Base UI integration, project-owned Feynman components, and accessibility-oriented state contracts.

### Track C — Scientific kernel

Implement renderer-independent scientific domain types, a minimal unit/dimension model, deterministic computation contract, safe mathematical-expression AST/parser/evaluator, dependency graph, and a parameter/exploration state store.

### Track D — Visualization and rendering

Define renderer-neutral VisualizationState, scene/mark semantics, renderer adapter contract, lifecycle/error handling, and a first browser renderer proof. Renderer objects must never cross scientific/exploration contracts.

### Track E — Systems quality

Add provenance records, reproducibility metadata, cancellation/version rules, diagnostics, capability registry, security limits, test harnesses, performance budgets, and authoring-tool conventions.

### Track F — End-to-end proof

Build one deterministic scientific experiment that flows:

scientific model → computation → exploration state → visualization state → renderer

The prototype must expose the same scientific state to at least a numerical readout and a visualization, with reset/recompute behavior and explicit provenance/version metadata.

## Exploration-engine boundary

The Step 2 Scientific Exploration Engine is only the reusable semantic/reactive kernel.

### Core capabilities in Step 2

- constrained mathematical expressions;
- named variables and constants;
- parameters and bounded parameter updates;
- dependency graph construction and cycle rejection;
- deterministic derived-value recomputation;
- exploration snapshots/reset;
- versioned exploration state;
- scientific experiment state handoff to visualization contracts.

### Explicitly outside the Step 2 kernel

- general-purpose computer algebra;
- symbolic integration or differentiation;
- general equation solving;
- theorem proving;
- dynamic code execution;
- a general geometry engine;
- a generic spreadsheet/notebook product;
- unrestricted data-science/statistics tooling;
- a general charting platform;
- a general-purpose unit-conversion package;
- a 3D scene graph;
- a generic scripting/plugin runtime.

Those capabilities may be introduced later only as separately bounded, versioned capability extensions with their own ADR, contract, security, performance, and verification evidence.

## Technology decision boundary

Foundational choices are recorded in ADR-005 and ADR-006.

A new foundational runtime dependency, state mechanism, renderer family, expression engine, or authoring platform requires the decision process before implementation. "Convenient" is not an accepted architectural criterion.

## Modularity rule

Use packages only where they represent a stable architectural boundary or independent testing/replacement value. Do not create micro-packages for individual helpers or JSX fragments.

## Dependency policy

Runtime dependencies require current-source verification for license, maintenance, compatibility, and architecture fit before adoption. Current Step 2 UI/build choices use React + Vite + Base UI, with repository-owned components and tokens. Heavy scientific authoring tools remain offline capabilities.

## Non-goals

Step 2 does not attempt:

- full Feynman chapter content migration;
- production Three.js feature breadth;
- a GeoGebra clone;
- a complete symbolic algebra system;
- full DFT/Hartree-Fock/relativistic computation;
- every UI component;
- renderer-specific scientific semantics;
- unrestricted notebook/CAS functionality;
- wholesale reproduction of copyrighted Feynman text or media.

## Stage evidence requirements

Step 2 cannot pass from documentation alone. The final review must contain executed evidence for:

- dependency/build reproducibility;
- contract/schema validation;
- token/reference validation and generated output;
- Light/Dark theme integrity;
- component accessibility;
- scientific invariant tests;
- expression-parser security properties;
- dependency-graph cycle detection and deterministic recomputation;
- compute cancellation/version behavior;
- renderer substitution seam;
- provenance/reproducibility record;
- end-to-end scientific prototype;
- adversarial boundary review;
- repository enforcement policy applied to protected integration branches;
- technology decisions and exploration scope reconciled against ADR-006/ADR-007.

## Checkpoints

Implementation checkpoints may be committed while the stage remains IN_PROGRESS. Only VERIFIED_PASS in the stage review permits progression to Step 3.
