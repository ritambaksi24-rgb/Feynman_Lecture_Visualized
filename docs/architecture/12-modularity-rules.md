# 12 — Modularity Rules

## 1. Definition

Modularity means a system can change, test, replace, or reuse a capability without propagating unrelated changes across the codebase.

It does not mean maximizing file count.

## 2. Module criteria

A module should have at least one of:

- coherent responsibility;
- independent testing value;
- stable public contract;
- meaningful reuse;
- distinct architectural boundary.

## 3. Avoid fragmentation

Do not extract a file solely because a function is short, a JSX block appears once, or an existing function can be split into artificial layers.

## 4. Avoid monoliths

A file is a refactoring candidate when it mixes multiple domains, has unstable responsibilities, contains unrelated state, or becomes difficult to test independently.

## 5. Public APIs

Shared modules expose deliberate public APIs. Internal implementation details remain private.

## 6. Content modules

Chapter content modules describe educational structure. They must not become containers for renderer implementation.

## 7. Scientific modules

Scientific modules are independently testable without React or browser rendering.

## 8. Visualization modules

Visualization modules isolate engine-specific concerns.

## 9. Design-system modules

UI components depend on tokens and established foundations rather than copying style values from other components.

## 10. Registry pattern

When a growing set of concepts or renderers requires selection, use a registry or declarative mapping instead of long conditional chains.

Registries remain explicit and type-safe.

## 11. Dead code

Unused exports, stale adapters, unreachable branches, abandoned components, duplicate implementations, and obsolete compatibility layers are removed rather than preserved “just in case.”

## 12. Event hygiene

Event listeners require clear ownership and cleanup. Duplicate listeners and hidden global subscriptions are prohibited.

## 13. Duplication

Duplicated scientific formulas, color values, interaction contracts, and content metadata are maintainability defects.

## 14. Extension test

A new renderer should require adding an adapter/composition rather than rewriting content.

A new chapter should primarily add content and scientific/visual assets rather than duplicate page infrastructure.

## 15. Refactor threshold

When a module repeatedly attracts unrelated responsibilities, stop adding features to it and resolve its boundary before continuing.
