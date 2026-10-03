# 08 — Figma Architecture

## 1. Role of Figma

Figma is the visual design and review environment for the Feynman Visualized Design System and product experiences.

It is not the source of truth for scientific calculations, chapter source material, or runtime application state.

## 2. Figma hierarchy

~~~text
Feynman Visualized
├── Foundations
│   ├── Color
│   ├── Typography
│   ├── Spacing
│   ├── Sizing
│   ├── Radius
│   ├── Border
│   ├── Shadow / Elevation
│   └── Motion
├── Components
├── Patterns
├── Scientific UI
├── Templates
└── Chapter explorations
~~~

## 3. Variables and modes

Figma variables represent token values and semantic relationships where practical.

The design system supports Light and Dark modes from the beginning.

Variables are organized so changing a theme does not require manually editing every component.

## 4. Components and variants

Components correspond to implementation contracts where that mapping provides useful fidelity.

Variant axes represent meaningful states or configuration, not every conceivable combination.

## 5. Scientific visualization design

Scientific visualizations may be composed in Figma for layout, annotation, typography, control placement, visual hierarchy, and explanatory diagrams.

Actual dynamic scientific rendering belongs to the application visualization system.

## 6. Code alignment

Where available, Figma-to-code tooling should map named components and design tokens to repository implementations rather than generating anonymous one-off code.

## 7. Review workflow

~~~text
Design intent
   ↓
Figma component / pattern
   ↓
Implementation
   ↓
Visual comparison
   ↓
Accessibility review
   ↓
Scientific review where applicable
~~~

## 8. Naming alignment

Names should remain consistent across Figma variables, Figma components, tokens, code components, and documentation. Where exact alignment is not practical, the mapping is documented.

## 9. Two-theme review

New components require Light and Dark review before completion. Scientific visualizations require theme review of both controls and scene content.

## 10. Avoiding Figma debt

Do not create Figma components solely for temporary exploration. Promote an artifact to the design system only when it expresses a stable reusable pattern.
