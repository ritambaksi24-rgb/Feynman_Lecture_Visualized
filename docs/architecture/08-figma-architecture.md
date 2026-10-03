# 08 — Figma Architecture

## Role

Figma is the design, prototyping, visual-review, and collaboration environment.

It is not the runtime source of scientific truth or the authoritative repository for chapter content.

## Canonical token flow

~~~text
Repository DTCG token source
        ↓
Token translation/reconciliation
        ↓
Figma variables
        ↓
Components / patterns
        ↓
Visual review
        ↓
Implementation
~~~

Figma changes must be reconciled into the repository token source before they become runtime design-system decisions.

## Figma structure

~~~text
Feynman Visualized
├── Foundations
├── Components
├── Patterns
├── Scientific UI
├── Exploration Workspace
├── Templates
└── Chapter Explorations
~~~

## Variables and modes

Figma variables use the same semantic vocabulary as repository tokens. Light and Dark are explicit modes.

## Components and variants

Figma components correspond to implementation contracts where practical. Variants represent meaningful state/configuration rather than combinatorial explosion.

## Scientific visualization design

Figma may specify layout, annotation, typography, controls, interaction choreography, visual hierarchy, and static scientific diagrams. Dynamic numerical rendering remains in the scientific visualization system.

## Parity

System components require visual review against implementation. Token changes require review of both Figma and runtime.

## Naming

Figma variables, Figma components, tokens, code components, and documentation use the same semantic vocabulary where practical.

## Design-source rule

Figma is the source of design intent; repository token files are the canonical machine-readable implementation source. Neither replaces scientific or content sources of truth.
