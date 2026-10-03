# ADR-003 — Scientific Exploration Engine

**Status:** Accepted after Step 1 quality gate  
**Date:** 2026-10-03

## Decision

Create a project-owned Scientific Exploration Engine as a cohesive subsystem.

It provides a common semantic and reactive layer for:

- scientific calculator/expression evaluation;
- equations and functions;
- parameters and sliders;
- dependency tracking;
- 2D graphing;
- scientific plotting;
- tables;
- numerical experiments;
- simulation control and time;
- snapshots/reset;
- synchronized scientific visualization.

## Architectural rule

The exploration engine owns semantics, evaluation dependencies, and exploration state. Renderers own drawing.

## Why not a generic chart system?

A chart renders data. The exploration engine additionally understands definitions, dependencies, parameters, calculations, and scientific model state.

## Why not a GeoGebra clone?

Features are added because they improve explanation of Feynman concepts. General-purpose capabilities are not goals by themselves.

## Consequences

The subsystem requires explicit expression safety, dependency-graph validation, persistence/versioning, performance, accessibility, and contract testing.

## Revisit triggers

Revisit when the engine begins duplicating a generic mathematics product without educational value or when its boundary no longer isolates exploration semantics from rendering.
