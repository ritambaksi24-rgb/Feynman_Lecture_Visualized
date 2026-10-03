# 11 — Naming Conventions

## Stable identity

Stable identifiers use lowercase kebab-case:

~~~text
volume-1
chapter-01
section-1-2
idea-molecular-motion
model-brownian-motion
exploration-diffusion
visualization-particle-diffusion
renderer-three
~~~

## API and contract names

Contract names express capability and semantics:

~~~text
ScientificModel
Computation
Exploration
Visualization
Renderer
ContentRepository
~~~

HTTP resources use noun-oriented paths when a server exists.

## Files

Documentation, content, configuration, and schema files use kebab-case.

Language ecosystem conventions apply to executable source; React components may use PascalCase.

## Tokens

Semantic tokens express meaning:

~~~text
color.text.primary
surface.canvas
visualization.axis.x
visualization.phase.positive
exploration.control.value
~~~

Avoid implementation names such as blue-500 in semantic layers.

## Scientific identifiers

Variables follow discipline conventions while avoiding ambiguous abbreviations. Units are encoded by types/schema or explicit metadata.

## Functions

Functions describe actions or calculations:

~~~text
evaluateExpression()
calculateDiffusionCoefficient()
advanceSimulation()
deriveVelocity()
mapScientificState()
~~~

## Events

Events describe domain occurrences:

~~~text
parameter.changed
simulation.started
simulation.completed
simulation.failed
theme.changed
~~~

## Version fields

Use explicit schemaVersion, modelVersion, apiVersion, and visualizationVersion fields. Versions are independent and must not be conflated.

## Renderer leakage

Content IDs must not contain renderer technology names.

## Renaming

Renaming a stable content/model/contract ID is a migration, not a cosmetic change.
