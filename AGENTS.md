# AGENTS.md — Repository Operating Contract

## Purpose

This file is the entry point for any AI coding agent, Figma-connected agent, autonomous coding tool, or human contributor working in **Feynman Lectures Visualized**.

The repository is the durable project memory. Conversation history, previous assistant messages, generated plans, and unstored assumptions are not authoritative project state.

## Mandatory context recovery

Before changing anything, an agent MUST:

1. Read `AGENTS.md`.
2. Read `docs/governance/PROJECT-CONSTITUTION.md`.
3. Read `docs/governance/CURRENT-STATE.md`.
4. Read `docs/governance/QUALITY-GATE.md`.
5. Read `docs/governance/CHANGE-PROTOCOL.md`.
6. Read the relevant architecture document(s), contract(s), ADR(s), token definitions, and existing implementation before proposing a change.
7. Inspect the actual target branch, working tree, and relevant files. Never infer repository state from memory.
8. Identify the active stage and the exact acceptance gate before implementation.

For Figma or Figma-connected work, also read `docs/governance/FIGMA-AI-AGENTS.md`.

For scientific work, also inspect the relevant scientific-model, computation, exploration, provenance, and validation contracts before editing UI or renderer code.

## Authority order

When two sources disagree, use this authority order unless an ADR explicitly changes the applicable boundary:

1. External authoritative scientific, legal, standards, or source material.
2. `PROJECT-CONSTITUTION.md`.
3. Approved architecture documents.
4. Approved ADRs.
5. Approved contracts and schemas.
6. Actual repository implementation.
7. Verification evidence produced from the repository.
8. Conversation messages, generated plans, and prior AI statements.

A lower-level source MUST NOT silently override a higher-level source.

## Hard quality rule

The project uses a hard progression gate:

> **No stage, subsystem, or materially dependent implementation may proceed when the active gate is below 95/100 or when any unresolved critical defect exists.**

A score is not evidence by itself. The score must be supported by concrete verification artifacts, inspections, tests, or other applicable evidence.

A claimed completion without evidence is not completion.

## Change discipline

Agents MUST:

- make the smallest coherent change that satisfies the approved task;
- preserve stable public and subsystem contracts unless a contract change is explicitly approved;
- prefer reuse of existing modules, tokens, components, registries, and utilities over parallel implementations;
- avoid speculative abstractions and interface-for-everything design;
- keep scientific semantics independent of React, DOM APIs, Figma APIs, and renderers;
- keep content independent of page and component implementation;
- keep Light and Dark themes valid by construction;
- preserve provenance and reproducibility metadata;
- fail safely rather than silently falling back to misleading scientific output;
- remove dead code, duplicate logic, and obsolete paths discovered in the touched area when doing so is clearly part of the approved change;
- avoid unrelated refactors.

Agents MUST NOT:

- fabricate scientific values, equations, datasets, citations, or validation results;
- treat screenshots, Figma frames, or generated visual output as proof of scientific correctness;
- introduce hardcoded design values where an approved design token or semantic role exists;
- silently add a new primitive, component family, renderer dependency, scientific backend, or state mechanism without checking the relevant architecture and decision policy;
- put arbitrary JavaScript execution behind a mathematical-expression feature;
- couple domain models to renderer objects;
- copy or redistribute copyrighted Feynman source material outside the project's documented rights/provenance rules;
- claim a test, build, visual review, scientific validation, or compatibility check was run when it was not.

## Required verification language

Agents should use explicit status terms:

- **PLANNED** — described but not implemented.
- **IMPLEMENTED** — code/documentation exists.
- **TESTED** — an applicable automated or manual test was executed.
- **VERIFIED** — evidence was inspected and acceptance criteria passed.
- **RELEASED** — verified and intentionally published.

Do not use "done", "complete", "production-ready", or equivalent stronger language when the evidence only supports a weaker state.

## Stop conditions

Stop implementation and surface the issue in `DEFECT-LEDGER.md` when:

- a critical defect is discovered;
- a contract is ambiguous or internally inconsistent;
- the repository state differs materially from `CURRENT-STATE.md`;
- required source/provenance information is missing;
- a new dependency is required but has not passed the decision process;
- an architecture choice is being made without enough evidence;
- a Figma instruction conflicts with repository token or architecture rules;
- a scientific result cannot be validated;
- the requested task would lower an existing gate below 95/100.

The correct response to uncertainty is inspection or a recorded decision, not invention.

## Completion protocol

Before declaring a task complete:

1. Re-read the applicable rules.
2. Review the exact diff.
3. Run applicable validation.
4. Perform an adversarial review: actively try to break the change.
5. Re-check architecture and source-of-truth boundaries.
6. Update `CURRENT-STATE.md`, `DEFECT-LEDGER.md`, and decision records as applicable.
7. Record evidence and gate score.
8. Commit only after the gate passes.

## Figma-connected development

Figma is a design-intent tool in this repository, not the scientific or architectural source of truth.

Repository DTCG tokens are the canonical implementation token source. Figma variables mirror and reconcile with the repository token system. Figma AI must follow the same architecture and verification rules as code agents, plus the dedicated Figma rules in `docs/governance/FIGMA-AI-AGENTS.md`.

## Permanent memory principle

The project must be understandable from the repository without access to this conversation.

When a rule, decision, defect, invariant, or exception matters to future work, record it in the appropriate repository governance document rather than relying on chat history.
