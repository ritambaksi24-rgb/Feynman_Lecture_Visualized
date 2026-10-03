# Project Constitution

Project: Feynman Lectures Visualized
Status: APPROVED FOUNDATION RULESET
Revision: 2026-10-04

## Article 1 — Purpose

Feynman Lectures Visualized is a long-lived scientific visualization platform organized around the chapter-by-chapter conceptual flow of The Feynman Lectures on Physics.

The project must remain:

- scientifically grounded;
- educationally coherent;
- modular;
- maintainable;
- accessible;
- copyright-aware;
- reproducible where applicable;
- resistant to architectural drift and AI-generated slop.

These requirements apply across all project stages.

## Article 2 — Source and provenance

1. The Feynman Lectures provide authoritative conceptual source material for the project's educational sequence and subject framing.
2. Source authority does not imply redistribution rights.
3. Original project explanations, models, equations, diagrams, simulations, and visualizations must be distinguished from source material.
4. Source references, scientific references, datasets, generated assets, and third-party dependencies require traceable provenance where applicable.
5. Copyright-sensitive source material follows docs/architecture/COPYRIGHT-AND-PROVENANCE.md.
6. Agents must never invent citations, quotations, attributions, licenses, or provenance.
7. Material source disagreements must be recorded rather than silently resolved from memory.

## Article 3 — Scientific integrity

1. Production scientific output must arise from a defined model, validated calculation, licensed or verified data source, or documented numerical method.
2. Fabricated values presented as scientific results are prohibited.
3. Meaningful scientific models must define variables, parameters, units, assumptions, validity domains, initial conditions, calculation or evolution rules, expected behavior, and validation invariants.
4. Numerical approximations, tolerances, random seeds, precision assumptions, and stochastic conditions must be recorded when materially relevant.
5. Visual fidelity never overrides physical or mathematical correctness.
6. Uncertainty at a scientific boundary stops implementation unless it is explicitly resolved or recorded as an approved limitation.

## Article 4 — Architecture

The canonical direction is:

~~~text
Content
  ↓
Scientific Domain
  ↓
Computation
  ↓
Exploration
  ↓
Visualization
  ↓
Application
  ↓
Presentation
~~~

Rules:

1. Content is not UI.
2. Scientific models are not computation backends.
3. Scientific models do not import React, DOM APIs, Figma APIs, Three.js, VisPy, Manim, or renderer-specific classes.
4. Computation produces scientific state, results, and diagnostics rather than renderer objects.
5. Exploration consumes scientific semantics and exposes coherent interactive state.
6. Visualization consumes renderer-independent contracts.
7. Renderer adapters translate visualization contracts into renderer-specific objects.
8. Stable subsystem boundaries are contract-first.
9. Contracts are not required around every local helper.
10. A second implementation should be able to satisfy a stable subsystem contract without importing the first implementation.

## Article 5 — Modularity

1. Modularity is meaningful responsibility, ownership, testing, and replaceability—not maximum file count.
2. Fragmentation is prohibited.
3. Duplication of semantic responsibility is prohibited.
4. Existing approved modules must be searched and reused before parallel implementations are created.
5. New abstractions require a concrete responsibility, stable boundary, testing benefit, reuse case, or replacement benefit.
6. Dead or unreachable code must not knowingly remain in the touched subsystem.
7. Refactoring must not be used as a pretext to enlarge unrelated scope.

## Article 6 — Design system

1. Repository DTCG tokens are the canonical implementation token source.
2. Semantic tokens express product meaning.
3. Component tokens exist only where component-level semantics are genuinely required.
4. Scientific visualization semantics use explicit visualization roles.
5. Light and Dark themes are foundational.
6. UI must not hardcode values that belong to the token system.
7. Existing accessible primitives and project components must be reused before creating new primitives.
8. Design changes must consider states, interaction, density, theme behavior, accessibility, and visual consistency.

## Article 7 — Figma

1. Figma is a design-intent and collaboration surface.
2. Figma is not scientific truth, application architecture authority, or canonical production data.
3. Figma variables must remain reconcilable with repository DTCG tokens.
4. Figma AI-generated code and design are implementation input, not verification evidence.
5. Figma-specific behavior follows docs/governance/FIGMA-AI-AGENTS.md.
6. Figma cannot silently change architectural boundaries, token source of truth, state ownership, scientific meaning, or renderer contracts.

