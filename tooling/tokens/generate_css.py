from pathlib import Path
import json
import re

ROOT = Path(__file__).resolve().parents[2]
TOK = ROOT / "packages/design-system/tokens"
OUT = ROOT / "packages/design-system/generated/tokens.css"

primitive_files = ["color.json", "spacing.json", "radius.json", "opacity.json", "shadow.json"]
primitive = {name: json.loads((TOK / "primitives" / name).read_text(encoding="utf-8")) for name in primitive_files}

def lookup(ref):
    parts = ref[1:-1].split(".")
    root_name = {"color":"color.json","spacing":"spacing.json","radius":"radius.json","opacity":"opacity.json","shadow":"shadow.json"}[parts[1]]
    node = primitive[root_name]
    for part in parts:
        node = node[part]
    return node["$value"]

def resolve(value):
    if isinstance(value, str) and value.startswith("{") and value.endswith("}"):
        return resolve(lookup(value))
    if isinstance(value, dict) and "colorSpace" in value:
        rgb = [round(float(x) * 255) for x in value["components"]]
        alpha = float(value.get("alpha", 1))
        if alpha >= 1:
            return "#{:02x}{:02x}{:02x}".format(*rgb)
        return "rgba({}, {}, {}, {})".format(rgb[0], rgb[1], rgb[2], alpha)
    if isinstance(value, dict) and "value" in value and "unit" in value:
        return "{}{}".format(value["value"], value["unit"])
    if isinstance(value, dict) and all(k in value for k in ("color","offsetX","offsetY","blur","spread")):
        return "{} {} {} {} {}".format(resolve(value["offsetX"]), resolve(value["offsetY"]), resolve(value["blur"]), resolve(value["spread"]), resolve(value["color"]))
    return str(value)

def flatten(node, path=()):
    if isinstance(node, dict):
        if "$value" in node:
            yield path, node["$value"]
            return
        for key, value in node.items():
            if not key.startswith("$"):
                yield from flatten(value, path + (key,))

blocks = []
for filename, selector in [("color.light.json", ":root"), ("color.dark.json", ":root[data-theme='dark']"), ("dimension.json", ":root")]:
    data = json.loads((TOK / "semantic" / filename).read_text(encoding="utf-8"))
    lines = [selector + " {"]
    for path, value in flatten(data):
        var = "--" + "-".join(re.sub(r"[^A-Za-z0-9]+", "-", part).strip("-") for part in path)
        lines.append("  " + var + ": " + resolve(value) + ";")
    lines.append("}")
    blocks.append("\n".join(lines))

for filename in ["spacing.json","radius.json","opacity.json","shadow.json"]:
    data = primitive[filename]
    lines = [":root {"]
    for path, value in flatten(data):
        var = "--" + "-".join(re.sub(r"[^A-Za-z0-9]+", "-", part).strip("-") for part in path)
        lines.append("  " + var + ": " + resolve(value) + ";")
    lines.append("}")
    blocks.append("\n".join(lines))

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text("\n\n".join(blocks) + "\n", encoding="utf-8")
print("Generated " + str(OUT))
