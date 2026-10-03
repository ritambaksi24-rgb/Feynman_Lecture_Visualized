# 03 — Repository Structure

## Intended logical structure

The project begins as a logical monorepo without forcing physical package extraction before it is justified.

~~~text
/
├── app/
├── content/
│   ├── volume-1/
│   │   └── chapter-01/
│   │       ├── chapter.json
│   │       ├── sections/
│   │       ├── ideas/
│   │       ├── explorations/
│   │       └── references/
│   └── ...
├── schemas/
│   ├── content/
│   ├── scientific/
│   ├── exploration/
│   ├── visualization/
│   └── api/
├── packages/
│   ├── scientific/
│   ├── computation/
│   ├── exploration/
│   ├── visualization/
│   ├── design-system/
│   ├── shared/
│   └── adapters/
├── docs/
│   ├── architecture/
│   ├── decisions/
│   ├── content/
│   ├── scientific/
│   ├── visualization/
│   └── design-system/
├── data/
│   ├── source/
│   ├── processed/
│   └── provenance/
├── public/
├── tooling/
└── tests/
~~~

## Organization rules

Directories express stable architectural boundaries, not temporary convenience.

Content remains separate from executable code.

Machine-consumed data has explicit schemas.

The packages directory is a logical boundary first; physical npm package extraction happens only when build isolation, ownership, reuse, or dependency boundaries justify it.

Generated artifacts are distinct from source and reproducible where possible.

public/ contains only distributable assets with known provenance/licensing.

Markdown is used for human-readable specifications and ADRs. JSON/schema files are used for machine-consumed structured data.

The repository must not contain scraped Feynman corpora, unlicensed copied figures, secrets, dependency caches, or temporary exports.
