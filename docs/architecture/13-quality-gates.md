# 13 — Quality Gates

## 1. Hard gate

No later stage starts until the active stage scores **at least 95/100** and has **zero unresolved critical defects**.

## 2. Scoring model

| Area | Weight |
| --- | ---: |
| Architectural coherence | 15 |
| Content/source architecture | 15 |
| Scientific-model separation | 15 |
| Visualization architecture | 15 |
| Design-system boundaries | 10 |
| Figma/design integration | 10 |
| Modularity/extensibility | 10 |
| Dependency boundaries | 5 |
| Naming/organization | 5 |
| **Total** | **100** |

## 3. Interpretation

- **95–100:** Pass.
- **90–94.99:** Stop; improve and re-audit.
- **<90:** Stop; substantial rework is required.

A numerical score above 95 does not override a critical defect.

## 4. Critical defects

Examples include:

- source/copyright boundary undefined for public content;
- scientific model coupled directly to a renderer;
- production visualization using fabricated scientific data without disclosure;
- Light/Dark architecture absent;
- content inseparable from page implementation;
- foundational dependency creating uncontrolled coupling;
- known licensing/security blocker ignored.

## 5. Evidence

Scores are supported by repository inspection, architecture diagrams, tests, type checks, dependency analysis, design review, visual review, and scientific validation as applicable.

## 6. Gate procedure

~~~text
Build
  ↓
Inspect
  ↓
Test
  ↓
Score
  ↓
Identify defects
  ↓
Fix
  ↓
Re-score
  ↓
≥95 + no critical defects
  ↓
Proceed
~~~

## 7. Regression rule

A later change that materially alters a previous architectural decision reopens the relevant gate.

## 8. Review independence

At least one review pass actively searches for failure modes rather than only confirming intended behavior.

## 9. Quality categories

Implementation gates may include functionality, architecture, scientific correctness, accessibility, performance, visual consistency, licensing/provenance, and maintainability.

## 10. Definition of done

Done means validated against the applicable gate, not merely merged or visually complete.
