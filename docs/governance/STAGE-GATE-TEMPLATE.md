# Stage Quality Review Template

Purpose: Permanent template for creating a stage-specific quality review under the project Quality Gate.

Stage:
Status: NOT_STARTED
Baseline commit:
Review commit:

## 1. Objective

State exactly what the stage is intended to establish.

## 2. Scope

State:

- what is included;
- what is explicitly excluded;
- affected architecture boundaries;
- affected contracts;
- affected scientific, design, security, accessibility, and provenance areas.

## 3. Definition of Done

Provide concrete acceptance criteria.

Each criterion must be observable and verifiable.

## 4. Evidence plan

| Criterion | Evidence required | Evidence collected | Status |
| --- | --- | --- | --- |
|  |  |  |  |

## 5. Scoring

Use the permanent categories from QUALITY-GATE.md.

Adjust weights when necessary, explain every adjustment, and keep the total at 100.

| Dimension | Weight | Result | Evidence | Deduction |
| --- | ---: | ---: | --- | ---: |
| Requirements, scope, and source fidelity |  |  |  |  |
| Architecture and boundary integrity |  |  |  |  |
| Correctness |  |  |  |  |
| Modularity and maintainability |  |  |  |  |
| Design system, UX, and interaction quality |  |  |  |  |
| Accessibility |  |  |  |  |
| Security, provenance, and rights |  |  |  |  |
| Testing and verification evidence |  |  |  |  |
| Performance and reliability |  |  |  |  |
| Total | 100 |  |  |  |

## 6. Mandatory blockers

Confirm each:

- [ ] No unresolved Critical defect.
- [ ] No fabricated scientific output.
- [ ] No unapproved permanent-governance change.
- [ ] No known security blocker ignored.
- [ ] No material contract contradiction.
- [ ] No unsupported completion or evidence claim.

## 7. Adversarial review

Record attempts to break:

- architectural boundaries;
- contracts;
- invalid-input handling;
- scientific correctness;
- accessibility;
- theme and state behavior;
- Figma and token reconciliation;
- renderer and backend replacement;
- performance and resource limits;
- provenance and licensing;
- AI-agent interpretation.

## 8. Defects

Reference DEFECT-LEDGER.md.

Record new defects before assigning the final score.

## 9. Final decision

Score:
Critical defects:
Gate status:
Verification boundary:

The stage passes only when:

- score is at least 95/100;
- zero unresolved Critical defects remain;
- all mandatory evidence is present;
- the verification boundary is explicit.

## 10. Current-state update

After the gate decision, update CURRENT-STATE.md with:

- stage status;
- verified commit;
- score;
- evidence references;
- open defects;
- next permitted scope.

## 11. Important rule

This template is a permanent governance instrument. A filled stage review is a historical record for one stage and must not silently rewrite the permanent Quality Gate.
