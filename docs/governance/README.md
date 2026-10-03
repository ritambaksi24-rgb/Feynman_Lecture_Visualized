# Project Governance

This directory contains the permanent governance and operating control plane for Feynman Lectures Visualized.

These files are not a Step 1.5 implementation artifact. They govern the project across its full lifecycle: architecture, implementation, scientific development, design-system work, Figma collaboration, testing, releases, maintenance, and future extensions.

## Governance documents

| Document | Scope | Role |
| --- | --- | --- |
| [Project Constitution](./PROJECT-CONSTITUTION.md) | Permanent | Non-negotiable project laws, authority hierarchy, and invariants. |
| [Current State](./CURRENT-STATE.md) | Permanent | Living checkpoint describing where the project is, what is verified, what is open, and what may happen next. |
| [Quality Gate](./QUALITY-GATE.md) | Permanent | Universal gate framework used for every stage, milestone, subsystem, and material change. |
| [Stage Gate Template](./STAGE-GATE-TEMPLATE.md) | Permanent | Template for a stage-specific quality review using the universal gate. |
| [Defect Ledger](./DEFECT-LEDGER.md) | Permanent | Canonical defect, contradiction, and architectural-debt record. |
| [Decision Policy](./DECISION-POLICY.md) | Permanent | Rules for implementation decisions, subsystem decisions, and constitutional decisions. |
| [Verification Policy](./VERIFICATION-POLICY.md) | Permanent | Evidence standards and rules for what agents may claim. |
| [Change Protocol](./CHANGE-PROTOCOL.md) | Permanent | Required lifecycle for material changes. |
| [Figma AI Agents](./FIGMA-AI-AGENTS.md) | Permanent | Repository-specific rules for Figma AI and Figma-connected agents. |
| [Branch Protection](./BRANCH-PROTECTION.md) | Permanent | Required GitHub protected-branch and status-check configuration. |
| [Step 1.5 Quality Review](./STEP-1-5-QUALITY-REVIEW.md) | Historical | Stage-specific acceptance record for Step 1.5. |

## Permanent versus stage-specific governance

The distinction is deliberate.

### Permanent governance

The following remain applicable after Step 1.5:

- Project Constitution;
- Current State;
- Quality Gate;
- Stage Gate Template;
- Defect Ledger;
- Decision Policy;
- Verification Policy;
- Change Protocol;
- Figma AI rules;
- Branch Protection policy;
- repository-level governance automation.

These documents must remain stage-neutral.

### Stage-specific records

A stage-specific review records the concrete work and evidence for one stage. Examples include the Step 1.5 review, a future Step 2 review, and later subsystem, migration, remediation, or release reviews.

A stage-specific review may contain that stage's Definition of Done, scoring weights, evidence matrix, deductions, and final result. It must not redefine permanent governance rules.

## Core invariant

> Documentation describes intent. Repository implementation plus verification evidence establishes truth.

A governance document is not proof that the implementation obeys it.

## Agent startup sequence

Every material contributor or AI agent starts here:

~~~text
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
Branch-protection policy
   ↓
Relevant architecture / contract / ADR / stage review
   ↓
Actual repository inspection
   ↓
Change
   ↓
Verification
   ↓
Stage gate
   ↓
CURRENT-STATE update
~~~

Figma-connected work additionally requires FIGMA-AI-AGENTS.md.

## Governance state model

The governance system itself is persistent.

CURRENT-STATE.md is the living operational record. Stage-specific review files are historical acceptance records.

A future agent must be able to understand the current project without recovering this conversation.

## Governance changes

Governance is versioned repository content.

Changing a non-negotiable rule, the gate model, source-of-truth precedence, Figma authority, security policy, scientific-integrity policy, or permanent-memory mechanism requires the decision process in DECISION-POLICY.md.

Governance changes may reopen previously passed gates when their invariants are affected.
