# ADR-007 — Repository Governance Enforcement and Protected Integration Branches

Status: ACCEPTED FOR FOUNDATION
Date: 2026-10-04

## Context

The project has a permanent quality gate and CI checks, but required status checks and branch protection were not yet enforced at the GitHub repository level. Documentation alone is insufficient to prevent an integration branch from bypassing the gate.

## Decision

1. `main` and `architecture/foundation-step-1` are protected integration branches.
2. Protected branches require pull requests, at least one approving review, conversation resolution, required status checks, and strict/up-to-date checks.
3. Force pushes and branch deletion are disabled for protected branches.
4. The stable required checks are `Repository validation` and `Governance validation`.
5. During an active gated stage, the target integration branch may additionally require that stage's validation check. For Step 2 that check is `Step 2 foundation`.
6. Governance validation runs on pull requests without path filters.
7. Repository validation is a stable workflow intended to remain usable across later stages.
8. GitHub repository rules are an external enforcement layer. The repository may validate its policy and workflow definitions, but the activation of branch protection must be verified from GitHub repository settings before the gate can pass.

## Rationale

This separates:

- policy, stored in the repository;
- validation, executed by CI;
- enforcement, performed by GitHub branch rules.

No one of those layers is allowed to impersonate another.

## Consequences

A maintainer must apply the documented repository rules once. Future changes are then gated by GitHub plus repository CI.

## Verification plan

Record external confirmation that the protected branches have the required rules and status checks enabled. The stage gate remains blocked while that confirmation is absent.
