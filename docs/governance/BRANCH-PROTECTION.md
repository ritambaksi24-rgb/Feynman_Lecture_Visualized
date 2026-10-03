# Branch Protection and Required Status Checks

## Purpose

This document defines the repository controls required to make the project governance system enforceable rather than merely descriptive.

GitHub branch protection rules or repository rulesets are the enforcement mechanism. This file is the source-controlled policy describing the required configuration.

## Protected integration branches

At minimum protect:

- `main`
- `architecture/foundation-step-1`

During an active stage, any temporary integration branch that receives a gated stage result must be protected before that result is accepted.

## Required pull-request controls

Protected branches MUST require:

- pull requests before merging;
- at least 1 approving review;
- conversation resolution before merging;
- required status checks before merging;
- branch up-to-date/strict status-check semantics;
- no force pushes;
- no branch deletion.

Direct pushes should be restricted to repository maintainers/admins and must not be used as the normal stage-integration path.

Signed commits are not a Step 2 prerequisite because the project has not yet established a signing-key operational policy.

## Required status checks

Use these stable GitHub Actions job names as required checks:

### All protected integration branches

- `Repository validation`
- `Governance validation`

### While Step 2 is the active stage and its result is being integrated

Also require:

- `Step 2 foundation`

After Step 2 is accepted, remove the stage-specific check from the permanent branch rule and retain the stable repository/governance checks. Future stages should define their stage-specific checks in their stage review and branch-control update.

## Workflow trigger requirements

Required checks must run on pull requests. The repository validation workflow also supports merge-group execution so a future GitHub merge queue does not silently skip a required check.

Required checks must not be implemented with path filters that allow code-only pull requests to skip governance validation.

## Enforcement verification

The repository can verify:

- policy documents exist;
- workflow/job names are present;
- workflow triggers are present;
- required branch names are documented;
- governance/current-state consistency.

The repository cannot, by committed files alone, prove that a GitHub administrator has actually enabled the repository rule. That external setting must be inspected and recorded as VERIFIED before the stage gate closes.

## One-time GitHub configuration

A repository administrator should create branch rules or a ruleset targeting `main` and `architecture/foundation-step-1`, enable the controls above, and select the exact required status-check names.

Do not accept Step 2 while GOV-006 remains BLOCKED.
