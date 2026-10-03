# 15 — API-First Architecture

For this project, API-first means contract-first at stable subsystem boundaries. It does not mean every helper function needs an interface.

Requirement → boundary identification → contract design → contract review → validation → implementation → consumers.

Stable contracts are expected between content/application, scientific model/computation, computation/exploration, exploration/visualization, visualization/renderer adapters, design tokens/implementations, and any real external service.

A useful contract defines inputs, outputs, invariants, errors, lifecycle, ownership, versioning, and compatibility expectations.

Internal APIs normally use TypeScript contracts and relevant schemas. External HTTP APIs use OpenAPI only when a genuine HTTP service exists.

Consumers depend on semantic capability contracts, not vendor implementation objects. For example, exploration should expose VisualizationState rather than ThreeMesh.

Side effects and expected failures are explicit. Public API surface is intentionally small.

API-first anti-patterns include interface-for-everything, vendor-class leakage, generic wrappers without semantics, hidden mutable globals, object-graph APIs, and unnecessary versioning.

Acceptance test: a second implementation can satisfy the subsystem contract without importing the first implementation.
