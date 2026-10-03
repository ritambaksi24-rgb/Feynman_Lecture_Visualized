# 22 — State and Reactivity Architecture

## State classes

- Content state: immutable chapter definitions.
- Exploration state: parameters, selections, experiment configuration, user controls.
- Scientific state: physical/mathematical model state and derived quantities.
- Visualization state: renderer-neutral visual data and view configuration.
- Render state: renderer-specific objects, buffers, and GPU resources.

Each mutable state class has one authoritative owner.

## Reactive graph

~~~text
Inputs
  ↓
Expressions / model inputs
  ↓
Derived scientific quantities
  ↓
Plots / tables / visualization state
  ↓
Render state
~~~

A changed input invalidates affected descendants rather than unrelated application state.

Multi-parameter edits that belong together use transactions/batches.

Scheduling may be synchronous, batched, worker-based, or precomputed according to workload.

Superseded computations are cancelled or prevented from committing through generation/version checks.

Snapshots capture experiment configuration and relevant content/model/exploration versions.

Undo/reset belong to exploration state.

React manages presentation and application interaction; it does not become the scientific dependency graph.

Global state is limited to genuinely cross-cutting concerns.
