# 27 — Security, Privacy and Supply Chain

Treat user expressions, external datasets, persisted experiments, remote responses, and third-party dependencies as untrusted.

## Expression safety

Parse user-authored expressions into a constrained representation. Never execute arbitrary JavaScript from mathematical input.

## Validation

Validate structure, numeric ranges, units, array sizes, simulation bounds, recursion, expression complexity, and resource limits.

## HTTP security

When a server exists, validate every request server-side and enforce authentication/authorization where required.

## Secrets and privacy

Secrets never enter public source or browser bundles. Collect and persist only data with a documented product purpose.

## Dependencies

Track dependency versions/licenses, review advisories, and commit the lockfile.

## Content and asset security

Sanitize untrusted Markdown/HTML. Validate downloaded/generated asset type and size.

## Resource exhaustion

Bound computation, simulation size, expression complexity, memory, worker time, and generated output.

## Incident handling

Security issues require a reproducible report, remediation process, and release procedure.
