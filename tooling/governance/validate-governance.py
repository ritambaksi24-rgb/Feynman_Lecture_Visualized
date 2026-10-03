#!/usr/bin/env python3
"""Validate permanent repository governance invariants."""

from __future__ import annotations

from pathlib import Path
import re
import sys


ROOT = Path(__file__).resolve().parents[2]

REQUIRED_FILES = [
    ROOT / "AGENTS.md",
    ROOT / "docs/governance/README.md",
    ROOT / "docs/governance/PROJECT-CONSTITUTION.md",
    ROOT / "docs/governance/CURRENT-STATE.md",
    ROOT / "docs/governance/QUALITY-GATE.md",
    ROOT / "docs/governance/STAGE-GATE-TEMPLATE.md",
    ROOT / "docs/governance/DEFECT-LEDGER.md",
    ROOT / "docs/governance/DECISION-POLICY.md",
    ROOT / "docs/governance/VERIFICATION-POLICY.md",
    ROOT / "docs/governance/CHANGE-PROTOCOL.md",
    ROOT / "docs/governance/FIGMA-AI-AGENTS.md",
    ROOT / ".github/PULL_REQUEST_TEMPLATE.md",
]


def fail(message: str) -> None:
    print(f"ERROR: {message}")
    sys.exit(1)


def read(path: Path) -> str:
    try:
        return path.read_text(encoding="utf-8")
    except OSError as exc:
        fail(f"cannot read {path}: {exc}")


for path in REQUIRED_FILES:
    if not path.is_file():
        fail(f"required governance file missing: {path.relative_to(ROOT)}")

agents = read(ROOT / "AGENTS.md")
constitution = read(ROOT / "docs/governance/PROJECT-CONSTITUTION.md")
current = read(ROOT / "docs/governance/CURRENT-STATE.md")
gate = read(ROOT / "docs/governance/QUALITY-GATE.md")
stage_template = read(ROOT / "docs/governance/STAGE-GATE-TEMPLATE.md")
verification = read(ROOT / "docs/governance/VERIFICATION-POLICY.md")
protocol = read(ROOT / "docs/governance/CHANGE-PROTOCOL.md")
figma = read(ROOT / "docs/governance/FIGMA-AI-AGENTS.md")
governance_readme = read(ROOT / "docs/governance/README.md")

required_rules = [
    (agents, "repository is the durable project memory"),
    (constitution, "Every stage, milestone, subsystem, and material change is governed by the project Quality Gate."),
    (constitution, "95/100"),
    (constitution, "Repository DTCG tokens are the canonical implementation token source."),
    (constitution, "Arbitrary JavaScript execution"),
    (current, "living project-state deliverable"),
    (current, "It is not a Step 1.5-only document."),
    (gate, "permanent quality-gate framework for the entire project"),
    (gate, "Score >=95/100 AND zero unresolved Critical defects"),
    (gate, "stage-specific review"),
    (stage_template, "Permanent template"),
    (stage_template, "Current-state update"),
    (verification, "Intent"),
    (verification, "Verified"),
    (protocol, "Adversarial review"),
    (protocol, "CURRENT-STATE.md"),
    (figma, "Repository DTCG tokens remain the canonical implementation token source."),
    (figma, "Figma AI is an implementation assistant and design collaborator"),
]

for content, phrase in required_rules:
    if phrase not in content:
        fail(f"required permanent governance rule missing: {phrase!r}")

if re.search(r"Step 1\.5 Quality Gate|Minimum 95/100 and zero unresolved critical defects", gate):
    fail("permanent QUALITY-GATE.md still contains Step 1.5-specific gate wording")

if "STEP-1-5-QUALITY-REVIEW.md" in gate:
    fail("permanent QUALITY-GATE.md contains a Step 1.5-specific reference")

if "Step 1.5-only" not in current:
    fail("CURRENT-STATE.md is missing its lifecycle-wide scope statement")

expected_links = [
    "./PROJECT-CONSTITUTION.md",
    "./CURRENT-STATE.md",
    "./QUALITY-GATE.md",
    "./STAGE-GATE-TEMPLATE.md",
    "./DEFECT-LEDGER.md",
    "./DECISION-POLICY.md",
    "./VERIFICATION-POLICY.md",
    "./CHANGE-PROTOCOL.md",
    "./FIGMA-AI-AGENTS.md",
]
for link in expected_links:
    if link not in governance_readme:
        fail(f"governance index missing link: {link}")

print("Permanent governance validation passed.")
print(f"Checked {len(REQUIRED_FILES)} required permanent governance files.")
print("Scope: permanent governance structure and invariants only; stage/application behavior requires stage-specific verification.")
