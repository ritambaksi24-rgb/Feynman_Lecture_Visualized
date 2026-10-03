# Architecture Specification

This is the architecture foundation for **Feynman Lectures Visualized**.

The project is contract-driven at stable subsystem boundaries, scientifically grounded, renderer-independent, and designed for chapter-by-chapter expansion.

## Documents

### Foundation

1. [Architecture Principles](./01-architecture-principles.md)
2. [System Boundaries](./02-system-boundaries.md)
3. [Repository Structure](./03-repository-structure.md)
4. [Content Model](./04-content-model.md)
5. [Scientific Model Architecture](./05-scientific-model-architecture.md)
6. [Visualization Architecture](./06-visualization-architecture.md)
7. [Design-System Architecture](./07-design-system-architecture.md)
8. [Figma Architecture](./08-figma-architecture.md)
9. [Dependency Rules](./09-dependency-rules.md)
10. [Data-Flow Rules](./10-data-flow-rules.md)
11. [Naming Conventions](./11-naming-conventions.md)
12. [Modularity Rules](./12-modularity-rules.md)
13. [Quality Gates](./13-quality-gates.md)
14. [Future Extensibility Tests](./14-future-extensibility-tests.md)

### API and contracts

15. [API-First Architecture](./15-api-first-architecture.md)
16. [Contract and Schema Strategy](./16-contract-and-schema-strategy.md)
17. [Internal Module API Strategy](./17-internal-module-api-strategy.md)
18. [External HTTP API Strategy](./18-external-http-api-strategy.md)
19. [API Versioning and Compatibility](./19-api-versioning-and-compatibility.md)
20. [Contract Validation and Testing](./20-contract-validation-and-testing.md)

### Scientific exploration and execution

21. [Scientific Exploration Engine](./21-scientific-exploration-engine.md)
22. [State and Reactivity Architecture](./22-state-and-reactivity-architecture.md)
23. [Computation and Execution Architecture](./23-computation-and-execution-architecture.md)
24. [Scientific Data, Provenance and Reproducibility](./24-scientific-data-provenance-and-reproducibility.md)
25. [Performance and Rendering Budgets](./25-performance-and-rendering-budgets.md)
26. [Accessibility and Scientific UX](./26-accessibility-and-scientific-ux.md)

### Security, content, extension, and operations

27. [Security, Privacy and Supply Chain](./27-security-privacy-and-supply-chain.md)
28. [Content Authoring and Editorial Pipeline](./28-content-authoring-and-editorial-pipeline.md)
29. [Capability Registry and Extension Architecture](./29-capability-registry-and-extension-architecture.md)
30. [Observability, Diagnostics and Failure Handling](./30-observability-diagnostics-and-failure-handling.md)
31. [Technology Selection and Renderer Adoption](./31-technology-selection-and-renderer-adoption.md)
32. [Build, Release and Deployment Architecture](./32-build-release-and-deployment-architecture.md)

### Governance

- [Copyright and Provenance](./COPYRIGHT-AND-PROVENANCE.md)
- [Contract Cross-Check](./09-contract-cross-check.md)
- [Step 1 Quality Review](./STEP-1-QUALITY-REVIEW.md)
- [ADR-001 — Step 1 Foundation](../decisions/ADR-001-step-1-foundation.md)
- [ADR-002 — Contract-First Boundaries](../decisions/ADR-002-contract-first-boundaries.md)
- [ADR-003 — Scientific Exploration Engine](../decisions/ADR-003-scientific-exploration-engine.md)

## Standards and references

The architecture currently references:

- Design Tokens Community Group Format 2025.10;
- JSON Schema Draft 2020-12;
- OpenAPI Specification 3.2.0 for external HTTP APIs;
- WCAG 2.2 AA as the product accessibility target.

These are external standards. Project-specific contracts remain authoritative within their defined boundaries.
