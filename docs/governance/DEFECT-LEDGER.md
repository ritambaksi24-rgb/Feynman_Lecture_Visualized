# Defect Ledger

This is the canonical list of known defects, contradictions, governance gaps, and accepted architectural debt.

Do not rely on chat messages, issue titles, or memory as the sole record of a defect.

## Severity

| Severity | Meaning | Gate impact |
| --- | --- | --- |
| Critical | Threatens scientific integrity, source truth, security, architecture boundary, or gate integrity. | Blocks progression immediately. |
| Major | Material correctness, maintainability, accessibility, performance, or workflow risk. | Must be fixed or explicitly bounded before stage completion. |
| Minor | Local issue with limited impact and a clear non-blocking path. | Track and fix within normal development. |
| Informational | Observation or future improvement. | No immediate gate impact. |

## Status

- **OPEN**
- **IN_PROGRESS**
- **BLOCKED**
- **RESOLVED**
- **WONT_FIX** — requires documented rationale and approval.

## Current ledger

| ID | Severity | Status | Area | Description | Owner/Next action |
| --- | --- | --- | --- | --- | --- |
| GOV-001 | Informational | RESOLVED | Context | AI work previously relied too heavily on conversational memory. | Step 1.5 establishes repository governance memory. |
| GOV-002 | Major | RESOLVED | Evidence | Previous stage scoring could be mistaken for implementation proof. | Verification policy separates intent, implementation, testing, and verification. |
| GOV-003 | Major | RESOLVED | Figma | Figma AI agent behavior was not governed with repository-specific rules. | Dedicated Figma AI agent contract added. |

## Rules for new entries

Every new defect should include:

- stable ID;
- severity;
- status;
- affected subsystem/document;
- reproducible description;
- impact;
- evidence/reference;
- owner or next action;
- resolution evidence when closed.

## Critical-defect invariant

The ledger must never describe a critical defect as resolved without evidence.

A stage cannot pass while any Critical item is OPEN, IN_PROGRESS, or BLOCKED.

## Duplicate-defect rule

Before adding a new defect, search the ledger for an existing issue describing the same failure mode. Prefer updating the existing entry over creating duplicates.
