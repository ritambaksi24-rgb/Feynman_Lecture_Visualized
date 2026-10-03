# Step 1 — Quality Review

**Status:** Pre-implementation architecture audit

## Rubric

| Area | Weight | Evidence |
| --- | ---: | --- |
| Architectural coherence | 15 | Principles and boundaries agree; ownership is consistent |
| Content/source architecture | 15 | Content hierarchy, provenance, copyright boundary, renderer independence |
| Scientific-model separation | 15 | Explicit model/computation/rendering separation |
| Visualization architecture | 15 | Renderer-independent specification, adapter strategy, real-data rule |
| Design-system boundaries | 10 | Token/component/scientific UI layering and Light/Dark |
| Figma/design integration | 10 | Variables, modes, components, mapping and review workflow |
| Modularity/extensibility | 10 | Module criteria, anti-fragmentation rules, future tests |
| Dependency boundaries | 5 | Dependency classes, containment, licensing, security |
| Naming/organization | 5 | Stable IDs, file/component/token naming, repository structure |
| **Total** | **100** | |

## Audit method

Score each area from 0 to its weight based on evidence present in the Step 1 documents. Do not award points for intent that is not encoded as a rule, boundary, contract, or test.

## Critical-defect check

The following must all be false before Step 1 can pass:

- copyrighted source material is treated as unrestricted project content;
- scientific logic is coupled directly to React or a renderer;
- visualization can silently use fabricated scientific data;
- Light/Dark support requires architecture changes later;
- chapter content is embedded directly in page components;
- dependency boundaries permit uncontrolled circular coupling;
- future extensibility relies on copying chapter implementations.

## Pass rule

Step 1 passes only when:

1. score ≥95/100;
2. zero critical defects remain;
3. all 14 requested areas have explicit coverage;
4. the architecture is internally consistent;
5. the reviewed specification revision is committed.

## Current status

This review is to be filled from an actual audit after the specification revision is committed. The score must not be assumed in advance.
