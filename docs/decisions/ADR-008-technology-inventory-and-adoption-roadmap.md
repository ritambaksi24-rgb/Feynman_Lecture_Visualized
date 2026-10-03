# ADR-008 — Technology Inventory and Adoption Roadmap

**Status: ACCEPTED AS THE PROJECT TECHNOLOGY ROADMAP**
**Date: 2026-10-04**
**Relationship:** Supplements ADR-005 and ADR-006. It does not supersede them unless a later ADR explicitly says so.

## Context

The project has accumulated technology decisions and future ideas across architecture documents, implementation work, and planning discussions. A foundation must distinguish:

- technologies already selected and verified for the current stack;
- technologies explicitly approved as future implementation capabilities;
- technologies that are candidates only after a concrete requirement;
- technologies that are references, alternatives, or explicitly not selected.

This record centralizes that inventory so future agents do not infer architectural authority from a package name appearing in conversation or from an exploratory prototype.

## Decision

### A. Current foundation — selected

| Technology | Role | Status |
| --- | --- | --- |
| React | Application UI | Selected for foundation |
| React DOM | Browser UI runtime | Selected for foundation |
| Node.js | JavaScript runtime used by tooling/build/tests | Selected foundation runtime; version floor remains in package manifest |
| npm | Package manager | Selected foundation package manager |
| TypeScript | Type system / implementation language | Selected for foundation |
| Vite | Browser build and development | Selected for foundation |
| @vitejs/plugin-react | Vite React integration | Selected build dependency |
| @types/react / @types/react-dom | TypeScript type declarations | Selected build/type dependencies |
| Base UI | Headless accessible UI primitives | Selected for foundation |
| shadcn/ui conventions | Component/composition conventions layered over Base UI and project-owned tokens | Selected design-system approach; not a separate runtime dependency source |
| npm workspaces + package-lock.json | Repository/package management | Selected for foundation |
| DTCG JSON + generated CSS | Canonical design-token implementation | Selected for foundation |
| Project-owned CSS | Component/application styling | Selected for foundation |
| SVG | Initial 2D scientific renderer | Selected for foundation |
| Node built-in test runner | Deterministic repository/core tests | Selected for foundation |
| GitHub Actions | CI/repository validation automation | Selected for foundation |
| Figma | Design-intent and variable/component reconciliation tool | Selected workflow tool, not runtime |

Exact current foundation versions remain governed by ADR-005 and the lockfile.

### B. Scientific mathematics and visualization — planned/approved roles

These technologies are approved as implementation capabilities, but they are not retroactively part of the Step 2 runtime unless separately adopted and verified.

| Technology | Role | Boundary |
| --- | --- | --- |
| KaTeX | Mathematical notation/typesetting | Presentation layer only; never scientific computation authority |
| Math.js | Mathematical expression parsing/evaluation implementation | Must sit behind a project-owned constrained expression adapter/AST contract; no unrestricted parser access |
| Rete.js | Visual dependency/data-flow graph authoring and exploration UI | UI/editor capability; project exploration state remains semantic authority |
| D3.js | Low-level 2D visualization primitives: scales, axes, paths, geometry, interaction | Renderer implementation technology; does not define scientific visualization contracts |
| Three.js | Browser 3D rendering | Future renderer capability; scientific semantics remain renderer-independent |
| React Three Fiber | Optional React integration for Three.js | Implementation option only; does not replace the renderer contract |
| Web Workers | Isolation of heavy/long-running browser computation | Browser execution capability; bounded by computation/resource contracts |
| WebAssembly | Acceleration for suitable computational kernels | Only where profiling demonstrates need and numerical/reproducibility requirements can be met |
| WebGL | Browser GPU capability for rendering | Capability layer for renderer implementations |
| WebGPU | Future GPU capability | Adopt only when browser support and workload evidence justify it |
| OffscreenCanvas | Worker-side rendering/transfer optimization | Candidate optimization for measured rendering bottlenecks |
| Comlink | RPC-style ergonomics over Web Worker messaging | Candidate when worker orchestration becomes complex |

### C. Content, authoring, and scientific publishing — future

| Technology | Role | Status / boundary |
| --- | --- | --- |
| unified / remark | Markdown-to-AST content processing | Preferred future structured-text pipeline candidate |
| rehype | HTML AST processing in the same content pipeline | Candidate with remark/unified |
| MDX | Component-capable authoring | Candidate only if structured content requirements justify executable component authoring |
| DOMPurify | Sanitization of untrusted HTML/Markdown-derived output | Required candidate if untrusted HTML is ever rendered |
| JSON Schema | Canonical content/contract shape description | Already architectural direction |
| Ajv | Runtime JSON Schema validation | Future runtime/authoring candidate; use if application-side schema validation is required |
| React Router | Chapter/section/application navigation | Future routing candidate when multi-route application navigation is introduced |
| IndexedDB | Browser persistence for local experiments/caches | Future storage mechanism if persistent local state is required |
| TanStack Query | Remote/server-state fetching, caching and synchronization | Candidate only after a server/remote-data requirement exists; never the exploration-state authority |
| GraphQL | Typed remote API/query layer | Candidate only if/when a backend and flexible content/data API are justified |
| OpenTelemetry | Structured telemetry for a future backend/remote-compute system | Candidate only if distributed runtime services are introduced |
| Mermaid | Developer/architecture diagrams and documentation | Documentation tooling; not scientific runtime visualization |
| CodeMirror 6 | Structured expression/editor input surface | Candidate if expression authoring needs exceed native controls |
| Storybook | Isolated design-system/component development, documentation, interaction and visual testing | Future design-system verification candidate |
| @testing-library/react | User-facing React component/integration tests | Future UI testing candidate; not a test runner |
| MSW | Deterministic HTTP/GraphQL/WebSocket mocking | Future remote-data testing candidate |
| Style Dictionary | Design-token transformation/build tooling | Candidate only if custom DTCG generation becomes insufficient |

