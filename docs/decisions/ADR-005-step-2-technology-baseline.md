# ADR-005 — Step 2 Technology Baseline

Status: ACCEPTED FOR FOUNDATION

## Decision

Use React 19.3.0 and React DOM 19.3.0 for the application UI, Base UI 1.8.0 for headless accessible interaction primitives, Vite 8.3.2 as the browser build tool, and TypeScript 7.0.2 for the project type system. Repository-owned design tokens and Feynman components provide visual identity.

These versions were checked against current package registry information on 2026-10-03. The Node engine requirement of >=22.12.0 is compatible with the selected Vite baseline.

## Constraints

- package-lock.json must be committed before Step 2 can pass;
- dependency upgrades require compatibility, security, and architecture review;
- scientific packages must remain independent of React, Base UI, and renderer implementations;
- Base UI does not replace project-owned token/component contracts.

## Evidence boundary

This ADR records a technology decision, not evidence that the runtime build or browser verification has passed.
