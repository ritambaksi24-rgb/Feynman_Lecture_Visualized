from pathlib import Path
import re,sys
ROOT=Path(__file__).resolve().parents[2]
rules=[
(re.compile(r"packages/scientific-domain/.*"),re.compile(r"@feynman/(design-system|visualization|app)")),
(re.compile(r"packages/computation/.*"),re.compile(r"@feynman/(design-system|visualization|app)")),
(re.compile(r"packages/exploration/.*"),re.compile(r"@feynman/(design-system|visualization|app)"))]
errors=[]
for p in ROOT.glob("packages/*/src/**/*.*"):
    if p.suffix not in {".ts",".tsx"}: continue
    rel=p.relative_to(ROOT).as_posix(); src=p.read_text(encoding="utf-8")
    for pattern,forbidden in rules:
        if pattern.fullmatch(rel):
            for spec in forbidden.findall(src): errors.append(f"{rel}: forbidden dependency {spec}")
if errors: print("\n".join(errors));sys.exit(1)
print("Architecture boundary validation passed.")
