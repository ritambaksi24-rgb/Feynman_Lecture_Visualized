# 05 — Scientific Model Architecture

## 1. Purpose

Scientific models are the authoritative computational representation of the physical or mathematical assumptions used by a visualization.

## 2. Model contract

A model should expose, as appropriate:

~~~text
identity
description
variables
parameters
units
assumptions
initial conditions
state
evolution rule
derived quantities
validation constraints
~~~

The concrete TypeScript interface will be defined during implementation, but the responsibility boundary is fixed here.

## 3. Separation of concerns

~~~text
Scientific Model
      ↓
Computation
      ↓
Scientific State
      ↓
Visualization Mapping
      ↓
Renderer
~~~

A model does not create meshes, DOM nodes, canvas elements, or UI controls.

## 4. Determinism

Where deterministic behavior is expected, identical inputs and configuration must yield reproducible results within a documented numerical tolerance.

Randomized models must expose their random-source policy and support deterministic seeds for testing where scientifically meaningful.

## 5. Units

Physical quantities must carry explicit units or belong to a documented normalized/dimensionless system. The application must never silently mix incompatible units.

## 6. Numerical integrity

Every numerical model used in production documents numerical method, step size or resolution, convergence/stability considerations, expected error where meaningful, and valid parameter range.

## 7. Analytical vs numerical paths

When an analytical solution exists and is suitable, it should be available as a validation reference for numerical implementations.

## 8. Scientific validation

Tests should verify limiting cases, symmetries, conservation laws where applicable, dimensional consistency, expected qualitative behavior, and numerical convergence where applicable.

## 9. Model versioning

Changing a scientific model in a way that changes output semantics requires a documented model-version change or ADR.

## 10. Renderer independence

The same scientific model should be capable of feeding multiple visualizations. A particle system, chart, and explanatory diagram may consume the same derived scientific state.

## 11. No hidden constants

Scientific constants and parameters must be named and centralized. Renderer code must not contain unexplained numerical constants that control scientific behavior.

## 12. Scientific review

A production scientific visualization requires a model review appropriate to its complexity. Validation evidence should be stored with the scientific documentation.
