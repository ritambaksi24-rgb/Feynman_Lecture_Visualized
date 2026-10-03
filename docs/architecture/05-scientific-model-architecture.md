# 05 — Scientific Model Architecture

## Purpose

A Scientific Model represents physical or mathematical semantics independently of user interface and rendering.

## Model contract

As applicable:

~~~text
id
version
description
variables
parameters
units
assumptions
initial conditions
state
evolution rule
derived quantities
validity domain
validation invariants
randomness policy
precision/tolerance
~~~

## Separation

~~~text
Model Semantics
      ↓
Computation Contract
      ↓
Scientific State
      ↓
Exploration / Visualization
~~~

A model must not create React elements, DOM nodes, Three.js objects, canvas nodes, or Figma artifacts.

## Mathematical semantics

Expressions represent domain meaning rather than renderer-specific formulas.

## Units

Dimensional quantities carry explicit units or belong to a documented normalized system. Conversion is explicit.

## Numerical integrity

Production numerical models document algorithm, resolution/step size, stability/convergence considerations, valid domain, numerical tolerance, and expected failure modes.

## Validation

Where feasible, compare numerical implementations with analytical solutions or known limiting behavior. Tests may include dimensional consistency, symmetry, conservation laws, limiting cases, monotonicity, asymptotics, convergence, and statistical behavior.

## Determinism

Deterministic simulations are reproducible. Stochastic simulations expose seed/random-source policy when deterministic replay is appropriate.

## Versioning

Scientific model version is independent of content, API, and renderer versions. Output-semantic changes require a model version/migration.

## Reuse

One model may power multiple explorations, graphs, tables, scenes, and demonstrations.
