# 17 — Internal Module API Strategy

Internal APIs expose the smallest stable capability required by another module.

Conceptual capabilities include:

~~~text
ScientificModel.evaluate()
ScientificModel.initialize()
Computation.run()
Exploration.setParameter()
Exploration.evaluate()
Visualization.create()
Renderer.mount()
Renderer.update()
Renderer.dispose()
~~~

Concrete signatures are implementation-stage artifacts; lifecycle and semantics are defined first.

Resource-owning APIs have explicit lifecycle: create → initialize/mount → update → pause/resume where relevant → dispose.

Inputs should be immutable where practical. Expected failures use typed/domain-aware results or errors.

Document whether an API is pure, stateful, asynchronous, cancellable, or resource-allocating.

Higher-level semantics depend on capability contracts; infrastructure supplies implementations.

Stable subsystem APIs require contract tests. Avoid generic BaseManager/UniversalService abstractions without real shared semantics.

Internal APIs can evolve faster than external APIs, but multi-consumer changes require coordinated migration.
