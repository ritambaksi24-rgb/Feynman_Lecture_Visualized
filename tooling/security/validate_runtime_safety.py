from pathlib import Path
import re,sys
ROOT=Path(__file__).resolve().parents[2]
patterns=[r"\beval\s*\(",r"\bnew\s+Function\s*\(",r"\bFunction\s*\("]
errors=[]
for p in ROOT.glob("packages/*/src/**/*.ts"):
    text=p.read_text(encoding="utf-8")
    for pat in patterns:
        if re.search(pat,text): errors.append(f"{p.relative_to(ROOT)}: forbidden dynamic execution pattern {pat}")
if errors: print("\n".join(errors));sys.exit(1)
print("Runtime safety validation passed.")
