# Figma AI Agent Rules

**Applies to:** Figma AI, Figma-connected coding agents, design-to-code agents, visual implementation agents, and any agent that uses Figma files, frames, variables, components, screenshots, or generated designs as implementation input.

## 1. Role of Figma

Figma is a design-intent and collaboration surface.

It is NOT:

- the source of scientific truth;
- the canonical source of production scientific data;
- the authority for application architecture;
- the authority for repository token definitions;
- a substitute for code contracts;
- proof that an implementation is accessible, performant, or scientifically correct.

Repository DTCG tokens remain the canonical implementation token source.

## 2. Mandatory startup sequence

A Figma agent MUST read:

1. root `AGENTS.md`;
2. `docs/governance/PROJECT-CONSTITUTION.md`;
3. `docs/governance/CURRENT-STATE.md`;
4. `docs/governance/QUALITY-GATE.md`;
5. `docs/governance/CHANGE-PROTOCOL.md`;
6. `docs/architecture/07-design-system-architecture.md`;
7. `docs/architecture/08-figma-architecture.md`;
8. relevant token files and existing components;
9. relevant scientific/UI architecture before touching scientific UI.

For code generation, also inspect the actual repository implementation before producing new components.

## 3. Source-of-truth rules

The following precedence applies:

```text
Project constitution / approved architecture
        ↓
Repository contracts and DTCG tokens
        ↓
Existing implementation
        ↓
Figma variables and approved design intent
        ↓
Figma AI generated proposal
        ↓
Screenshot / visual guess
```

When Figma and repository implementation disagree, do not silently rewrite the repository to match Figma. Record the discrepancy and resolve the source-of-truth decision first.

## 4. Token rules

Figma agents MUST:

- use existing semantic roles and repository token names where available;
- preserve primitive → semantic → component layering;
- support Light and Dark theme mappings;
- avoid creating arbitrary raw hex colors in implementation;
- avoid duplicating a semantic role under a new name;
- avoid introducing a new token when an existing role expresses the same intent;
- preserve scientific visualization role semantics;
- flag unmapped Figma variables rather than silently creating unrelated code values.

A Figma color that looks correct in one screenshot is not enough. The semantic role must remain valid across themes and states.

## 5. Component rules

Before creating a new component, search the repository for:

- an existing component;
- an existing variant;
- a Base UI/shadcn-derived primitive already serving the interaction;
- a Feynman-specific composition serving the same pattern;
- existing icon definitions.

Do not create a new component solely because a Figma layer has a different name.

A component must have a clear responsibility and an identifiable implementation boundary.

Do not create "Frame1", "Card2", "CustomButton3", or equivalent meaningless abstractions.

## 6. Icon rules

Figma agents MUST reuse the project's approved icon definitions and mappings.

Do not import ad-hoc icons or create one-off SVGs merely because a screenshot contains a similar glyph.

If a genuinely new icon is required, its semantic identity and reuse scope must be explicit.

## 7. Scientific UI rules

Figma agents may represent scientific interactions but may not invent their scientific meaning.

For scientific controls, design must reflect real concepts such as:

- parameter vs derived value;
- unit and dimension;
- valid range;
- initial condition;
- simulation state;
- uncertainty;
- error state;
- reset/snapshot behavior;
- model/version identity when exposed to users.

A slider labeled with a physically meaningful quantity must not be treated as a decorative control. Its range, unit, step, and state must come from the underlying scientific contract.

## 8. Scientific visualization rules

Visual encodings must come from scientific visualization semantics.

Examples include:

- orbital phase;
- nodal structures;
- coordinate axes;
- reference planes;
- grids;
- field/vector direction;
- categorical scientific classes.

Do not choose colors by screenshot matching when a scientific semantic token exists.

Never use color as the sole encoding when the information is required for interpretation.

## 9. Layout and interaction rules

Figma agents must preserve:

- clear information hierarchy;
- keyboard-operable interactions in the code;
- visible focus states;
- responsive behavior;
- reduced-motion alternatives where applicable;
- touch/pointing target requirements;
- semantic labeling;
- error and empty states.

A static mockup is not an interaction specification.

When a design implies a behavior, the behavior must be traceable to an existing component contract or a documented new contract.

## 10. Design-to-code rules

Generated code must not:

- embed Figma frame coordinates as business logic;
- copy arbitrary absolute positioning when a layout system expresses the same relationship;
- hardcode colors, radii, typography, spacing, or shadows that should use tokens;
- create nested wrappers without semantic/layout responsibility;
- duplicate component behavior in page files;
- couple scientific calculations to React rendering;
- expose renderer objects through application-level contracts.

Prefer:

```text
Figma intent
   ↓
semantic design token / component contract
   ↓
project component
   ↓
application composition
```

not:

```text
Figma screenshot
   ↓
generated one-off page code
```

## 11. Visual acceptance

Visual review may verify:

- hierarchy;
- alignment;
- spacing;
- typography;
- theme;
- component states;
- responsive behavior;
- visual consistency.

Visual review does NOT prove:

- scientific correctness;
- accessibility compliance;
- performance;
- state correctness;
- renderer replacement;
- contract compatibility;
- provenance.

Those require their own evidence.

## 12. Figma-to-repository reconciliation

When updating a Figma variable/component:

1. Identify its repository semantic/token/component counterpart.
2. Determine whether the repository or Figma is canonical for that property.
3. Check Light/Dark mappings.
4. Search for other consumers.
5. Detect whether the change alters a stable component contract.
6. Record an ADR when required.
7. Apply the change.
8. Verify both design intent and implementation behavior.

## 13. No silent architecture changes

Figma AI MUST NOT:

- invent a new application layer;
- create a new state-management system;
- create a new token system;
- introduce a renderer-specific contract;
- choose a scientific model based solely on visual appearance;
- replace a registry because a generated component is easier;
- bypass approved component primitives.

Those are repository architecture decisions.

## 14. Handoff contract

A Figma AI change handed to code must communicate, at minimum:

- component/feature intent;
- affected tokens;
- states and variants;
- interaction behavior;
- responsive expectations;
- accessibility expectations;
- scientific semantics where relevant;
- relevant source/contract references;
- what was visually verified;
- what remains unverified.

## 15. Agent completion rule

Figma AI must not report a visual task as "complete" merely because a frame was generated or a screenshot looks correct.

The correct status must reflect evidence:

- generated design = PLANNED or PROPOSED;
- implemented code = IMPLEMENTED;
- test executed = TESTED;
- acceptance evidence reviewed = VERIFIED.

## 16. Adversarial Figma review

Before acceptance, attempt to find:

- token drift;
- duplicate components;
- missing dark-mode mapping;
- inaccessible focus/keyboard behavior;
- one-off hardcoded values;
- screenshot-driven fake behavior;
- scientific controls without valid ranges/units;
- visualizations whose colors encode nothing stable;
- design intent that cannot map to the component architecture;
- Figma layers with no clear implementation responsibility.

## 17. Final rule

> **Figma AI is an implementation assistant and design collaborator. It is not an architectural authority.**

Every Figma-generated change remains subject to the same repository quality gate, verification policy, decision policy, and defect ledger as every other change.
