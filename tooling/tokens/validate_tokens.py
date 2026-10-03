from pathlib import Path
import json
import re
import sys

ROOT = Path(__file__).resolve().parents[2]
TOKEN_ROOT = ROOT / "packages/design-system/tokens"
ERRORS = []
REF_RE = re.compile(r"^\{[-A-Za-z0-9_.]+\}$")

def is_ref(value):
    return isinstance(value, str) and bool(REF_RE.fullmatch(value))

def is_color(value):
    return (
        isinstance(value, dict)
        and value.get("colorSpace") == "srgb"
        and isinstance(value.get("components"), list)
        and len(value["components"]) == 3
        and all(isinstance(x, (int, float)) and 0 <= x <= 1 for x in value["components"])
        and isinstance(value.get("alpha"), (int, float))
        and 0 <= value["alpha"] <= 1
    )

def is_dimension(value):
    return isinstance(value, dict) and isinstance(value.get("value"), (int, float)) and value.get("unit") in {"px", "rem"}

def walk(node, inherited_type=None, path=()):
    if not isinstance(node, dict):
        return
    token_type = node.get("$type", inherited_type)
    if "$value" in node:
        value = node["$value"]
        if token_type is None:
            ERRORS.append("{}: no resolvable $type".format(".".join(path)))
        elif is_ref(value):
            pass
        elif token_type == "color" and not is_color(value):
            ERRORS.append("{}: invalid DTCG color value".format(".".join(path)))
        elif token_type == "dimension" and not is_dimension(value):
            ERRORS.append("{}: invalid DTCG dimension value".format(".".join(path)))
        elif token_type == "number" and not isinstance(value, (int, float)):
            ERRORS.append("{}: invalid number value".format(".".join(path)))
        elif token_type == "shadow":
            shadows = value if isinstance(value, list) else [value]
            for shadow in shadows:
                if not isinstance(shadow, dict):
                    ERRORS.append("{}: invalid shadow value".format(".".join(path)))
                    continue
                for key in ("color", "offsetX", "offsetY", "blur", "spread"):
                    if key not in shadow:
                        ERRORS.append("{}: shadow missing {}".format(".".join(path), key))
                if "color" in shadow and not (is_ref(shadow["color"]) or is_color(shadow["color"])):
                    ERRORS.append("{}: invalid shadow color".format(".".join(path)))
                for key in ("offsetX", "offsetY", "blur", "spread"):
                    if key in shadow and not (is_ref(shadow[key]) or is_dimension(shadow[key])):
                        ERRORS.append("{}: invalid shadow {}".format(".".join(path), key))
        return
    for key, value in node.items():
        if not key.startswith("$"):
            walk(value, token_type, path + (key,))

for file in TOKEN_ROOT.rglob("*.json"):
    try:
        data = json.loads(file.read_text(encoding="utf-8"))
        if data.get("$schema") != "https://www.designtokens.org/schemas/2025.10/format.json":
            ERRORS.append("{}: incorrect DTCG 2025.10 schema".format(file.relative_to(ROOT)))
        walk(data)
    except Exception as exc:
        ERRORS.append("{}: {}".format(file.relative_to(ROOT), exc))

for path in list((ROOT / "app/src").rglob("*")) + list((ROOT / "packages/design-system/src").rglob("*")):
    if path.is_file() and path.suffix in {".ts", ".tsx", ".css"}:
        if re.search(r"#[0-9a-fA-F]{3,8}\b", path.read_text(encoding="utf-8")):
            ERRORS.append("{}: raw hex color outside token sources".format(path.relative_to(ROOT)))

if ERRORS:
    print("\n".join(ERRORS))
    sys.exit(1)
print("DTCG token validation passed.")
