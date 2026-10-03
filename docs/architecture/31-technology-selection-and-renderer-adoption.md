# 31 — Technology Selection and Renderer Adoption

Technology choices serve the architecture.

Evaluate candidates by scientific capability, correctness, runtime fit, performance, accessibility, interoperability, maintenance, licensing, ecosystem health, testability, replaceability, and contributor cost.

## Current role candidates

**Three.js:** browser 3D visualization capability.

**Scientific Exploration Engine:** project-owned semantic layer; concrete math/parser/plot/geometry libraries are implementation candidates behind contracts.

**Manim:** offline educational/scientific animation authoring and rendering.

**VisPy:** optional Python scientific validation/authoring tooling, not a mandatory browser dependency.

**WebGPU/WebGL:** browser GPU capabilities selected according to workload.

**WebAssembly:** compute acceleration option for suitable algorithms.

## Adoption gate

A technology enters core architecture only after need is established, alternatives are compared, a contract boundary exists, licensing/security is checked, evidence or prototype is sufficient, and replacement impact is understood.

Do not install technology solely because a future feature might eventually need it.

Technologies can be deprecated/replaced through adapters where contracts remain stable.
