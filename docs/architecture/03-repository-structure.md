# 03 — Repository Structure

## 1. Intended structure

~~~text
/
├── app/
├── content/
│   ├── volume-1/
│   │   └── chapter-01/
│   │       ├── chapter.json
│   │       ├── sections/
│   │       ├── ideas/
│   │       └── references/
│   └── ...
├── packages/
│   ├── scientific/
│   ├── computation/
│   ├── visualization/
│   ├── design-system/
│   └── shared/
├── docs/
│   ├── architecture/
│   ├── decisions/
│   ├── content/
│   ├── scientific/
│   ├── visualization/
│   └── design-system/
├── public/
├── tooling/
└── tests/
~~~

This is an architectural target, not a command to create every directory immediately.

## 2. Organization rule

Directories represent stable architectural boundaries, not temporary convenience. Do not create a directory for a single file unless the directory expresses a real domain or future reuse boundary.

## 3. Content placement

Content is stored separately from executable application code. A chapter must be discoverable without inspecting React source.

## 4. Shared packages

Shared packages contain stable reusable capabilities. They must not become a miscellaneous dumping ground. Each package needs an explicit public API.

## 5. Documentation placement

Architecture specifications live in docs/architecture/. Architecture Decision Records live in docs/decisions/.

Long-lived contributor-facing specifications use Markdown. Machine-consumed content and tokens use structured formats and schemas.

## 6. Generated output

Generated files must be distinguishable from source files and should not be edited manually. Examples include generated scientific datasets, rendered animation assets, generated type definitions, and build output.

## 7. Asset policy

Every public asset must have known provenance and licensing status. Copyrighted Feynman figures or scans must not be copied into public/ merely because they are available online.

## 8. Monorepo decision

The repository should behave as a logical monolith initially. Physical package extraction is justified when it improves boundaries, independent testing, reuse, or build characteristics.

We do not introduce a multi-package toolchain solely for appearance.