## Article 8 — Security

1. User-authored mathematical expressions are parsed into constrained representations.
2. Arbitrary JavaScript execution from scientific expressions is prohibited.
3. Inputs, persisted experiments, external data, and remote responses are untrusted.
4. Computational resources must be bounded.
5. Secrets must never be committed or shipped to the client.
6. Dependency and license risk must be evaluated before foundational adoption.

## Article 9 — Accessibility

Accessibility is an architecture requirement, not a final visual pass.

Interactive experiences must account for keyboard operation, focus, semantic labeling, contrast, reduced motion, error communication, non-visual interpretation where practical, and alternatives for information conveyed only through color or motion.

## Article 10 — AI agent behavior

AI agents are contributors, not project authorities.

Agents MUST:

- recover project context from repository governance;
- inspect before modifying;
- use approved architecture and contracts;
- search for existing implementations before creating new ones;
- distinguish fact, inference, and uncertainty;
- preserve source and provenance boundaries;
- run applicable verification;
- perform adversarial review;
- record defects and decisions;
- update current state where required.

Agents MUST NOT:

- optimize apparent progress over correctness;
- bypass a gate;
- weaken tests or acceptance criteria to obtain a pass;
- change governance rules solely to make an implementation pass;
- claim evidence that was not collected;
- treat screenshots or generated output as universal proof;
- invent scientific, legal, licensing, source, or repository facts;
- treat branch-protection policy documents as proof that GitHub enforcement is active.

## Article 11 — Quality

1. Every stage, milestone, subsystem, and material change is governed by the project Quality Gate.
2. The hard progression threshold is 95/100.
3. Any unresolved Critical defect blocks progression regardless of score.
4. Stage-specific reviews provide the concrete acceptance evidence and any stage-specific scoring detail.
5. Numerical scores must be evidence-backed.
6. A later change may reopen a previously passed gate.
7. Important quality dimensions must remain visible; an average must not hide a failed critical dimension.
8. The permanent QUALITY-GATE.md defines the gate method and hard acceptance authority. Stage-specific reviews apply it and may not weaken it. CURRENT-STATE.md records the result but cannot override it.

## Article 12 — Truth and evidence

Use these states:

- PLANNED — intended but not implemented.
- IMPLEMENTED — repository content exists.
- TESTED — an applicable check was executed.
- VERIFIED — evidence was reviewed against an explicit acceptance criterion.
- RELEASED — verified and intentionally published.

Documentation does not upgrade a state.

## Article 13 — Governance stability

Permanent governance rules may change only through DECISION-POLICY.md.

Material changes require an ADR and appropriate verification.

## Article 14 — Permanent project memory

A rule that exists only in conversation is temporary.

A rule that must survive context loss MUST be stored in the repository.

The permanent memory set is:

~~~text
AGENTS.md
docs/governance/PROJECT-CONSTITUTION.md
docs/governance/CURRENT-STATE.md
docs/governance/QUALITY-GATE.md
docs/governance/STAGE-GATE-TEMPLATE.md
docs/governance/DEFECT-LEDGER.md
docs/governance/DECISION-POLICY.md
docs/governance/VERIFICATION-POLICY.md
docs/governance/CHANGE-PROTOCOL.md
docs/governance/FIGMA-AI-AGENTS.md
docs/architecture/
docs/decisions/
~~~

## Article 15 — Repository enforcement

Protected integration branches MUST reject merges unless the documented required status checks are successful and the branch rules require pull requests.

The project-level minimum configuration is recorded in docs/governance/BRANCH-PROTECTION.md.

Repository files and CI can define and test the intended checks, but only GitHub repository rules actually enforce them. The enforcement state must be explicitly verified before a stage may be accepted.

## Article 16 — Stage progression

A stage may advance only when:

- its Definition of Done is satisfied;
- its stage-specific gate is passed at 95/100 or higher;
- zero unresolved Critical defects remain;
- required evidence is recorded;
- CURRENT-STATE.md is updated;
- there is no unreviewed material contradiction with architecture or contracts;
- required protected-branch repository controls are active for the integration branch receiving the stage result.

## Final constitutional rule

> No architectural, scientific, design-system, Figma, or implementation statement is considered project truth merely because an agent or document says it is true. Repository state and applicable verification evidence must support it.
