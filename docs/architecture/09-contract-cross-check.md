# Contract Cross-Check

This internal architecture audit verifies that the API/contract concepts are reflected consistently across the foundation documents.

## Required mappings

| Boundary | Contract |
| --- | --- |
| Content ↔ application | Content contract/schema |
| Scientific model ↔ computation | Scientific model/computation contract |
| Computation ↔ exploration | Computation result/state contract |
| Exploration ↔ visualization | Exploration/visualization contract |
| Visualization ↔ renderer | Renderer contract |
| Tokens ↔ implementation | DTCG token source |
| Persistence/exchange | JSON Schema |
| HTTP service, if present | OpenAPI |

## Canonical-source rule

Every contract has one authoritative definition and any generated/derived representations identify their source.

## Test rule

Every stable contract must have validation evidence appropriate to its risk.

## Anti-patterns

- duplicate manually maintained schemas;
- implementation classes becoming accidental APIs;
- renderer classes crossing scientific boundaries;
- HTTP APIs introduced without real service need;
- Figma variables silently diverging from repository tokens.
