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

## Canonical source rule

Each contract has one authoritative definition. Derived artifacts identify their source and generation path.

## Version rule

Content schema, scientific model, exploration definition, visualization definition, internal API, HTTP API, and design-token source can evolve independently.

## Test rule

Every stable contract has validation evidence appropriate to its risk.

## Anti-patterns

- duplicate independently maintained schemas;
- implementation classes becoming accidental public APIs;
- renderer classes crossing scientific boundaries;
- HTTP infrastructure created without service need;
- Figma variables diverging silently from repository tokens;
- exploration views performing conflicting calculations.
