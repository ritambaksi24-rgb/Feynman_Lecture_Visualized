from pathlib import Path
import json,sys
ROOT=Path(__file__).resolve().parents[2]; errors=[]
for p in (ROOT/"schemas").glob("*.json"):
    try: d=json.loads(p.read_text(encoding="utf-8"))
    except Exception as e: errors.append(f"{p}: invalid JSON: {e}");continue
    if d.get("$schema")!="https://json-schema.org/draft/2020-12/schema": errors.append(f"{p}: must declare JSON Schema Draft 2020-12")
    if "$id" not in d: errors.append(f"{p}: missing $id")
    if d.get("type")!="object": errors.append(f"{p}: root type must be object")
if errors: print("\n".join(errors));sys.exit(1)
print("Contract schema validation passed.")