### D. Scientific authoring and validation — offline

| Technology | Role | Boundary |
| --- | --- | --- |
| Python | Offline scientific tooling and validation | Not a browser runtime dependency |
| NumPy | Offline numerical arrays/computation | Adopt only for concrete authoring/validation workloads |
| SciPy | Offline numerical/scientific methods | Adopt only for concrete authoring/validation workloads |
| Manim | Offline mathematical/scientific animation authoring | Optional; generated outputs must carry provenance |
| VisPy | Offline scientific visualization/validation | Optional; not browser-core |
| LAMMPS | External research/simulation tooling | Not a project runtime dependency; use only for validated external research workflows |

### E. Browser verification and quality

| Technology | Role | Status |
| --- | --- | --- |
| Playwright | Browser end-to-end and interaction testing | Future verification capability |
| @axe-core/playwright / axe-core | Automated accessibility checks | Future verification capability; manual AT review remains mandatory |
| Browser accessibility APIs / manual assistive technology testing | Human verification | Required verification method, not a package dependency |

### F. AI/content-intelligence tooling — optional, separate from the core runtime

The following technologies have been discussed as possible future content/authoring infrastructure. They are not required by the Feynman scientific runtime and must not leak into core scientific semantics.

| Technology | Possible role | Status |
| --- | --- | --- |
| MCP | Controlled tool/context integration for authoring agents | Future optional authoring infrastructure |
| RAG | Retrieval-assisted source/provenance workflows | Future optional authoring infrastructure |
| Qdrant | Vector retrieval backend candidate | Candidate only |
| Pinecone | Managed vector retrieval backend candidate | Candidate only |
| Zilliz / Milvus ecosystem | Vector retrieval backend candidate | Candidate only |

Any AI/content-intelligence layer must preserve the project's source-of-truth, provenance, security, and human-review requirements.

### G. Technologies discussed but not adopted as core architecture

| Technology | Treatment |
| --- | --- |
| Angular | Not selected; React remains the application UI foundation |
| Golden Layout | Not selected as a foundation; evaluate only if a measured need for a dockable scientific workbench emerges |
| GeoGebra | Reference/benchmark for interaction breadth, not a project dependency |
| General-purpose CAS | Deferred; outside the bounded exploration kernel |
| SymPy | Not selected for the project exploration core |
| Redux/Zustand or another global client-state library | Not selected for the foundation; project-owned exploration state remains authoritative |
| Generic charting platforms | Not a substitute for the renderer-neutral scientific visualization contract |
| Unrestricted scripting/plugin runtime | Explicitly prohibited by the exploration/security boundary |

## Architectural rules

1. A technology is not architectural authority merely because it is installed, imported, mentioned in documentation, or discussed in chat.
2. Scientific semantics, content provenance, exploration state, visualization contracts, and design-token authority remain project-owned.
3. Third-party libraries are implementation tools behind stable contracts where a replacement boundary is valuable.
4. Adding a persistent dependency requires the decision process defined by DECISION-POLICY.md.
5. Future technology adoption requires current-source license, maintenance, security, compatibility, performance, accessibility, and replacement-impact review.
6. Heavy computation or rendering must be isolated behind capability boundaries and bounded resource policies.
7. No technology may turn the exploration kernel into a general-purpose CAS, spreadsheet, notebook, scripting platform, or generic visualization product without a superseding ADR.

## Coverage audit

This roadmap covers the technology categories currently required or discussed for the project:

- application/runtime;
- build/package management;
- UI primitives and design system;
- mathematics/typesetting;
- expression parsing/evaluation;
- dependency/dataflow editing;
- 2D and 3D scientific visualization;
- browser GPU and worker execution;
- content authoring;
- schema/validation;
- navigation;
- local and remote data;
- API;
- documentation diagrams;
- browser/E2E/accessibility verification;
- offline scientific computation/animation;
- AI-assisted authoring/retrieval;
- alternatives and explicitly non-selected technologies.

A future technology not represented here must either be a local implementation detail or go through the decision process and be added to this inventory before becoming a persistent architectural dependency.

## Direct dependency audit

At the technology-roadmap checkpoint used by the current Step 2 state, the repository manifests contain no unrecorded direct third-party dependency. The direct runtime/build dependencies are covered by the selected foundation inventory above, while the lockfile records transitive dependency resolution. Internal @feynman/* workspace packages are project-owned modules, not third-party technologies.

New direct dependencies must be added to the appropriate inventory category before they become persistent architecture and must pass the adoption gate.

## Verification plan

Verify this inventory against:

- the current package manifests and lockfile;
- approved architecture documents and ADRs;
- current external documentation for candidate technologies;
- license/security/maintenance evidence at adoption time;
- actual capability requirements before installation.

This document does not claim that future technologies are installed, runtime-compatible with the current application, or already verified. It records controlled architectural intent and adoption boundaries.

## References

- KaTeX: https://katex.org/docs/
- Math.js: https://mathjs.org/docs/expressions/
- Rete.js: https://retejs.org/docs/
- D3.js: https://d3js.org/
- Three.js: https://threejs.org/docs/
- React Three Fiber: https://r3f.docs.pmnd.rs/
- Playwright: https://playwright.dev/docs/
- axe-core: https://github.com/dequelabs/axe-core
- React Router: https://reactrouter.com/
- remark/unified: https://remark.js.org/
- TanStack Query: https://tanstack.com/query/latest/docs/
