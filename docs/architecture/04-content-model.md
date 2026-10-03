# 04 — Content Model

## 1. Hierarchy

The canonical educational hierarchy is:

~~~text
Volume
  └── Chapter
       └── Section
            └── Idea
                 ├── Explanation
                 ├── Equation
                 ├── Scientific Model
                 ├── Visualization
                 ├── Demonstration
                 └── References
~~~

The application preserves the original chapter/section progression while allowing each section to contain multiple small ideas.

## 2. Idea as the core content unit

An Idea is the smallest independently teachable unit that can justify its own presentation.

An idea should answer: what is being taught, why it appears here, what source establishes it, what scientific model supports it, what visualization makes it clearer, and what interaction is educationally useful.

## 3. Provenance model

Each idea records structured provenance. Example:

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

## 4. Copyright boundary

The content model separates source reference, short quotation where legally appropriate, original explanation, original visualization, scientific derivation/model, and external licensed assets.

The repository must not become a machine-readable copy of the Feynman Lectures.

Source text should normally be linked/referenced rather than republished wholesale. Any substantial reproduction requires a rights review.

## 5. Content types

The initial schema supports semantic types such as text, equation, figure, diagram, visualization, simulation, animation, callout, and reference.

These are content semantics, not React component names.

## 6. Rendering independence

Content references capabilities by semantic identifier, such as visualization: particle-motion-demo. Content does not import a renderer implementation.

## 7. Content lifecycle

~~~text
Source research
    ↓
Editorial decomposition
    ↓
Scientific review
    ↓
Content schema
    ↓
Visualization design
    ↓
Implementation
    ↓
Validation
    ↓
Publication
~~~

A chapter is not production-ready merely because its page renders.

## 8. Editorial order

Ideas have explicit order and stable IDs. Reordering content must not break references to scientific models or visualizations.

## 9. Accessibility content

Important scientific information cannot be conveyed only through animation. Where practical, ideas provide text-equivalent descriptions, labels, values, tables, or accessible summaries.

## 10. Localization readiness

Content identifiers and semantic structures must permit future localization without duplicating scientific models or application logic.
