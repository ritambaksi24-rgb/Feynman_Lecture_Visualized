# 07 — Design-System Architecture

## 1. Foundation

The initial open-source UI foundation is proposed as **shadcn/ui with Base UI primitives**, subject to implementation-stage verification and an ADR review. The project owns its application-level component source rather than treating the shadcn visual identity as the product identity.

## 2. Layers

~~~text
Design Tokens
   ↓
Foundation / Accessibility Primitives
   ↓
Feynman UI Components
   ↓
Patterns
   ↓
Scientific UI Compositions
   ↓
Chapter Experiences
~~~

## 3. Token architecture

Tokens are organized into:

~~~text
Primitive
  ↓
Semantic
  ↓
Component
  ↓
Scientific Visualization Roles
~~~

Primitive tokens define values. Semantic tokens define meaning. Component tokens define component-specific relationships. Scientific visualization roles encode domain meaning.

## 4. Canonical token source

The repository's machine-readable token source is the canonical token source for runtime implementation.

Figma variables are a design-system representation synchronized from or explicitly reconciled with the repository token source. Figma is not permitted to become an untracked second source of truth.

Any intentional Figma-first change must be reconciled back into the token source before implementation relies on it.

## 5. DTCG direction

The token source should follow the Design Tokens Community Group format and schema version adopted by the project.

Token sources must distinguish machine-readable source data from generated implementation output.

## 6. Color

Color tokens support both Light and Dark themes. Scientific visualization color roles remain semantically stable even if underlying values differ by theme.

Raw color literals in UI components are prohibited unless the value is an intentional non-themeable technical requirement and documented.

## 7. Typography

Typography is tokenized by semantic role, including interface text, headings, labels, metrics, mathematical text, and monospace/code.

Mathematical typography should use the mathematical renderer where appropriate rather than forcing all equations through ordinary UI typography.

## 8. Components

Components define explicit states and accessibility behavior.

Examples include Button, Dialog, Popover, Tooltip, Tabs, Select, Slider, Navigation, Panel, Data Display, and Form Controls.

## 9. Scientific UI

Scientific UI components may compose ordinary design-system components with visualization capabilities. A scientific parameter control should reuse the base Slider behavior rather than recreate it.

## 10. Accessibility

The design system provides consistent keyboard interaction, focus states, reduced-motion handling, contrast-aware themes, semantic labels, and disabled/loading/error states.

## 11. Ownership

The project controls token names, semantic meanings, component APIs, variants, and composition patterns.

The open-source foundation supplies implementation primitives; it does not dictate the project's scientific visual language.

## 12. Avoiding fragmentation

A component is not created merely because a markup fragment repeats once. Create one when it expresses a stable semantic pattern, behavior, accessibility contract, or meaningful visual rule.

## 13. Theme API

Theme selection belongs to application/user preference state. Components consume tokens and should not contain theme-specific branching unless behavior genuinely differs.
