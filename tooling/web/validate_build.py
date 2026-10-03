from pathlib import Path
import sys
index=Path(__file__).resolve().parents[2]/"app/dist/index.html"
if not index.exists(): print("Built application index.html is missing");sys.exit(1)
html=index.read_text(encoding="utf-8")
if 'id="root"' not in html or "/assets/" not in html: print("Built application is incomplete");sys.exit(1)
print("Built application smoke validation passed.")