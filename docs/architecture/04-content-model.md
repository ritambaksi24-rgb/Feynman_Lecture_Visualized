# 04 — Content Model

## Canonical hierarchy

~~~text
Volume
  └── Chapter
       └── Section
            └── Idea
                 ├── Explanation
                 ├── Equation
                 ├── Demonstration
                 ├── Exploration
                 ├── Visualization
                 └── References
~~~

## Idea

An Idea is the smallest independently teachable unit with a meaningful role in the chapter flow.

It records stable ID, title, sequence, educational intent, source provenance, original explanatory content, model references, exploration references, visualization references, and accessibility alternatives where relevant.

## Source relationship

Feynman source metadata is represented as provenance, for example:

~~~json
{
  "source": {
    "work": "The Feynman Lectures on Physics",
    "volume": "I",
    "chapter": "1",
    "section": "1-2",
    "url": "https://www.feynmanlectures.caltech.edu/I_01.html"
  }
}
~~~

The metadata does not grant reproduction rights.

## Content and presentation

Content identifies semantics rather than components:

~~~text
visualization: particle-motion
exploration: diffusion-experiment
equation: mean-free-path
~~~

The registry resolves these identifiers.

## Exploration content

An Idea may declare an exploration containing a model reference, exposed parameters, initial conditions, permitted interactions, expressions, plots/graphs, derived quantities, reset behavior, accessibility alternative, and reproducibility settings.

## Copyright boundary

The public project does not mirror complete copyrighted chapters or sections unless it has an explicit legal right to do so. Original explanations are distinguishable from quotations.

## Content lifecycle

Source analysis → editorial decomposition → scientific interpretation → content schema → exploration/visualization design → implementation → scientific/accessibility validation → publication review.

## Stability and localization

Stable IDs require migration when renamed. Sequence can change without changing IDs. Display strings are locale-aware; scientific models and visualization IDs are shared across locales.
