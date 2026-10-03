from pathlib import Path
import re
import sys

ROOT=Path(__file__).resolve().parents[2]
rules={
  "contracts":set(),
  "scientific-domain":{"@feynman/contracts"},
  "computation":{"@feynman/contracts","@feynman/scientific-domain"},
  "exploration":{"@feynman/contracts"},
  "visualization":{"@feynman/contracts"},
  "design-system":set()
}
errors=[]
for package,allowed in rules.items():
  source_root=ROOT/"packages"/package/"src"
  if not source_root.exists(): continue
  for path in source_root.rglob("*"):
    if path.suffix not in {".ts",".tsx"}: continue
    text=path.read_text(encoding="utf-8")
    imports=set(re.findall(r'(?:from|import\()\s*["\'](@feynman/[^"\']+)["\']',text))
    for spec in sorted(imports):
      if spec not in allowed:
        errors.append(f"{path.relative_to(ROOT)}: forbidden dependency {spec}")
if errors:
  print("\n".join(errors));sys.exit(1)
print("Architecture boundary validation passed.")