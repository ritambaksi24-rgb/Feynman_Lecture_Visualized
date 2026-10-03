# Project Quality Gate

## 0. Gate authority

This document is the permanent authority for project gate method and hard acceptance conditions. The Project Constitution supplies the higher-level constitutional requirements. Stage-specific quality reviews apply this framework to one stage and may tailor evidence and weights but may not weaken or replace the hard gate. CURRENT-STATE.md records the live result and cannot override this document. A material change to this authority requires the decision process in DECISION-POLICY.md.

## 1. Purpose

This is the permanent quality-gate framework for the entire project.

It is not tied to Step 1, Step 1.5, Step 2, or any specific implementation technology.

Every material project stage uses this framework. A stage-specific review provides the concrete Definition of Done, acceptance criteria, evidence matrix, applicable weighting, deductions, and final result.

## 2. Applicability

The gate applies to:

- architecture stages;
- infrastructure and foundation stages;
- scientific-domain stages;
- computation stages;
- Scientific Exploration Engine stages;
- visualization and rendering stages;
- design-system stages;
- Figma and design-integration stages;
- content and editorial stages;
- integration milestones;
- security and remediation work;
- accessibility work;
- performance work;
- release and publication milestones;
- material cross-cutting refactors.

A small local change may use normal verification without opening a full stage gate. A material change that affects an accepted invariant reopens the applicable gate.

## 3. Hard acceptance rule

A stage may advance only when:

> Score >=95/100 AND zero unresolved Critical defects AND sufficient evidence for every mandatory criterion.

These conditions are conjunctive.

- 94.99 does not pass.
- 95.00 with a Critical defect does not pass.
- 100 with missing mandatory evidence does not pass.
- A previously passed gate can be reopened.

## 4. Gate architecture

Every stage gate has four layers.

### Layer A — Mandatory blockers

These apply to every stage:

- unresolved Critical defect;
- fabricated scientific output;
- broken or silently changed source/provenance boundary;
- unreviewed change to permanent governance rules;
- known security blocker ignored;
- broken contract relied upon by consumers;
- verification evidence falsely represented as collected;
- acceptance criteria weakened solely to obtain a pass;
- required protected-branch controls are absent or unverified for the branch that is supposed to receive an accepted stage result.

A mandatory blocker is a gate failure regardless of score.

### Layer B — Universal quality dimensions

Every stage review MUST evaluate these dimensions:

| Dimension | Default reference weight | Typical evidence |
| --- | ---: | --- |
| Requirements, scope, and source fidelity | 10 | approved scope, source mapping, acceptance criteria |
| Architecture and boundary integrity | 15 | dependency inspection, contracts, ADRs, boundary tests |
| Correctness | 20 | functional, mathematical, scientific, or domain validation |
| Modularity and maintainability | 10 | ownership, reuse, duplication and dead-code review |
| Design system, UX, and interaction quality | 10 | component/token review, states, responsive behavior |
| Accessibility | 10 | automated checks and manual review |
| Security, provenance, and rights | 10 | security review, provenance and licensing records |
| Testing and verification evidence | 10 | unit, contract, integration, scientific, and visual evidence |
| Performance and reliability | 5 | benchmarks, resource, error, and cancellation checks |
| Total reference model | 100 | |

The reference weights are a baseline, not permission to ignore stage semantics.

## 5. Stage-specific review

Every material stage should have a review based on STAGE-GATE-TEMPLATE.md.

Recommended naming:

docs/governance/STEP-N-QUALITY-REVIEW.md

or an equivalent milestone-specific name.

A stage review contains:

- stage identity;
- baseline and review commits;
- objective;
- scope;
- Definition of Done;
- acceptance criteria;
- evidence matrix;
- scoring weights;
- deductions;
- defects;
- adversarial review;
- final decision;
- verification boundary;
- next permitted scope.

The permanent Quality Gate must not accumulate stage-specific scoring tables.

## 6. Evidence

Depending on the stage, acceptable evidence can include:

- repository and file inspection;
- exact diff review;
- architecture and dependency analysis;
- schema or contract validation;
- type checking;
- unit tests;
- property-based tests;
- integration and end-to-end tests;
- scientific reference and invariant validation;
- accessibility testing and manual keyboard review;
- visual review;
- Figma and token reconciliation;
- benchmark and profile data;
- security, dependency, and licensing checks;
- release, build, and deployment checks.

No evidence may be claimed without actually collecting it.

## 7. Scoring discipline

A stage score must be reproducible from its recorded evidence.

The reviewer MUST:

1. score each dimension;
2. state the evidence;
3. state each deduction;
4. identify uncertainty;
5. identify open defects;
6. calculate the total without upward rounding.

Points are not awarded because a document says the desired property exists.

## 8. Adversarial review

Every material stage requires an explicit attempt to find failure modes.

Review, as applicable:

- contract bypass;
- duplicate implementation;
- silent fallback;
- fabricated or untraceable scientific data;
- theme or state regressions;
- Figma and repository token drift;
- keyboard and accessibility failures;
- resource-exhaustion paths;
- renderer leakage into scientific semantics;
- inability to substitute a backend or renderer;
- provenance and licensing gaps;
- AI-agent ambiguity or gate bypass.

## 9. Gate states

- NOT_STARTED
- IN_PROGRESS
- IMPLEMENTED_PENDING_VERIFICATION
- VERIFIED_PASS
- BLOCKED
- REOPENED

Only VERIFIED_PASS permits stage progression.

## 10. Reopening

Reopen the applicable gate when:

- an accepted invariant changes;
- a material contract changes;
- a Critical defect appears;
- verification evidence becomes invalid or stale;
- permanent governance rules change materially;
- implementation diverges from accepted architecture;
- a Figma and repository source-of-truth conflict affects an accepted design-system decision.

## 11. Relationship to Current State

CURRENT-STATE.md records the living result.

The stage-specific review records detailed evidence.

QUALITY-GATE.md defines the permanent method.

These three roles must remain separate.

## 12. Governance principle

> The Quality Gate defines how a project earns permission to move forward; it does not grant permission merely because documentation exists.
