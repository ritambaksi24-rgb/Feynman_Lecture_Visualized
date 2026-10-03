# Project Constitution

**Project:** Feynman Lectures Visualized  
**Governance stage:** Step 1.5 — AI-Resilient Project Governance  
**Status:** APPROVED FOUNDATION RULESET  
**Revision:** 2026-10-03

## Article 1 — Purpose

The project is a long-lived scientific visualization platform organized around the chapter-by-chapter conceptual flow of *The Feynman Lectures on Physics*.

The objective is not merely to produce attractive pages. The system must remain scientifically grounded, educationally coherent, modular, maintainable, accessible, copyright-aware, and resistant to architectural degradation as AI agents and human contributors modify it over time.

## Article 2 — Source and provenance

1. The Feynman Lectures provide authoritative conceptual source material for the project's educational sequence and subject framing.
2. Source authority does not imply redistribution rights.
3. Original project explanations, models, equations, diagrams, simulations, and visualizations must be distinguished from source material.
4. Source references, scientific references, datasets, generated assets, and third-party dependencies must retain traceable provenance where applicable.
5. Copyright-sensitive source material must follow `docs/architecture/COPYRIGHT-AND-PROVENANCE.md`.
6. An agent must never invent a source citation, quotation, attribution, license, or provenance record.

## Article 3 — Scientific integrity

1. Production scientific output must arise from a defined model, validated calculation, licensed/verified data source, or documented numerical method.
2. Fabricated values presented as scientific results are prohibited.
3. Every meaningful scientific model must define applicable variables, parameters, units, assumptions, validity domain, initial conditions, evolution or calculation rule, expected behavior, and validation invariants.
4. Numerical approximations, tolerances, random seeds, and stochastic assumptions must be recorded when materially relevant.
5. Visual fidelity does not override physical or mathematical correctness.
6. When scientific correctness is uncertain, implementation stops at the boundary of uncertainty until the uncertainty is resolved or explicitly recorded.

## Article 4 — Architectural separation

The canonical architectural direction is:

```text
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
```

Rules:

1. Content is not UI.
2. Scientific models are not computation backends.
3. Scientific models do not import React, DOM APIs, Figma APIs, Three.js, VisPy, Manim, or renderer-specific classes.
4. Computation produces scientific state, results, and diagnostics rather than renderer objects.
5. Exploration consumes scientific semantics and exposes coherent interactive state.
6. Visualization consumes renderer-independent visualization contracts.
7. Renderer adapters translate visualization contracts into renderer-specific objects.
8. Stable subsystem boundaries are contract-first.
9. A contract does not need to be created around every local function.
10. A second implementation should be able to satisfy a stable subsystem contract without importing the first implementation.

## Article 5 — Modularity

1. Modularity is about meaningful responsibility and replaceability, not maximum file count.
2. Fragmentation is prohibited: do not split code solely to create more files.
3. Duplication is prohibited: do not create parallel token, component, icon, model, registry, or utility systems for the same semantic responsibility.
4. Existing approved modules must be reused before introducing alternatives.
5. Every new abstraction must have a concrete responsibility, boundary, testability benefit, reuse case, or replacement benefit.
6. Dead code and unreachable implementation paths must not be knowingly left in the touched subsystem.
7. A feature is not modular merely because it has been broken into many files.

## Article 6 — Design system

1. Repository DTCG tokens are the canonical implementation token source.
2. Semantic tokens provide product meaning; component tokens provide component-level roles only when needed.
3. Scientific visualization semantics are represented through visualization-role tokens, not arbitrary component colors.
4. Light and Dark themes are foundational.
5. UI must not hardcode values that should come from the design-token system.
6. Existing accessible primitives and project components must be reused before creating new UI primitives.
7. A design-system change must consider states, density, interaction, accessibility, theme behavior, and visual consistency.

## Article 7 — Figma

