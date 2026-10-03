# 02 — System Boundaries

## 1. Boundary map

The system is divided into six primary domains:

~~~text
Content
   ↓
Scientific Domain
   ↓
Computation
   ↓
Visualization
   ↓
Interaction
   ↓
Application Presentation
~~~

The Design System cuts across presentation and interaction surfaces, while Infrastructure provides shared technical capabilities.

## 2. Content domain

Owns volumes, chapters, sections, ideas, original explanatory copy, source references, equations as content objects, visualization references, and educational objectives.

Does not own React components, Three.js scenes, DOM event handling, or physics calculations.

## 3. Scientific domain

Owns concepts, physical and mathematical models, variables, parameters, units, assumptions, transformations, and validation constraints.

Does not own visual styles, component layout, framework state, or renderer-specific scene graphs.

## 4. Computation domain

Owns deterministic numerical procedures, analytical evaluation, simulation stepping, numerical data generation, validation, error bounds, and worker-friendly computation contracts.

Does not own chapter copy, visual styling, or renderer-specific scene graphs.

## 5. Visualization domain

Owns visual encodings, renderer-independent visualization specifications, scene composition, scientific-state-to-visual mapping, animation timelines, and view configuration.

Does not own source text, core physical assumptions, or design-token definitions.

## 6. Interaction domain

Owns user input state, exploration controls, parameter manipulation, selection, playback control, and accessibility interaction semantics.

Interaction state may alter a model's parameters but must not redefine the model.

## 7. Application domain

Owns routing, navigation, page composition, session-level preferences, layout orchestration, and theme selection.

It assembles capabilities; it should not become the home for domain logic.

## 8. Design-system boundary

The design system owns tokens, primitives, accessible UI components, component states, interaction patterns, and layout primitives.

Scientific visualization components may consume design-system components but remain separate from ordinary UI primitives.

## 9. Figma boundary

Figma owns design intent and system representation: variables, components, variants, layouts, interaction specifications, and visual review artifacts.

Figma is not the runtime source of scientific truth.

## 10. Infrastructure boundary

Infrastructure includes build tooling, testing, asset loading, worker orchestration, persistence adapters, and later justified observability/analytics.

Infrastructure exposes narrow interfaces and remains replaceable.

## 11. Boundary rule

A dependency crossing a boundary must be intentional and one-directional wherever practical.

A lower layer must not import a higher-layer presentation implementation merely for convenience.
