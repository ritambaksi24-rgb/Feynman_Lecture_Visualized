# 31 — Technology Selection and Renderer Adoption

Technology choices serve the architecture.

Evaluate candidates by scientific capability, correctness, runtime fit, performance, accessibility, interoperability, maintenance, licensing, ecosystem health, testability, replaceability, and contributor cost.

The authoritative inventory, adoption statuses, explicit non-selections, and future roadmap are maintained in docs/decisions/ADR-008-technology-inventory-and-adoption-roadmap.md.

## Current role candidates

**Three.js:** browser 3D visualization capability.

**D3.js:** low-level 2D SVG/Canvas visualization implementation capability behind renderer-neutral contracts.

**Rete.js:** visual dependency/data-flow graph authoring capability around the project-owned exploration state.

**KaTeX:** mathematical notation/typesetting presentation capability.

**Math.js:** constrained expression parsing/evaluation implementation capability behind the project-owned mathematical-expression contract.

**Scientific Exploration Engine:** project-owned semantic layer; concrete math/parser/plot/geometry libraries are implementation candidates behind contracts.

**Manim:** offline educational/scientific animation authoring and rendering.

**VisPy:** optional Python scientific validation/authoring tooling, not a mandatory browser dependency.

**WebGPU/WebGL:** browser GPU capabilities selected according to workload.

**Web Workers:** browser execution isolation for heavy/long-running computation.

**WebAssembly:** compute acceleration option for suitable algorithms.

## Future supporting capabilities

Subject to concrete requirements and adoption review:

- React Three Fiber for React/Three.js integration;
- Playwright and axe-core integration for browser/accessibility verification;
- unified/remark/rehype for structured content processing;
- Ajv for application-side JSON Schema validation;
- React Router for multi-route application navigation;
- IndexedDB for local persistence;
- TanStack Query for remote/server-state synchronization;
- GraphQL for a future typed remote data API;
- Mermaid for architecture/documentation diagrams;
- DOMPurify for sanitizing untrusted HTML;
- NumPy/SciPy for offline scientific authoring and validation.

## Adoption gate

A technology enters core architecture only after need is established, alternatives are compared, a contract boundary exists, licensing/security is checked, evidence or prototype is sufficient, and replacement impact is understood.

Do not install technology solely because a future feature might eventually need it.

Technologies can be deprecated/replaced through adapters where contracts remain stable.

A listed future technology is not installed or runtime-approved merely because it appears in this document.