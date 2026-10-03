#!/usr/bin/env python3
"""Validate permanent repository governance and cross-document invariants."""

from __future__ import annotations

from pathlib import Path
import re
import subprocess
import sys


ROOT = Path(__file__).resolve().parents[2]
SHA = re.compile(r"^[0-9a-f]{40}$")
STATUSES = {"NOT_STARTED", "IN_PROGRESS", "IMPLEMENTED_PENDING_VERIFICATION", "VERIFIED_PASS", "BLOCKED", "REOPENED"}

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
    ROOT / "docs/governance/BRANCH-PROTECTION.md",
    ROOT / ".github/PULL_REQUEST_TEMPLATE.md",
    ROOT / ".github/workflows/governance.yml",
    ROOT / ".github/workflows/repository-validation.yml",
    ROOT / "docs/decisions/ADR-006-bounded-exploration-and-foundational-technology.md",
    ROOT / "docs/decisions/ADR-007-repository-governance-enforcement.md",
    ROOT / "docs/decisions/ADR-008-technology-inventory-and-adoption-roadmap.md",
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
readme = read(ROOT / "docs/governance/README.md")
branch_policy = read(ROOT / "docs/governance/BRANCH-PROTECTION.md")
technology_inventory = read(ROOT / "docs/decisions/ADR-008-technology-inventory-and-adoption-roadmap.md")
governance_workflow = read(ROOT / ".github/workflows/governance.yml")
repository_workflow = read(ROOT / ".github/workflows/repository-validation.yml")

required_rules = [
    (agents, "repository is the durable project memory"),
    (constitution, "Every stage, milestone, subsystem, and material change is governed by the project Quality Gate."),
    (constitution, "95/100"),
    (constitution, "Repository DTCG tokens are the canonical implementation token source."),
    (constitution, "Arbitrary JavaScript execution"),
    (constitution, "The permanent QUALITY-GATE.md defines the gate method and hard acceptance authority."),
    (constitution, "Protected integration branches MUST reject merges"),
    (current, "living project-state deliverable"),
    (current, "It is not a Step 1.5-only document."),
    (gate, "permanent quality-gate framework for the entire project"),
    (gate, "Score >=95/100 AND zero unresolved Critical defects"),
    (gate, "A stage-specific review contains:"),
    (stage_template, "Permanent template"),
    (stage_template, "Current-state update"),
    (verification, "Intent"),
    (verification, "Verified"),
    (protocol, "Adversarial review"),
    (protocol, "CURRENT-STATE.md"),
    (figma, "Repository DTCG tokens remain the canonical implementation token source."),
    (figma, "Figma AI is an implementation assistant and design collaborator"),
    (readme, "./BRANCH-PROTECTION.md"),
    (branch_policy, "Repository validation"),
    (branch_policy, "Governance validation"),
    (branch_policy, "Step 2 foundation"),
    (branch_policy, "main"),
    (branch_policy, "architecture/foundation-step-1"),
    (repository_workflow, "pull_request"),
    (repository_workflow, "merge_group"),
    (governance_workflow, "pull_request"),
    (technology_inventory, "KaTeX"),
    (technology_inventory, "Math.js"),
    (technology_inventory, "Rete.js"),
    (technology_inventory, "D3.js"),
    (technology_inventory, "Three.js"),
    (technology_inventory, "Playwright"),
    (technology_inventory, "explicit non-selections"),
    (technology_inventory, "shadcn/ui"),
    (technology_inventory, "CodeMirror 6"),
    (technology_inventory, "Storybook"),
    (technology_inventory, "@testing-library/react"),
    (technology_inventory, "MSW"),
    (technology_inventory, "Comlink"),
]

for content, phrase in required_rules:
    if phrase not in content:
        fail(f"required governance rule missing: {phrase!r}")

if re.search(r"Step 1\.5 Quality Gate|Minimum 95/100 and zero unresolved critical defects", gate):
    fail("permanent QUALITY-GATE.md still contains Step 1.5-specific gate wording")

if "STEP-1-5-QUALITY-REVIEW.md" in gate:
    fail("permanent QUALITY-GATE.md contains a Step 1.5-specific reference")

if "Step 1.5-only" not in current:
    fail("CURRENT-STATE.md is missing its lifecycle-wide scope statement")

status_match = re.search(r"^Status:\s*(\S+)\s*$", current, re.MULTILINE)
if not status_match or status_match.group(1) not in STATUSES:
    fail("CURRENT-STATE.md has an invalid or missing status")

current_stage_match = re.search(r"^Stage:\s*(.+)$", current, re.MULTILINE)
current_branch_match = re.search(r"^Branch:\s*(.+)$", current, re.MULTILINE)
current_checkpoint_match = re.search(r"^Current checkpoint:\s*(.+)$", current, re.MULTILINE)
baseline_match = re.search(r"^Previous accepted baseline:\s*(.+)$", current, re.MULTILINE)
stage_gate_match = re.search(r"^Stage gate:\s*(.+)$", current, re.MULTILINE)

