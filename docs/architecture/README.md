# Architecture Specification

This directory contains the Step 1 architecture foundation for **Feynman Lectures Visualized**.

## Documents

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

## Additional governance

- [Step 1 Quality Review](./STEP-1-QUALITY-REVIEW.md)
- [Copyright and Provenance](./COPYRIGHT-AND-PROVENANCE.md)
- [ADR-001 — Step 1 Foundation](../decisions/ADR-001-step-1-foundation.md)

## Foundational decisions

- Feynman Lectures are the conceptual source of truth, while public application content must respect copyright and provenance boundaries.
- The project will not redistribute the source work wholesale.
- Light and Dark themes are foundational requirements.
- The UI foundation is proposed as shadcn/ui + Base UI, subject to implementation-stage verification.
- Scientific models are renderer-independent.
- Visualization engines are adapters/capabilities, not content dependencies.
- Repository token files are the canonical implementation token source; Figma mirrors/reconciles them.
- Markdown is the format for human-readable architecture documentation.
- Structured JSON/schema files are preferred for machine-consumed content and tokens where appropriate.
- ADRs record important architecture decisions and changes.
- The 95% quality gate is mandatory.
