# Project Governance

This directory is the durable control plane for human contributors and AI agents working on **Feynman Lectures Visualized**.

Governance exists to prevent architectural drift, context loss, unsupported completion claims, duplicated implementation, and AI-generated slop.

## Documents

| Document | Role |
| --- | --- |
| [Project Constitution](./PROJECT-CONSTITUTION.md) | Non-negotiable project laws and source-of-truth rules. |
| [Current State](./CURRENT-STATE.md) | Durable project position and next safe step. |
| [Quality Gate](./QUALITY-GATE.md) | Stage acceptance, evidence requirements, and 95/100 progression rule. |
| [Defect Ledger](./DEFECT-LEDGER.md) | Canonical record of unresolved defects and architectural debt. |
| [Decision Policy](./DECISION-POLICY.md) | When a decision needs an ADR and how decisions are approved. |
| [Verification Policy](./VERIFICATION-POLICY.md) | Evidence standards and claim discipline. |
| [Change Protocol](./CHANGE-PROTOCOL.md) | Exact operating sequence for agents and contributors. |
| [Figma AI Agents](./FIGMA-AI-AGENTS.md) | Rules for Figma AI, Figma-connected agents, design-to-code agents, and visual implementation agents. |

## Governance state

**Step 1.5 — AI-Resilient Project Governance**

The purpose of Step 1.5 is to make the project's rules persistent, inspectable, and enforceable so work does not depend on a long conversation remaining in model context.

## Core invariant

> Documentation describes intent. Repository implementation plus verification evidence establishes truth.

A document must never be used as proof that its own specification is implemented.

## Agent startup sequence

```text
AGENTS.md
   ↓
PROJECT-CONSTITUTION.md
   ↓
CURRENT-STATE.md
   ↓
QUALITY-GATE.md
   ↓
CHANGE-PROTOCOL.md
   ↓
Relevant architecture / contract / ADR
   ↓
Actual repository inspection
   ↓
Change
   ↓
Verification
   ↓
Gate score
   ↓
CURRENT-STATE update
```

## Governance is versioned

Governance changes are normal repository changes. They require the same inspect → change → verify → gate process as application architecture changes.

A governance rule is not "just documentation" when it controls agent behavior. Changes to a non-negotiable rule require an ADR and explicit review.
