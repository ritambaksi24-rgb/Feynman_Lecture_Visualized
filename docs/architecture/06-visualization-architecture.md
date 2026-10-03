# 06 — Visualization Architecture

## Goal

Visualization is a renderer-independent scientific subsystem.

## Pipeline

~~~text
Content
  ↓
Exploration / Visualization Definition
  ↓
Scientific Inputs
  ↓
Scientific State
  ↓
Visual Encoding
  ↓
Renderer Adapter
  ↓
2D / 3D / Canvas / SVG / Video / GPU
~~~

## Visualization definition

A definition identifies stable ID/version, required model/data contract, visual channels, interaction requirements, view configuration, accessibility description, theme roles, renderer capabilities, and performance class.

## Renderer adapters

Adapters translate renderer-independent definitions and scientific state into engine-specific representations.

## Scientific visual semantics

Visual encodings have documented meaning. Position, scale, orientation, color, opacity, shape, motion, and annotation must not carry ambiguous meanings in one scene.

## Real scientific data

Production values originate from analytical equations, numerical computation, measured/curated datasets with provenance, or documented educational approximations. Fabricated placeholder values are prohibited.

## Animation

Simulation time is separate from presentation time. Animations have explicit lifecycle and safe pause/reset behavior.

## Performance

Renderers consume derived state/buffers rather than recomputing expensive domain logic every frame. Large datasets may use workers, precomputation, instancing, GPU buffers, LOD, sampling, tiling, or streaming where scientifically honest.

## Theme

Semantic visualization roles drive renderer styling. Theme-specific raw literals require documented exception.

## Tool roles

Three.js is a browser visualization capability. Manim is an offline authoring/pre-render candidate. VisPy is optional Python scientific tooling/validation. Neither Manim nor VisPy is a mandatory browser dependency.

## Failure states

Renderers expose loading, invalid-input, unavailable-capability, numerical-failure, and runtime-failure states. They never silently substitute plausible fake scientific output.
