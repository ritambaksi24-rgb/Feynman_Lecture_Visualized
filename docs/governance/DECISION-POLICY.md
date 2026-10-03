# Decision and ADR Policy

## Purpose

This policy prevents architecture from changing implicitly through implementation, generated code, Figma output, or repeated informal conversation.

## Decision classes

### Class A — Local implementation choice

A decision is local when it:

- affects one implementation detail;
- does not change a stable contract;
- does not add a major dependency;
- does not change an architectural boundary;
- does not alter source/provenance policy.

Class A decisions may be made in code without an ADR, but the implementation must still follow the architecture and verification policies.

### Class B — Subsystem decision

An ADR is required when a change:

- introduces or changes a stable subsystem boundary;
- changes a contract or schema;
- introduces a renderer/backend abstraction;
- changes scientific model/computation ownership;
- changes exploration state ownership;
- introduces a registry/capability mechanism;
- changes token source-of-truth or Figma reconciliation;
- introduces a new persistent data shape;
- changes security or accessibility architecture.

### Class C — Constitutional decision

An ADR plus explicit review is required when a change affects:

- the 95/100 hard gate;
- source-of-truth hierarchy;
- scientific integrity requirements;
- copyright/provenance rules;
- Figma agent governance;
- arbitrary-code-execution policy;
- permanent project-memory rules;
- authority or override precedence.

## ADR minimum content

An ADR must record:

1. Context.
2. Problem.
3. Decision.
4. Alternatives considered.
5. Consequences.
6. Contracts or files affected.
7. Migration or compatibility impact.
8. Verification plan.
9. Approval/status.
10. Supersession relationship when applicable.

## No silent architectural decisions

A contributor MUST NOT make a Class B or C decision by:

- changing implementation and documenting it only afterward;
- changing a Figma component and assuming the codebase should follow it;
- adding a dependency because it is convenient;
- introducing a generic abstraction to avoid making a real domain decision.

## Decision lifecycle

```text
Problem
  ↓
Evidence collection
  ↓
Options
  ↓
Impact analysis
  ↓
Decision
  ↓
ADR
  ↓
Implementation
  ↓
Verification
```

## Reversal

Reversing a decision does not mean editing history away.

Create a superseding ADR that explains:

- why the prior decision no longer holds;
- what evidence changed;
- migration impact;
- compatibility plan;
- verification evidence.

## Agent rule

AI agents may draft decisions and ADRs, but they may not treat their own draft as approved architectural authority.
