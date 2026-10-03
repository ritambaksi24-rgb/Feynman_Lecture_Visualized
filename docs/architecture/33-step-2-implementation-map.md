# 33 — Step 2 Implementation Map

Step 2 is the executable foundation stage. It maps each approved area to an explicit repository boundary.

| Area | Boundary |
| --- | --- |
| Repository / Build | root workspace, app, packages, TypeScript project references |
| Architecture Enforcement | tooling/architecture |
| Contract & Schema | packages/contracts, schemas |
| Design Tokens | packages/design-system/tokens, tooling/tokens |
| Light / Dark | semantic token modes + theme attribute |
| Base UI | packages/design-system |
| Figma Foundation | docs/figma |
| Scientific Domain | packages/scientific-domain |
| Computation | packages/computation |
| Exploration | packages/exploration |
| Mathematical Canvas | exploration contract; canvas adapter follows after kernel |
| Visualization | packages/visualization |
| Renderer Abstraction | ScientificRenderer |
| First Renderer Proof | application SVG visualization |
| Provenance | contracts and stage artifacts |
| State / Reactivity | exploration + application composition |
| Accessibility | semantic structure + component contracts |
| Security | constrained expression parser + resource limits |
| Testing | tests/core + CI |
| Performance | simulation limits + renderer-neutral state |
| Diagnostics | structured error kinds |
| Capability Registry | contracts; implementation checkpoint |
| Authoring | docs/authoring + tooling |
| Technology ADRs | docs/decisions |
| End-to-End | harmonic oscillator proof |
