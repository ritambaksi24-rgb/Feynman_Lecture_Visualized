# 10 — Data-Flow Rules

## Canonical flow

~~~text
Source Reference
      ↓
Content Data
      ↓
Exploration Definition
      ↓
Scientific Configuration
      ↓
Scientific Computation
      ↓
Scientific State
      ↓
Visualization State
      ↓
Presentation
~~~

## Canonical versus derived state

Canonical state includes content definitions, model parameters, experiment configuration, and user-controlled exploration state.

Derived state includes computed quantities, sampled trajectories, plot data, mesh buffers, camera transforms, and layout results.

Every derived node has an explicit dependency on its source.

## Reactive dependency graph

~~~text
parameters
    ↓
expressions / model inputs
    ↓
computed quantities
    ↓
plots / tables / visualizations
~~~

Changing a parameter invalidates only affected graph nodes.

## Ownership

Each mutable piece of state has one authoritative owner.

## Content immutability

Canonical content is read-only during runtime.

## Scientific state versus rendering state

Scientific state remains independent from mesh/material/canvas/rendering objects.

## Interaction

UI events modify exploration/application state through explicit actions. They do not call scientific algorithms ad hoc.

## Async computation

Long-running computation returns explicit status:

~~~text
idle → running → complete
             ↘ cancelled
             ↘ failed
~~~

## Persistence

Persist identifiers, parameters, preferences, and versioned configurations—not renderer object graphs.

## URL state

URLs may encode stable content IDs and safe exploration parameters. Large scientific arrays and secrets do not belong in URLs.

## Serialization

Persisted/exchanged scientific and exploration data uses versioned schemas.

## Error propagation

Errors preserve domain context and become accessible application states.

## Reproducibility

A saved exploration records model/content versions, parameter values, and random seeds where relevant.