for label, match in [
    ("Stage", current_stage_match),
    ("Branch", current_branch_match),
    ("Current checkpoint", current_checkpoint_match),
    ("Previous accepted baseline", baseline_match),
    ("Stage gate", stage_gate_match),
]:
    if not match or not match.group(1).strip():
        fail(f"CURRENT-STATE.md is missing {label}")

current_checkpoint = current_checkpoint_match.group(1).strip()
baseline = baseline_match.group(1).strip()
if not SHA.fullmatch(current_checkpoint):
    fail("CURRENT-STATE.md current checkpoint is not a 40-character commit SHA")
if not SHA.fullmatch(baseline):
    fail("CURRENT-STATE.md previous accepted baseline is not a 40-character commit SHA")

stage_number = re.search(r"Step (\d+)", current_stage_match.group(1))
if not stage_number:
    fail("CURRENT-STATE.md stage does not contain a numeric step identifier")
stage_review = ROOT / f"docs/governance/STEP-{stage_number.group(1)}-QUALITY-REVIEW.md"
stage_plan = ROOT / f"docs/governance/STEP-{stage_number.group(1)}-PLAN.md"
if not stage_review.is_file():
    fail(f"active stage review is missing: {stage_review.relative_to(ROOT)}")
if not stage_plan.is_file():
    fail(f"active stage plan is missing: {stage_plan.relative_to(ROOT)}")

review = read(stage_review)
plan = read(stage_plan)

review_checkpoint_match = re.search(r"^Current implementation checkpoint:\s*(.+)$", review, re.MULTILINE)
review_baseline_match = re.search(r"^Baseline commit:\s*(.+)$", review, re.MULTILINE)
review_status_match = re.search(r"^Status:\s*(\S+)\s*$", review, re.MULTILINE)
plan_baseline_match = re.search(r"^Baseline:\s*(.+)$", plan, re.MULTILINE)

if not review_checkpoint_match or review_checkpoint_match.group(1).strip() != current_checkpoint:
    fail("CURRENT-STATE.md and active stage review checkpoint references conflict")
if not review_baseline_match or review_baseline_match.group(1).strip() != baseline:
    fail("CURRENT-STATE.md and active stage review baseline references conflict")
if not review_status_match or review_status_match.group(1) != status_match.group(1):
    fail("CURRENT-STATE.md and active stage review statuses conflict")
if not plan_baseline_match or plan_baseline_match.group(1).strip() != baseline:
    fail("CURRENT-STATE.md baseline conflicts with active stage plan baseline")

if status_match.group(1) == "VERIFIED_PASS":
    score_match = re.search(r"^Score:\s*([0-9]+(?:\.[0-9]+)?)\s*$", review, re.MULTILINE)
    critical_match = re.search(r"^Critical defects:\s*(\d+)\s*$", review, re.MULTILINE)
    gate_match = re.search(r"^Gate status:\s*VERIFIED_PASS\s*$", review, re.MULTILINE)
    if not score_match or float(score_match.group(1)) < 95:
        fail("VERIFIED_PASS stage review must record a score >=95")
    if not critical_match or int(critical_match.group(1)) != 0:
        fail("VERIFIED_PASS stage review must record zero Critical defects")
    if not gate_match:
        fail("VERIFIED_PASS stage review must record Gate status: VERIFIED_PASS")

def git_ok(*args: str) -> bool:
    return subprocess.run(["git", *args], cwd=ROOT, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL).returncode == 0

head = subprocess.run(["git", "rev-parse", "HEAD"], cwd=ROOT, capture_output=True, text=True).stdout.strip()
if not SHA.fullmatch(head):
    fail("cannot resolve repository HEAD to a commit SHA")

for label, commit in [("current checkpoint", current_checkpoint), ("previous accepted baseline", baseline)]:
    if not git_ok("cat-file", "-e", f"{commit}^{{commit}}"):
        fail(f"{label} {commit} is not present in repository history")
    if not git_ok("merge-base", "--is-ancestor", commit, "HEAD"):
        fail(f"{label} {commit} is not an ancestor of repository HEAD")

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
    "./BRANCH-PROTECTION.md",
]
for link in expected_links:
    if link not in readme:
        fail(f"governance index missing link: {link}")

if "paths:" in governance_workflow:
    fail("governance workflow must not use path filters; required governance checks must run on code-only pull requests")

for required in ["actions/checkout@v4", "fetch-depth: 0", "name: Governance validation", "pull_request:", "merge_group:"]:
    if required not in governance_workflow:
        fail(f"governance workflow missing required control: {required}")

for required in ["actions/checkout@v4", "fetch-depth: 0", "npm ci", "npm run build", "name: Repository validation", "pull_request:", "merge_group:"]:
    if required not in repository_workflow:
        fail(f"repository validation workflow missing required control: {required}")

print("Governance validation passed.")
print(f"Checked {len(REQUIRED_FILES)} required governance/decision/enforcement files.")
print("Validated stage/current-state consistency, commit ancestry, gate semantics, workflow triggers, and repository enforcement policy.")
