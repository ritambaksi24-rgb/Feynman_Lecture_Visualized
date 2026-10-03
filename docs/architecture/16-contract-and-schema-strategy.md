# 16 — Contract and Schema Strategy

| Contract | Canonical form | Purpose |
| --- | --- | --- |
| Design tokens | DTCG JSON | Cross-tool design semantics |
| Persisted/exchanged JSON | JSON Schema | Data shape and validation |
| Internal API | TypeScript contract | Module/subsystem behavior |
| External HTTP API | OpenAPI | Service interface |
| Scientific model | Domain contract + schema | Scientific meaning and constraints |
| Exploration definition | Domain contract + schema | Experiment configuration |

Persisted/exchanged JSON uses explicit schemas. The project targets JSON Schema Draft 2020-12 unless a later architecture decision changes the adopted dialect.

TypeScript types are appropriate for internal code-facing contracts. Duplicate independent definitions of one serialized shape are prohibited.

OpenAPI is required only when an external HTTP boundary exists.

Scientific contracts capture units, dimensions, valid domains, invariants, tolerances, and assumptions that generic schemas cannot express.

Each contract has one canonical source, owner, consumers, version, compatibility policy, and validation path.

Generated types, clients, validators, and token outputs are derived artifacts and are never hand-edited.

A schema validates structure; a domain contract defines meaning and behavior. Both may be necessary.
