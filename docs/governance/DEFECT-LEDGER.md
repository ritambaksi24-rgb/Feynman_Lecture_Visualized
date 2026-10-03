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
| GOV-004 | Major | RESOLVED | Evidence/state | Current-state and Step 2 quality-review checkpoint references were able to drift during successive implementation/documentation commits. | Validator now requires the current checkpoint and stage-review checkpoint to match and verifies referenced commits are in history. |
| GOV-005 | Major | RESOLVED | Governance automation | Governance validation mainly checked file presence and selected phrases and did not validate cross-document consistency, stage status semantics, or commit ancestry. | Validator strengthened with structural, cross-document, workflow, and Git-history checks. |
| GOV-006 | Major | BLOCKED | Repository enforcement | Protected integration branches had no verified branch protection or required status checks. | Repository policy and stable validation workflows added. A repository admin must apply the documented GitHub branch rules; this cannot be created by repository file edits alone. |
| GOV-007 | Major | RESOLVED | Technology decisions | Foundational technology decisions were distributed across prose and remained ambiguous for state, visualization, expression evaluation, testing, styling, and offline tooling. | ADR-006 establishes accepted foundation choices and explicit deferred/prohibited choices. |
| GOV-008 | Major | RESOLVED | Exploration scope | ADR-003 described a wide exploration platform surface without a sufficiently hard kernel boundary. | ADR-006 limits the core to a semantic/reactive exploration kernel and requires separately versioned capability extensions. |
| DS-001 | Major | OPEN | Design system / browser visual quality | The current Step 2 token palette, semantic layering, component-state styling, and browser composition do not yet meet the project's intended scientific product visual standard. | Rework primitive/semantic/visualization token architecture and prototype composition before final Step 2 gate. |

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
