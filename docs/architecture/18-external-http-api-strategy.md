# 18 — External HTTP API Strategy

HTTP is optional infrastructure, not a prerequisite for the product.

The initial application should remain client-side/static wherever scientifically and operationally sufficient.

A server becomes justified for shared saved experiments, authentication, remote computation, large controlled datasets, long-running jobs, collaboration, or controlled external access.

When introduced:

OpenAPI contract → review → server implementation → generated/integrated client → contract tests.

External operations define validation, errors, authentication/authorization, idempotency, pagination, rate limits, and version behavior as applicable.

Remote scientific computation uses a job/result abstraction rather than browser-specific objects.

Core reading and local scientific experiences must remain functional when optional server infrastructure is unavailable.

Never introduce HTTP endpoints merely to move code between local modules.
