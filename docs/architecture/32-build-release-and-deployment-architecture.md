# 32 — Build, Release and Deployment Architecture

Builds must be reproducible, validated, and separated from offline scientific authoring.

Use distinct local, CI, preview, and production environments. Environment-specific configuration is not hardcoded.

~~~text
Install
  ↓
Schema validation
  ↓
Static/type checks
  ↓
Unit + contract tests
  ↓
Scientific tests
  ↓
Accessibility/integration tests
  ↓
Build
  ↓
Performance/visual checks
  ↓
Publication/release
~~~

Builds validate content schemas, references, provenance requirements, and registered capabilities.

Generated scientific assets carry source/model/version metadata.

The core application remains deployable as a static site where possible. Optional backend features fail independently.

Release identity records application, content, schema, scientific model, exploration, and relevant dependency revisions.

Scientific caches are versioned.

Before public release, run rights/provenance, dependency/license, secret, accessibility, and relevant performance checks.

Offline research scripts may generate validated artifacts, but web builds consume declared/versioned outputs.
