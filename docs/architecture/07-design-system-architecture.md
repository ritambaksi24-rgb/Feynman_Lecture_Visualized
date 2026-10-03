# 07 — Design-System Architecture

## Foundation

The proposed UI foundation is **shadcn/ui using Base UI primitives**, subject to implementation-stage verification. The project owns its visual identity and application-level component source.

## Layers

~~~text
DTCG Token Source
      ↓
Semantic Theme Tokens
      ↓
Base UI / Foundation Primitives
      ↓
Feynman UI Components
      ↓
Patterns
      ↓
Scientific UI Compositions
      ↓
Chapter Experiences
~~~

## Token authority

Repository token files are the canonical implementation source. Figma variables mirror/reconcile against them. Generated CSS variables or TypeScript constants are derived artifacts.

## Token layers

Primitive → Semantic → Component → Scientific Visualization Roles.

Scientific roles express domain meaning rather than raw color names.

## Themes

Light and Dark are first-class. Components do not require separate implementations for themes. Scientific visualization roles have theme-aware mappings.

## Components

Components define semantics, states, accessibility behavior, composition API, and token relationships.

Scientific components reuse ordinary UI primitives rather than duplicating their behavior.

## Accessibility

Keyboard navigation, focus management, semantic labeling, reduced motion, contrast, and error states are part of component contracts.

## Mathematical UI

Mathematical expressions use an appropriate math renderer when needed instead of forcing equation content through ordinary UI typography.

## Icons

Icons come from the declared project icon source rather than ad hoc duplicated SVGs.

## Modularity

Do not create a component for every markup fragment. Promote stable semantic, behavioral, accessibility, or repeated patterns. Split components when unrelated responsibilities or state ownership accumulate.

## Visual quality

The design system should support a restrained, precise, premium scientific interface rather than a generic dashboard aesthetic.
