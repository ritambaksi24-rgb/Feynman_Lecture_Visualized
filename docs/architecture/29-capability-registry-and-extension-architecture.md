# 29 — Capability Registry and Extension Architecture

Registries provide explicit selection for bounded interchangeable capabilities.

Potential registrations include scientific models, computation backends, exploration features, visualization types, renderer adapters, and semantic content blocks.

A registry maps stable semantic IDs to trusted metadata and implementations. It is not a universal dependency-injection container.

Capabilities may declare ID/version, supported inputs, required features, accessibility status, performance class, theme requirements, and scientific validation status.

Content references semantic identifiers; the registry resolves implementations.

Optional heavy capabilities may be lazy-loaded when contracts remain stable and failure states are explicit.

Dynamic registration is trusted-code only unless a future plugin system receives separate security, sandbox, licensing, and versioning design.

Do not create registries when a small finite set is clearer as ordinary typed code.
