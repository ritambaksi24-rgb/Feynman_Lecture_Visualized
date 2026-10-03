# 13 — Quality Gates

## Hard gate

No later stage starts until the active stage reaches **≥95/100** and has **zero unresolved critical defects**.

## Step 1 rubric

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

The rubric remains fixed for Step 1, while the evidence beneath each category may expand as architecture requirements expand.

## Gate levels

- **95–100:** pass.
- **90–94.99:** stop and remediate.
- **<90:** substantial rework.
- Any critical defect: fail regardless of score.

## Critical defects

Examples:

- source material is redistributed without a rights basis;
- scientific model depends on a renderer or React;
- fabricated scientific data is presented as real;
- Light/Dark support requires architectural rework;
- exploration engine has multiple conflicting sources of truth;
- stable contracts are undocumented;
- schema/API versions are ambiguous or silently incompatible;
- consumers depend on implementation internals;
- unsafe arbitrary expression execution is possible;
- dependency licensing/security blockers are ignored;
- accessibility-critical interaction works only through pointer/hover;
- runtime failure displays plausible scientific output;
- Figma and code have uncontrolled competing token sources.

## Evidence

Evidence may include repository inspection, schema validation, type checking, contract tests, scientific tests, property-based tests, visual regression, accessibility tests, dependency/license audit, performance profiling, Figma review, and publication review.

## Gate procedure

~~~text
Implement / revise
      ↓
Inspect
      ↓
Validate
      ↓
Adversarial review
      ↓
Score
      ↓
Fix
      ↓
Re-score
      ↓
≥95 + no critical defects
      ↓
Proceed
~~~

## Regression

Changes to approved contracts, boundaries, scientific models, token authority, dependency strategy, or execution architecture reopen the relevant gate.

## Score integrity

Scores describe a stated revision only. A later revision requires a new audit.
