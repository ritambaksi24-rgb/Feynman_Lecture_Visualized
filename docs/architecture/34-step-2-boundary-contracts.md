# 34 — Step 2 Boundary Contracts

The executable foundation follows the accepted layered architecture:

Content → Scientific Domain → Computation → Exploration → Visualization → Application → Presentation.

The repository enforces package dependency direction. Contracts are dependency-light; scientific domain depends only on contracts; computation depends on contracts and scientific domain; exploration depends only on contracts; visualization depends only on contracts; the design-system package depends on UI primitives rather than scientific packages. Application code is the composition boundary.

Renderer contracts are renderer-neutral. The concrete SVG and memory renderer implementations are adapters.

Scientific models own variables, parameters, units/dimensions, assumptions, validity domain, initial conditions, state evolution, invariants, randomness classification, and numerical method metadata.

The capability registry resolves explicit id/version pairs and factory entries; it is not global dependency injection or application state.

The end-to-end proof uses an application service to call the computation contract and return renderer-neutral state. React presentation does not own the scientific model or numerical integration.