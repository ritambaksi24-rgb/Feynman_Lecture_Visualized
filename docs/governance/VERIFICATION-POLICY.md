# Verification and Claim Discipline

## Purpose

This policy exists because AI systems can produce convincing text, code, screenshots, and plans that are not evidence of correctness.

## Four distinct states

### 1. Intent

The requirement or design says something should exist.

Example:

> "The renderer is replaceable."

This is not proof.

### 2. Implementation

The repository contains code or configuration intended to provide the property.

This is still not proof of behavior.

### 3. Tested

An applicable automated or manual check was actually executed.

This is evidence of a tested behavior, not universal proof.

### 4. Verified

The test/inspection result was reviewed against an explicit acceptance criterion and no blocking contradiction was found.

Verification is bounded by the tested scope.

## Claim matrix

| Claim | Minimum evidence |
| --- | --- |
| File exists | Repository inspection. |
| Contract is defined | Contract file + consistency inspection. |
| Type safety passes | Actual type-check output. |
| Test passes | Actual test execution output. |
| Build works | Actual build output. |
| Scientific behavior is correct | Scientific validation against expected invariants/reference behavior. |
| Renderer is replaceable | Contract boundary + independent adapter or substitution test. |
| Figma and repository tokens agree | Token comparison/reconciliation evidence. |
| Accessibility passes | Applicable automated + manual accessibility review. |
| Performance target passes | Measured benchmark/profile against defined budget. |
| Feature is production-ready | All required stage checks, not a screenshot or code review alone. |

## Strong-claim rule

The stronger the claim, the stronger the evidence must be.

Never write:

- "fully correct";
- "100% modular";
- "production ready";
- "scientifically validated";
- "zero bugs";
- "fully tested";

unless the exact claim is defined and the evidence justifies it.

## Test honesty

An agent must distinguish:

- not run;
- failed;
- passed;
- partially run;
- blocked by missing infrastructure;
- manually reviewed.

Never convert "not run" into "passed".

## Adversarial verification

After the happy path, inspect likely failure modes:

- null/empty inputs;
- invalid ranges;
- unit mismatch;
- missing provenance;
- stale cache;
- cancellation;
- renderer disposal;
- theme changes;
- reduced motion;
- keyboard-only interaction;
- duplicate registration;
- contract version mismatch;
- unauthorized or malformed external input;
- unsupported scientific domain.

## Regression verification

A change is not verified only against the new feature. Verify affected previous invariants and contracts.

## Evidence location

Important evidence belongs in:

- CI output;
- benchmark artifacts;
- test reports;
- ADRs;
- quality reviews;
- `CURRENT-STATE.md`;
- defect resolution records.

Do not use chat as the permanent evidence store.

## Verification boundary

Verification must state its scope.

Example:

> "Verified the token validator and repository/Figma naming rules on commit XYZ."

This does not imply that the whole design system is verified.
