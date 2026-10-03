# 30 — Observability, Diagnostics and Failure Handling

A scientific application must make failure diagnosable and must never hide failure behind plausible-looking science.

Failure classes include content load, schema validation, model validation, computation, cancellation, renderer initialization, unsupported capability, external service, malformed data, and performance degradation.

Errors retain domain, code, message, recoverability, and relevant context.

Use structured logs. Never log secrets or unnecessary personal information.

Safe scientific diagnostics may include model ID/version, parameter summaries, computation status, and validation state.

Long-running experiments/jobs may have stable run IDs.

One visualization failure must not crash unrelated content or explorations.

If computation fails, show the failure. Cached/stale output must be explicitly identified.

Every failure defines appropriate retry, reset, parameter correction, continue-reading, or return behavior.

Failure paths are deliberately exercised in automated tests.
