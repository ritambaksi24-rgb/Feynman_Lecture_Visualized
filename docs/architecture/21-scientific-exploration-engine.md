# 21 — Scientific Exploration Engine

The Scientific Exploration Engine is a first-class subsystem for interactive mathematical and scientific exploration.

It is inspired by GeoGebra-like capability, but is not a product clone.

~~~text
Experiment Definition
        ↓
Parameter / Variable Store
        ↓
Dependency Graph
        ↓
┌───────────┬───────────┬───────────┐
│ Calculator│   Graph   │ Simulation│
└─────┬─────┴─────┬─────┴─────┬─────┘
      ↓           ↓           ↓
   Results      Plots     Scientific State
      └───────────┬───────────┘
                  ↓
          Visualization Views
~~~

Progressive capabilities include scientific calculator/expression evaluation, variables/constants, equations/functions, unit-aware quantities, parameter sliders, dependency tracking, function graphs, scientific plots, coordinate geometry, tables, derived quantities, numerical experiments, simulation control, time/playback, snapshots/reset, and data export.

User expressions are parsed into a constrained AST/safe representation. Arbitrary JavaScript execution is prohibited.

Expressions, parameters, model quantities, plots, tables, and visualization bindings form a dependency graph. Invalid references and cycles are detected.

Changing one parameter should recompute affected dependents without duplicating calculations.

Calculator, graph, table, and visualization outputs consume the same evaluated scientific state/snapshot.

The engine can consume Scientific Model contracts and expose parameters/derived quantities through safe exploration contracts.

Renderers own drawing; the exploration engine owns semantics and reactive state.

Every control must correspond to a meaningful scientific quantity or exploration state.

Do not implement every GeoGebra feature. Add capability only when it improves explanation of Feynman concepts.
