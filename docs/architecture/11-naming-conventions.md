# 11 — Naming Conventions

## 1. General rule

Names express domain meaning and remain stable enough to be referenced by content, documentation, design, and code.

## 2. IDs

Content and scientific model IDs use stable kebab-case identifiers:

~~~text
volume-1
chapter-01
section-1-2
idea-molecular-motion
model-brownian-motion
visualization-particle-diffusion
~~~

IDs do not encode UI layout.

## 3. Files

Use kebab-case for content, configuration, and documentation files.

Executable source follows the language ecosystem's conventions; React component files may use PascalCase when appropriate.

## 4. Components

Component names describe semantic responsibilities:

~~~text
ScientificParameterControl
EquationBlock
VisualizationPanel
ChapterNavigation
~~~

Avoid generic names such as Thing, Box, or SectionComponent.

## 5. Tokens

Token names describe meaning, not implementation.

Good semantic names include:

~~~text
color.text.primary
surface.canvas
visualization.axis.x
visualization.phase.positive
~~~

Avoid implementation-specific names such as blue-500 or panel-gray in semantic layers.

## 6. Scientific variables

Scientific names follow conventional discipline notation where useful, while implementation identifiers remain readable and unambiguous.

Use explicit units in types or naming where required.

## 7. Functions

Function names express actions or calculations:

~~~text
calculateDiffusionCoefficient()
integrateTrajectory()
deriveVelocity()
mapParticleStateToVisuals()
~~~

## 8. Booleans

Boolean names read as predicates: isPlaying, isLoading, hasError, canReset.

## 9. Renderer identifiers

Renderer names identify capabilities:

~~~text
three-js
math-canvas
svg
manim
~~~

They must not leak into content identifiers.

## 10. Naming change rule

Renaming a stable content ID or scientific model ID is a migration, not a cosmetic refactor, because references may exist outside source code.
