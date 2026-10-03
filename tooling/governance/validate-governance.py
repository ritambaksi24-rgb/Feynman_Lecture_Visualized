#!/usr/bin/env python3
"""Validate repository governance invariants for Step 1.5."""

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
    ROOT / "docs/governance/DEFECT-LEDGER.md",
    ROOT / "docs/governance/DECISION-POLICY.md",
    ROOT / "docs/governance/VERIFICATION-POLICY.md",
    ROOT / "docs/governance/CHANGE-PROTOCOL.md",
    ROOT / "docs/governance/FIGMA-AI-AGENTS.md",
    ROOT / "docs/decisions/ADR-004-step-1-5-ai-resilient-project-governance.md",
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
ledger = read(ROOT / "docs/governance/DEFECT-LEDGER.md")
verification = read(ROOT / "docs/governance/VERIFICATION-POLICY.md")
protocol = read(ROOT / "docs/governance/CHANGE-PROTOCOL.md")
figma = read(ROOT / "docs/governance/FIGMA-AI-AGENTS.md")
governance_readme = read(ROOT / "docs/governance/README.md")

required_phrases = [
    (agents, "repository is the durable project memory"),
    (agents, "95/100"),
    (constitution, "95/100"),
    (constitution, "Repository DTCG tokens are the canonical implementation token source"),
    (constitution, "Arbitrary JavaScript execution"),
    (current, "Step 1.5"),
    (current, "IMPLEMENTED_PENDING_VERIFICATION"),
    (gate, "Minimum 95/100 and zero unresolved critical defects"),
    (ledger, "Critical"),
    (verification, "Intent"),
    (verification, "Verified"),
    (protocol, "Adversarial review"),
    (protocol, "Update CURRENT-STATE.md"),
    (figma, "Repository DTCG tokens remain the canonical implementation token source."),
    (figma, "Figma AI is an implementation assistant and design collaborator"),
]

for content, phrase in required_phrases:
    if phrase not in content:
        fail(f"required governance rule missing: {phrase!r}")

if not re.search(r"`[0-9a-f]{40}`", current):
    fail("CURRENT-STATE.md does not contain a concrete 40-character commit SHA")

for line in ledger.splitlines():
    if "| Critical |" in line and re.search(r"\| (OPEN|IN_PROGRESS|BLOCKED) \|", line):
        fail(f"critical defect appears unresolved: {line}")

expected_links = [
    "./PROJECT-CONSTITUTION.md",
    "./CURRENT-STATE.md",
    "./QUALITY-GATE.md",
    "./DEFECT-LEDGER.md",
    "./DECISION-POLICY.md",
    "./VERIFICATION-POLICY.md",
    "./CHANGE-PROTOCOL.md",
    "./FIGMA-AI-AGENTS.md",
]
for link in expected_links:
    if link not in governance_readme:
        fail(f"governance index missing link: {link}")

print("Governance validation passed.")
print(f"Checked {len(REQUIRED_FILES)} required governance files.")
print("Scope: governance structure and invariants only; this is not an application build or scientific validation.")
