# Step 1.5 Quality Gate

## Purpose

This gate determines whether the project governance foundation is strong enough to allow Step 2 implementation.

The inherited project rule remains:

> **Minimum 95/100 and zero unresolved critical defects.**

## Step 1.5 scoring model

| Dimension | Weight |
| --- | ---: |
| Durable project memory and context recovery | 15 |
| Constitutional rules and source-of-truth hierarchy | 15 |
| Evidence-based verification and claim discipline | 15 |
| 95/100 gate, defect control, and progression discipline | 15 |
| AI coding-agent operating rules | 10 |
| Figma AI / design-agent operating rules | 10 |
| Decision, ADR, and change control | 5 |
| Executable governance enforcement | 10 |
| Documentation coherence and discoverability | 5 |
| **Total** | **100** |

## Mandatory pass conditions

All of these are required:

1. Score is at least 95/100.
2. There are zero unresolved critical defects.
3. Governance documents are mutually consistent.
4. The agent startup sequence is explicit.
5. The source-of-truth hierarchy is explicit.
6. Strong claims require verification evidence.
7. Figma AI agents have explicit repository rules.
8. The change protocol prevents skipping inspection, testing, adversarial review, or the gate.
9. At least one repository-level automated governance check exists.
10. The current state records the gate result and exact evidence.

## Evidence requirements

A governance score must be based on actual repository inspection.

Acceptable evidence includes:

- file existence checks;
- automated governance validator output;
- internal link/reference inspection;
- exact-diff review;
- contradiction search;
- branch/commit inspection;
- manual adversarial review;
- applicable CI/workflow validation.

For this stage, a full application build cannot be required because the Step 1.5 branch is a governance foundation and the application runtime has not yet been restored/implemented on this branch.

## Adversarial review

The reviewer must actively try to find:

- rules that contradict the architecture;
- rules that are too vague for an AI agent to follow;
- missing Figma-specific behavior;
- places where an agent can claim "complete" without evidence;
- places where a failed gate can be bypassed;
- missing current-state recovery instructions;
- duplicate sources of truth;
- governance documents that depend on undocumented conversation context;
- automation that validates prose but does not reflect the intended gate.

## Critical defects

Any of these block progression:

- contradictory source-of-truth rules;
- missing 95/100 gate;
- no durable current-state record;
- no defect ledger;
- no evidence discipline;
- Figma AI explicitly or implicitly allowed to bypass repository rules;
- validator/workflow knowingly passing when a mandatory governance file is missing;
- a rule claiming enforcement that the repository does not actually perform.

## Gate procedure

```text
Recover state
    ↓
Inspect repository
    ↓
Inspect exact change
    ↓
Run governance validator
    ↓
Adversarial review
    ↓
Check contradictions
    ↓
Score independently
    ↓
Record evidence
    ↓
≥95 + zero critical defects
    ↓
Update CURRENT-STATE
    ↓
Commit
```

## Score discipline

Never award points because a document says the desired property exists.

A point is awarded only when the documented rule is present, coherent, and supported by the required level of repository evidence.

A score must identify deductions rather than defaulting to 100.

## Gate status vocabulary

- **NOT_STARTED**
- **IN_PROGRESS**
- **IMPLEMENTED_PENDING_VERIFICATION**
- **VERIFIED_PASS**
- **BLOCKED**
- **REOPENED**

## Reopening

A governance gate automatically reopens when:

- a non-negotiable rule changes;
- a new AI agent pathway bypasses the operating protocol;
- a Figma/code source-of-truth conflict is introduced;
- validator coverage is weakened;
- a critical governance defect is discovered;
- a later architecture change invalidates a governance invariant.

## Relationship to Step 1 architecture gate

Step 1 architecture acceptance and Step 1.5 governance acceptance are separate gates. Passing one does not imply passing the other.
