# ADR-004 — Step 1.5 AI-Resilient Project Governance

- **Status:** Accepted
- **Date:** 2026-10-03
- **Decision scope:** Project governance
- **Supersedes:** None
- **Related:** ADR-001, ADR-002, ADR-003

## Context

The project will be developed over a long period by humans and multiple AI agents, including agents connected to Figma.

Conversation context is not a durable control mechanism. AI agents can lose earlier rules, infer repository state incorrectly, repeat obsolete assumptions, overstate completion, or introduce fragmentation while appearing productive.

The project therefore needs a repository-resident control plane that survives context resets and can be inspected by any future contributor.

## Problem

Architecture documents alone describe the intended system but do not sufficiently control day-to-day agent behavior.

The governance layer must:

- preserve non-negotiable rules;
- maintain current project state;
- prevent progression below 95/100;
- make critical defects visible;
- distinguish intent from evidence;
- govern decisions;
- govern Figma AI behavior;
- establish a repeatable change protocol;
- provide machine-checkable governance invariants.

## Decision

Adopt Step 1.5 as a dedicated governance foundation before Step 2 implementation.

The canonical governance surface is:

- `AGENTS.md`;
- `PROJECT-CONSTITUTION.md`;
- `CURRENT-STATE.md`;
- `QUALITY-GATE.md`;
- `DEFECT-LEDGER.md`;
- `DECISION-POLICY.md`;
- `VERIFICATION-POLICY.md`;
- `CHANGE-PROTOCOL.md`;
- `FIGMA-AI-AGENTS.md`;
- ADRs for material governance decisions;
- an executable repository validator and GitHub Actions workflow.

## Operating model

```text
Recover
  ↓
Inspect
  ↓
Define
  ↓
Plan
  ↓
Implement
  ↓
Test
  ↓
Adversarial review
  ↓
Architecture / contract review
  ↓
Score
  ↓
Persist state
  ↓
Commit
```

## Truth model

Documentation is intent unless supported by implementation and verification evidence.

The repository is the durable project memory.

A prior AI statement is never sufficient evidence.

## Figma decision

Figma is recognized as a design-intent system.

Repository DTCG tokens remain canonical for implementation tokens. Figma variables are reconciled against the repository source. Figma AI agents are governed explicitly and may not silently alter architecture.

## Automation decision

Governance invariants that can be mechanically checked are checked by repository tooling.

The validator is intentionally small and dependency-light because application infrastructure is not yet the focus of Step 1.5.

## Consequences

Positive:

- future agents have a deterministic startup procedure;
- project state survives context loss;
- completion claims become evidence-based;
- Figma agents receive explicit rules;
- critical defects cannot be hidden by prose;
- governance begins to become executable rather than purely descriptive.

Trade-offs:

- more repository documentation;
- additional review work for material decisions;
- governance can itself drift and must be maintained;
- automated checks validate specific invariants, not all architecture.

## Revisit criteria

Revisit this ADR when:

- the application runtime foundation is established;
- agent tooling changes materially;
- Figma integration becomes automated end-to-end;
- governance validation needs stronger machine-readable contracts;
- the 95/100 gate is changed (which itself requires a constitutional ADR).
