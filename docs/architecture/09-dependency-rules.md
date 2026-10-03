# 09 — Dependency Rules

## 1. Principle

Dependencies are selected for capability, maturity, licensing, accessibility, performance, maintenance, and architectural fit—not convenience alone.

## 2. Dependency classes

Dependencies are classified as core runtime, UI foundation, visualization, scientific computation, content/documentation, testing, or development/tooling.

Each dependency belongs to a clear class and boundary.

## 3. Preferred direction

~~~text
Application
  ↓
Domain / Visualization / Design System
  ↓
Shared primitives
~~~

Scientific models must not import application UI.

## 4. No convenience coupling

A package is not introduced merely because it solves a small task that an existing capability can handle without material complexity.

## 5. Renderer containment

Three.js and other renderer-specific dependencies are contained within visualization adapters/compositions.

Content and scientific model packages must not import renderer packages.

## 6. Math engine containment

A symbolic algebra or math-canvas dependency should sit behind a mathematical capability interface where practical.

Scientific models express mathematical semantics independently of a specific engine.

## 7. Heavy tooling

Manim and other heavyweight authoring/rendering tools remain outside the browser runtime unless a documented requirement proves otherwise.

## 8. Version discipline

Dependency upgrades require release-note review, compatibility checks, test execution, and architecture-impact review where relevant.

## 9. Licensing

Every production dependency must have a license compatible with intended project distribution. Licenses and attributions are tracked.

## 10. Security

Dependencies are kept within a reasonable maintenance policy. Material critical security issues block release until resolved or formally mitigated.

## 11. Duplicate capability rule

Two dependencies providing substantially overlapping capabilities require explicit justification.

## 12. Lockfile

A lockfile is committed and treated as part of the reproducible build.

## 13. Dependency budget

The project prefers fewer well-bounded dependencies over a large collection of micro-libraries.

A dependency that crosses multiple architectural boundaries carries a higher review burden.
