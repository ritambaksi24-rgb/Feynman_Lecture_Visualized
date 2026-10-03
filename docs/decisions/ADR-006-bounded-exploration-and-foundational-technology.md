# ADR-006 — Bounded Scientific Exploration Engine and Foundational Technology Decisions

Status: ACCEPTED FOR STEP 2 FOUNDATION
Date: 2026-10-04
Supersedes: the broad capability list in ADR-003 where it conflicts with this bounded kernel definition.

## Context

ADR-003 establishes a project-owned Scientific Exploration Engine, but its capability list is broad enough to be read as a general-purpose mathematics platform. Step 2 also contained several technology choices that were present in implementation or prose without one explicit decision record.

A foundation stage needs a smaller semantic kernel and a clear rule for deferred capabilities.

## Decision

### 1. Exploration Engine core

The Step 2 core is a reusable semantic/reactive kernel for scientific exploration.

It owns:

- constrained mathematical-expression parsing and evaluation;
- named variables, constants, and bounded parameters;
- dependency graphs and cycle detection;
- deterministic derived-value recomputation;
- exploration snapshots and reset;
- versioned exploration state;
- handoff of scientific state into renderer-neutral visualization contracts.

The kernel does not become a general-purpose CAS, geometry system, spreadsheet, notebook, statistics platform, scripting runtime, or 3D scene graph.

General capabilities may be added only as separately bounded, versioned capability extensions with explicit contracts, security/resource analysis, performance budgets, and stage-specific verification.

### 2. Application and build stack

Accepted foundation choices:

- React for application UI;
- Base UI for accessible headless interaction primitives;
- Vite for browser build/dev tooling;
- TypeScript for implementation;
- npm workspaces and package-lock.json for repository/package management;
- repository DTCG JSON plus generated CSS for design-token implementation;
- plain project-owned CSS for component/application styling in the foundation rather than a second utility-style token source.

### 3. State and reactivity

The project-owned exploration state store is the semantic state authority.

React integration is an application adapter around that store. No additional global state library is required for the foundation. A new state library requires an ADR if it becomes a persistent architectural dependency.

### 4. Mathematical expressions

The core expression language remains project-owned and constrained.

No `eval`, `Function`, arbitrary JavaScript, or unrestricted scripting language is allowed.

A general CAS is deferred until a concrete educational requirement cannot be satisfied by the bounded kernel.

### 5. Browser visualization

SVG is the initial concrete 2D scientific renderer for semantic plots and the Step 2 browser proof.

Three.js is the approved future browser 3D renderer capability, but it is not a scientific-domain dependency and is not required for the Step 2 kernel.

Manim and VisPy remain optional offline authoring/scientific tooling and do not become browser-core runtime dependencies.

### 6. Verification tooling

The core continues to use Node's built-in test runner for repository-level deterministic tests in Step 2.

Browser end-to-end testing is planned as a separate verification capability; Playwright is the designated candidate for that role, but adding it is not a Step 2 runtime requirement.

### 7. Deferred technology decisions

The following remain deliberately deferred until a real requirement and evidence exist:

- browser 3D implementation details beyond the Three.js capability boundary;
- advanced plotting/data-grid libraries;
- general-purpose CAS integration;
- persistent client state libraries;
- server/API framework;
- remote scientific compute framework;
- advanced numerical/scientific libraries in the browser;
- notebook/plugin ecosystems.

Deferred means not selected, not accidentally implied by current implementation.

## Alternatives considered

- Making the exploration engine a feature-complete GeoGebra-like platform: rejected as uncontrolled scope.
- Adopting a general CAS as the core expression layer: deferred because Step 2 does not require symbolic algebra.
- Adding Redux/Zustand/etc. immediately: unnecessary while the project-owned exploration store is small and testable.
- Making Three.js a cross-cutting scientific dependency: rejected; it remains a renderer capability.
- Adopting a utility CSS framework as a second token source: rejected for the foundation.

## Consequences

The architecture is smaller and easier to verify. Future capabilities have explicit expansion points without silently enlarging the Step 2 kernel.

## Verification plan

Verify:

- expression parser remains bounded and non-executable;
- dependency graph remains deterministic and cycle-safe;
- renderer contracts remain renderer-neutral;
- deferred technology choices are not introduced without decision records;
- capability additions remain outside the kernel unless this ADR is superseded.

## Supersession

A later ADR must explicitly supersede this decision before expanding the Step 2 kernel boundary.