1. Figma represents design intent and collaboration; it is not scientific truth.
2. Figma variables must remain reconcilable with repository DTCG tokens.
3. Figma AI-generated code is implementation input, not proof of correctness.
4. Figma agents must follow `docs/governance/FIGMA-AI-AGENTS.md`.
5. Figma changes that create or imply new architectural contracts require repository-side approval.
6. Visual similarity alone is insufficient acceptance evidence.

## Article 8 — Security

1. User-authored mathematical expressions must be parsed into a constrained representation.
2. Arbitrary JavaScript execution from scientific expressions is prohibited.
3. Inputs, persisted experiments, external data, and remote responses are treated as untrusted.
4. Computational resource usage must be bounded.
5. Secrets must never be committed or shipped to the client.
6. Dependency and license risk must be reviewed before adopting foundational dependencies.

## Article 9 — Accessibility

Accessibility is an architecture requirement, not a final cosmetic pass.

Interactive scientific experiences must account for keyboard operation, focus, semantic labeling, contrast, error communication, reduced motion, non-visual interpretation where practical, and accessible alternatives for information conveyed only through visual encoding.

## Article 10 — AI agent behavior

AI agents are contributors, not project authorities.

An agent MUST:

- inspect before modifying;
- follow the current state;
- use approved architecture and contracts;
- distinguish fact from assumption;
- state uncertainty;
- produce evidence for strong claims;
- prefer the smallest coherent change;
- run applicable validation;
- perform adversarial review;
- stop rather than invent when a requirement is ambiguous.

An agent MUST NOT:

- optimize for apparent progress over correctness;
- bypass a quality gate;
- change governance rules merely to make a failing implementation pass;
- hide defects by weakening tests or acceptance criteria;
- claim success from intent, screenshots, or generated output alone;
- introduce architecture from memory when repository evidence is available;
- assume an earlier AI agent's statement is true without inspection.

## Article 11 — Quality

1. Every active stage has a gate.
2. The hard progression threshold is **95/100**.
3. **Any unresolved critical defect blocks progression regardless of numeric score.**
4. A numerical score must be evidence-backed.
5. A later change can reopen a previously passed gate.
6. Important quality dimensions must be visible independently; an average must not hide a failed critical dimension.
7. A passing score is not permission to ignore known major defects. Major defects are accepted only when recorded, bounded, and compatible with the stage gate.

## Article 12 — Truth and evidence

Use the following distinction:

- **Intent:** what the architecture says should happen.
- **Implementation:** what the repository currently contains.
- **Tested:** an applicable check was executed.
- **Verified:** evidence was inspected against an explicit acceptance criterion and no blocking contradiction was found.
- **Released:** verified and intentionally published.

The project never treats documentation alone as proof of implementation.

## Article 13 — Governance stability

Non-negotiable rules may be changed only through the decision process in `DECISION-POLICY.md`.

When a governance change materially affects architecture, contracts, security, provenance, scientific integrity, or AI agent behavior, an ADR is required.

## Article 14 — Permanent project memory

A rule that exists only in conversation is a temporary instruction.

A rule that must survive context loss MUST be recorded in the repository.

The canonical memory set is:

```text
AGENTS.md
PROJECT-CONSTITUTION.md
CURRENT-STATE.md
QUALITY-GATE.md
DEFECT-LEDGER.md
DECISION-POLICY.md
VERIFICATION-POLICY.md
CHANGE-PROTOCOL.md
FIGMA-AI-AGENTS.md
Architecture + Contracts + ADRs
```

## Article 15 — Stage progression

The next implementation stage may begin only when the current stage:

- meets its stage-specific Definition of Done;
- scores at least 95/100;
- has zero unresolved critical defects;
- has its verification evidence recorded;
- has its repository state updated;
- has no unreviewed material contradiction with architecture or contracts.

## Final constitutional rule

> **No architectural, scientific, design-system, or implementation statement is considered true merely because it is written in documentation. It becomes project truth only when the repository state and applicable verification evidence support it.**
