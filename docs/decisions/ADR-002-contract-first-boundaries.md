# ADR-002 — Contract-First Boundaries

**Status:** Accepted after Step 1 quality gate  
**Date:** 2026-10-03

## Decision

Use contract-first design for stable subsystem boundaries.

“API-first” does not mean an interface around every local function.

## Contract mapping

~~~text
DTCG JSON
  → design tokens

JSON Schema
  → persisted/exchanged JSON

TypeScript contracts
  → internal module/subsystem APIs

OpenAPI
  → external HTTP APIs, only when they exist

Scientific contracts
  → model semantics, units, invariants, tolerances
~~~

## Rationale

Different boundaries require different contract mechanisms. A single API technology would create unnecessary coupling.

## Consequences

Contracts become maintained artifacts and are continuously validated. Alternate implementations can be added behind the same contract.

## Revisit triggers

Revisit when a new subsystem cannot fit the contract classes cleanly or generated/derived artifacts create unacceptable drift.
