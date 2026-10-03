# 12 — Modularity Rules

## Core definition

Modularity means a capability can change, test, replace, or reuse without propagating unrelated changes.

It does not mean maximizing files, packages, or interfaces.

## Module criteria

Create a module when it has one or more of:

- meaningful architectural responsibility;
- stable contract;
- independent testability;
- meaningful reuse;
- distinct lifecycle;
- meaningful replacement boundary.

## Contract criteria

A contract is justified when multiple consumers depend on stable behavior, when replacement is expected, or when validation/versioning has real value.

Do not introduce an interface solely to satisfy an abstract pattern.

## Avoid fragmentation

Do not split one-off calculations, small JSX fragments, or local helpers into artificial layers.

## Avoid monoliths

Split when unrelated domains, state ownership, lifecycle, or dependency responsibilities accumulate.

## Public API discipline

Public module APIs should be intentionally small. Internal helpers remain private.

## Registry discipline

Registries are appropriate when bounded interchangeable capabilities grow. A registry must be explicit, type-safe, discoverable, and must not hide arbitrary dynamic dependency loading.

## Scientific Exploration boundary

The exploration engine is cohesive because calculator/expression evaluation, dependency tracking, plotting, parameter control, simulation orchestration, and scientific data inspection share a lifecycle and state graph.

This does not mean every operation becomes a package.

## Renderer boundary

Each renderer adapter owns engine-specific code. Scientific models must not know renderer objects.

## Design-system boundary

Shared UI behavior lives in design-system components. Scientific compositions consume them.

## Dead code and event hygiene

Remove unused exports, unreachable branches, stale adapters, duplicates, and obsolete compatibility layers.

Listeners, subscriptions, animation frames, workers, and timers have explicit ownership and cleanup.

## Change amplification

A change in one concern should not require unrelated changes elsewhere. High change amplification is evidence of a broken boundary.
