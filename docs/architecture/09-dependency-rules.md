# 09 — Dependency Rules

## Principle

A dependency must justify itself by capability, maintenance, accessibility, performance, licensing, security, and architectural fit.

## Classes

- core runtime;
- UI foundation;
- design tooling;
- visualization;
- scientific computation;
- exploration/math;
- testing;
- authoring/rendering tools;
- build/development;
- external service clients.

## Boundary rules

Renderer packages belong behind visualization boundaries.

Math-engine packages belong behind mathematical/exploration boundaries.

Scientific model packages must not import React, UI libraries, or renderer implementations.

Manim and VisPy may be used by authoring/validation pipelines but are not browser-runtime requirements unless explicitly re-evaluated.

## Capability uniqueness

Two dependencies solving materially the same problem require explicit justification.

## Contract tooling

Schema validators, OpenAPI tooling, type-generation tooling, and token transformation tooling are allowed when they reduce contract drift. Generated output must be deterministic.

## Supply-chain review

Production dependencies require license and security review. Lockfiles are committed.

## Upgrade policy

Upgrades require release review, compatibility assessment, tests, visual/scientific validation where relevant, and architecture-impact assessment for boundary changes.

## No convenience coupling

A tiny feature does not justify a new package when existing project capabilities are sufficient.

## Browser versus authoring

Browser dependencies must be distinguished from offline scientific tooling.

## Dependency containment

A dependency that would otherwise spread through multiple layers should be wrapped by a narrow project-owned adapter when that materially preserves the boundary.

## Licensing

Dependency licenses must be compatible with planned distribution and tracked with attribution requirements.
