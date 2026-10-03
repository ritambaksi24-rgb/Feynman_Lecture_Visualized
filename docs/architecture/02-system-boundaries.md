# 02 — System Boundaries

## Boundary map

~~~text
                     CONTRACTS
                        │
                        ▼
Content → Scientific Domain → Computation → Exploration → Visualization
  │             │                │             │              │
  └─────────────┴────────────────┴─────────────┴──────────────┘
                              ↓
                         Application
                              ↓
                         Presentation
~~~

Design System spans application, interaction, and visual presentation. Infrastructure supports domains through narrow adapters.

## Content domain

Owns volumes, chapters, sections, ideas, educational objectives, source references, original explanatory content, and semantic references.

Must not own renderer code, UI event logic, or scientific algorithms.

## Scientific domain

Owns concepts, mathematical/physical models, variables, parameters, units, assumptions, constraints, and model identity/version.

Must not depend on React or rendering libraries.

## Computation domain

Owns numerical algorithms, analytical evaluation, simulation stepping, randomness policy, validation, worker execution, and derived scientific data.

Must not own UI or visual styling.

## Scientific Exploration domain

Owns interactive scientific/mathematical exploration semantics: expressions, dependency graphs, parameter bindings, calculation state, graphs, plots, tables, experiment configuration, simulation controls, derived quantities, snapshots, and reset.

It connects scientific models to interactive exploration without becoming a renderer.

## Visualization domain

Owns visual encodings, visualization specifications, scene/plot composition, animation timelines, and renderer adapters.

Must not define scientific truth.

## Interaction domain

Owns user input, selection, parameter editing, playback, manipulation, accessibility interaction, and interaction state.

It changes model inputs through explicit contracts.

## Application domain

Owns routing, navigation, layout composition, chapter loading, preferences, theme selection, and session-level orchestration.

It assembles capabilities; it does not contain their core logic.

## Design System boundary

Owns tokens, UI primitives, components, interaction patterns, states, and design-system accessibility.

Scientific visualization and exploration components may compose these primitives.

## Figma boundary

Figma is a design/review environment. Repository token files are canonical for runtime implementation. Figma variables mirror/reconcile rather than silently override runtime definitions.

## Infrastructure boundary

Build, testing, persistence, asset delivery, workers, observability, and adapters are infrastructure concerns.

## Contract boundary

Contracts are not a business domain; they are explicit interfaces at stable boundaries.

## Dependency direction

Prefer Presentation → Application → Domain capabilities → Shared primitives, with infrastructure behind adapters. Lower-level scientific modules must not import higher-level presentation modules.
