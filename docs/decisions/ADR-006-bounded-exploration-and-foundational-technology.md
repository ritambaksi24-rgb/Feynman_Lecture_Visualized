# ADR-006 — Bounded Scientific Exploration Engine and Foundational Technology Decisions

**Status: ACCEPTED FOR STEP 2 FOUNDATION**
Date: 2026-10-04
Supersedes: the broad capability list in ADR-003 where it conflicts with this bounded kernel definition.

## Context

ADR-003 establishes a project-owned Scientific Exploration Engine, but its capability list is broad enough to be read as a general-purpose mathematics platform. Step 2 also contained several technology choices that were present in implementation or prose without one explicit decision record.

A foundation stage needs a smaller semantic kernel and a clear rule for deferred capabilities.

The project also needs one auditable inventory for technologies discussed during architecture planning so future agents can distinguish selected foundation dependencies, approved future capabilities, candidates, references, and explicit non-selections.

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

The comprehensive technology inventory and future-adoption roadmap is recorded in docs/decisions/ADR-008-technology-inventory-and-adoption-roadmap.md. ADR-005 remains the exact current foundation-version baseline.

### 3. State and reactivity

The project-owned exploration state store is the semantic state authority.

React integration is an application adapter around that store. No additional global state library is required for the foundation. A new state library requires an ADR if it becomes a persistent architectural dependency.

Rete.js, when adopted, is a visual/editor capability around the project-owned dependency graph and state contracts. It must never become the scientific state authority.

### 4. Mathematical expressions

The core expression language remains project-owned and constrained.

No eval, Function, arbitrary JavaScript, or unrestricted scripting language is allowed.

Math.js is an approved implementation candidate for parsing/evaluation behind the project-owned expression adapter/AST contract. Only an explicitly allowlisted, resource-bounded mathematical subset may enter the kernel. Direct arbitrary Math.js evaluation is not the application contract.

A general CAS is deferred until a concrete educational requirement cannot be satisfied by the bounded kernel.

KaTeX is the approved mathematical presentation technology. It typesets mathematical notation and is not a computation engine.

### 5. Browser visualization

SVG is the initial concrete 2D scientific renderer for semantic plots and the Step 2 browser proof.

D3.js is an approved implementation toolkit for 2D renderer capabilities such as scales, axes, paths, geometry, zoom, and interaction. D3 does not define scientific semantics or replace the renderer-neutral visualization contract.

Three.js is the approved future browser 3D renderer capability, but it is not a scientific-domain dependency.

React Three Fiber is an optional integration layer around Three.js if the eventual 3D implementation benefits from React reconciliation. It does not replace the project renderer contract.

Manim and VisPy remain optional offline authoring/scientific tooling and do not become browser-core runtime dependencies.

### 6. Verification tooling

The core continues to use Node's built-in test runner for repository-level deterministic tests in Step 2.

Playwright is the approved future browser end-to-end verification capability. axe-core / its Playwright integration is an approved future automated accessibility capability. Manual browser and assistive-technology review remains required.

### 7. Browser execution and numerical acceleration

Web Workers are the approved browser isolation mechanism for long-running or heavy computation when required by measured workload.

WebAssembly is an approved acceleration capability for algorithms where profiling and numerical/reproducibility evidence justify it.

WebGL and WebGPU are browser GPU capabilities available to renderer implementations; they are not scientific semantic layers.

OffscreenCanvas is a future rendering/worker optimization candidate.

### 8. Content, authoring and publishing

The future structured-content pipeline may use unified/remark and rehype for AST-based content transformations.

MDX is a candidate only if the editorial/content requirements justify component-capable authoring; it must not create an uncontrolled scripting runtime.

DOMPurify is a candidate/requirement when untrusted HTML is rendered.

JSON Schema remains the contract/schema representation. Ajv is a runtime-validation candidate if application-side JSON Schema validation becomes necessary.

React Router is a future navigation capability when multi-route application navigation is introduced.

Mermaid remains documentation/architecture diagram tooling, not scientific runtime visualization.

### 9. Remote state, APIs and persistence

IndexedDB is the future browser persistence mechanism candidate for local experiments/caches.

TanStack Query is a candidate for server/remote-state synchronization if a remote API is introduced. It must not replace the project exploration-state authority.

GraphQL is a candidate remote API/query technology only after a concrete backend/content-data requirement exists.

A server/API framework and remote scientific compute framework remain deferred.

### 10. Scientific offline tooling

Python remains the general offline scientific authoring/validation language where needed.

NumPy and SciPy are future offline numerical/scientific candidates and are not browser-core dependencies.

LAMMPS remains external research/simulation tooling, not a project runtime dependency.

### 11. AI-assisted authoring and retrieval

MCP and RAG are future optional authoring/content-intelligence infrastructure, not scientific runtime dependencies.

Qdrant, Pinecone, and Zilliz/Milvus are retrieval-backend candidates only if a concrete retrieval workload justifies one. These systems must not become a hidden source of scientific truth or provenance.

### 12. Explicit non-selections

- Angular is not the application UI foundation; React remains selected.
- GeoGebra is a reference for interaction breadth, not a project dependency.
- Golden Layout is not a foundation dependency; evaluate only if a measured dockable scientific-workbench requirement emerges.
- SymPy is not selected for the browser exploration core.
- Redux/Zustand or another global state library is not selected for the foundation.
- Generic charting platforms do not replace the renderer-neutral scientific visualization contract.
- Unrestricted scripting/plugin runtimes are prohibited unless a future independently approved sandboxed capability changes that rule.
- A complete CAS remains outside the bounded exploration kernel.

## Technology governance

The complete technology inventory, role, status, boundary, and future-adoption rules live in ADR-008.

A technology enters persistent core architecture only after the project has established a concrete need, compared credible alternatives, created the relevant contract boundary, reviewed licensing/security/maintenance/compatibility/performance/accessibility implications, and produced appropriate prototype or verification evidence.

No technology becomes architectural authority merely because it appears in a package manifest, code example, design file, or conversation.

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
- Math.js, when adopted, is accessed only through the constrained project adapter;
- dependency graph remains deterministic and cycle-safe;
- Rete integration, when adopted, remains a UI/editor layer over project state;
- D3 integration, when adopted, remains behind renderer contracts;
- renderer contracts remain renderer-neutral;
- deferred technology choices are not introduced without decision records;
- capability additions remain outside the kernel unless this ADR is superseded;
- the actual dependency graph matches the status recorded by ADR-008.

## Supersession

A later ADR must explicitly supersede this decision before expanding the Step 2 kernel boundary or changing one of its foundational technology decisions.