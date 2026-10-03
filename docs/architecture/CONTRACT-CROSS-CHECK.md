# Contract Cross-Check

This document verifies the major contract boundaries in the foundation architecture.

| Boundary | Contract |
| --- | --- |
| Content ↔ Application | Content contract/schema |
| Scientific Model ↔ Computation | Scientific model/computation contract |
| Computation ↔ Exploration | Computation result/state contract |
| Exploration ↔ Visualization | Exploration/visualization contract |
| Visualization ↔ Renderer | Renderer contract |
| Tokens ↔ Implementation | DTCG token source |
| Persistence/Exchange | JSON Schema |
| HTTP service, when present | OpenAPI |

Each contract has one authoritative definition. Derived artifacts identify their source and generation path.

Content/model/exploration/visualization/schema/API versions can evolve independently.

Every stable contract has validation evidence appropriate to its risk.

Anti-patterns include duplicate schemas, implementation classes becoming accidental public APIs, renderer classes crossing scientific boundaries, HTTP infrastructure without service need, silent Figma-token drift, and conflicting calculations among exploration views.
