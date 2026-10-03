# 10 — Data-Flow Rules

## 1. Canonical flow

~~~text
Source Reference
   ↓
Content Data
   ↓
Scientific Configuration
   ↓
Scientific Computation
   ↓
Derived State
   ↓
Visualization State
   ↓
Presentation
~~~

## 2. One-way ownership

Each piece of state has one clear owner. Consumers receive values through explicit contracts rather than mutating upstream state directly.

## 3. Content immutability

Published content definitions behave as immutable input during runtime.

User interaction may select or parameterize content; it must not mutate the canonical chapter definition.

## 4. Scientific state

Scientific state is represented independently from rendering state where feasible.

For example, particle positions are scientific state; mesh transforms and material instances are rendering state.

## 5. Interaction

Interaction events update domain or presentation state through explicit actions. Scientific mutations must not be hidden inside generic UI handlers.

## 6. Derived data

Derived values are computed from canonical state rather than copied into multiple unrelated stores. Caching is allowed when invalidation rules are explicit.

## 7. URL and persistence

URL state and persisted preferences contain identifiers and parameters, not renderer object graphs.

## 8. Async computation

Long-running computations expose input, progress where meaningful, cancellation, success, and failure.

## 9. Error propagation

Errors preserve context:

~~~text
scientific error
  → computation result
  → visualization error state
  → accessible UI message
~~~

Do not swallow numerical or loading failures.

## 10. Serialization

Persisted scientific configurations use explicit versioned schemas.

## 11. Reproducibility

A visualization generated from a scientific model must be reproducible from documented inputs and version information.

## 12. Performance

Avoid unnecessary conversions between representations. Prefer stable typed contracts over repeated serialization of large scientific arrays for trivial UI changes.

## 13. Data provenance

External datasets retain source, license, units, transformation steps, and relevant version/date metadata.
