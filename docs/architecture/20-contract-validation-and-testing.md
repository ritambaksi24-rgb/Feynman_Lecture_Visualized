# 20 — Contract Validation and Testing

Contracts are continuously validated.

Test layers:

~~~text
Schema validation
      ↓
Type checking
      ↓
Contract tests
      ↓
Scientific tests
      ↓
Integration tests
      ↓
Accessibility / visual tests
      ↓
End-to-end tests
~~~

Schema tests cover valid, boundary, invalid, and migration fixtures.

Internal contracts are tested through observable behavior. HTTP contracts are checked against OpenAPI when HTTP exists.

Scientific tests cover units, domains, invariants, deterministic seeds, known solutions, limiting cases, convergence, and tolerances where applicable.

Exploration tests verify parameter propagation, cycle detection, safe expression failure, shared evaluated state across plots/tables/scenes, reset, snapshots, and cancellation.

Renderer tests verify lifecycle and failure semantics.

Visual regression is supplementary and never substitutes for scientific correctness.

Property-based testing is encouraged where parser, evaluator, dependency-graph, and invariant coverage benefits from broad inputs.

Failure injection deliberately exercises invalid input, numerical failure, timeout, cancellation, malformed data, and renderer failure.
