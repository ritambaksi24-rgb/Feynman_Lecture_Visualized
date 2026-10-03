# Change Protocol

This is the required lifecycle for meaningful repository changes, including AI-generated changes.

## Phase 0 — Recover context

Read:

- `AGENTS.md`;
- `PROJECT-CONSTITUTION.md`;
- `CURRENT-STATE.md`;
- `QUALITY-GATE.md`;
- `DEFECT-LEDGER.md`;
- relevant architecture documents;
- relevant ADRs/contracts;
- Figma rules when applicable.

Then inspect the actual repository.

## Phase 1 — Define the change

Write down:

- requested outcome;
- affected boundary;
- affected files/modules;
- contracts touched;
- scientific implications;
- design-system implications;
- provenance implications;
- security/accessibility implications;
- verification required;
- gate that will determine acceptance.

Avoid implementation before the boundary and acceptance criteria are understood.

## Phase 2 — Inspect before editing

Before creating a new implementation:

1. Search for existing functionality.
2. Identify existing tokens/components/icons/utilities.
3. Identify existing model/computation/exploration/visualization abstractions.
4. Check naming and ownership.
5. Search for duplicates and dead paths in the touched area.
6. Check relevant ADRs and contracts.

## Phase 3 — Plan the smallest coherent change

The plan must prefer:

- reuse over duplication;
- extension over parallel architecture;
- one canonical source over mirrored logic;
- stable contracts over vendor leakage;
- deterministic behavior where possible;
- explicit failure states.

Do not enlarge scope because an agent notices unrelated imperfections.

## Phase 4 — Implement

Implementation must:

- preserve architectural direction;
- preserve source-of-truth boundaries;
- avoid unapproved dependencies;
- preserve both Light and Dark behavior;
- preserve accessibility;
- preserve provenance;
- remain testable.

## Phase 5 — Verify

Run all applicable checks.

At minimum, for a material change:

- exact diff review;
- static/type validation where available;
- unit/contract/schema checks where available;
- scientific validation where applicable;
- accessibility checks where applicable;
- visual review where applicable;
- performance check where applicable;
- governance validator.

## Phase 6 — Adversarial review

Try to break the change.

Ask:

- Can another module bypass the contract?
- Is there a duplicate implementation?
- Can an agent misread the rule?
- Does the Figma version drift from the repository?
- Does an invalid scientific input produce a misleading output?
- Does a theme change expose hardcoded color assumptions?
- Is any new abstraction only fragmentation?
- Is there dead or unreachable code?
- Did a fallback hide an error?
- Does a later implementation depend on a concrete vendor type?

## Phase 7 — Score

Score the active stage against `QUALITY-GATE.md`.

Record:

- score by dimension;
- evidence;
- deductions;
- open defects;
- remaining uncertainty.

The score must not be rounded upward to cross 95.

## Phase 8 — Gate decision

- **≥95 + zero critical defects:** may proceed.
- **<95:** stop and improve.
- **Any critical defect:** stop and fix/resolve.
- **Insufficient evidence:** status remains pending verification.

## Phase 9 — Persist state

Update the repository memory:

- `CURRENT-STATE.md`;
- `DEFECT-LEDGER.md`;
- ADRs when applicable;
- quality review/evidence record when applicable.

## Phase 10 — Commit

Commit only after the applicable gate passes or when explicitly recording a blocked/in-progress checkpoint.

The commit message should describe the architectural or functional intent, not merely "AI changes".

## Phase 11 — Context reset safety

A fresh agent starting tomorrow must be able to continue safely by reading the repository alone.

That means the current state must answer:

- What stage are we in?
- What was verified?
- What is not verified?
- What defects are open?
- What is the exact next permitted task?
- What must not be changed?
