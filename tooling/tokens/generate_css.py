from pathlib import Path
import json
import re

ROOT=Path(__file__).resolve().parents[2]
TOKEN_ROOT=ROOT/"packages/design-system/tokens"
OUT=ROOT/"packages/design-system/generated/tokens.css"
paths=list(TOKEN_ROOT.rglob("*.json"))
trees={path:json.loads(path.read_text(encoding="utf-8")) for path in paths}

def kebab(value:str)->str:
    value=re.sub(r"([a-z0-9])([A-Z])",r"\1-\2",value)
    value=re.sub(r"[^A-Za-z0-9]+","-",value)
    return value.strip("-").lower()

def find_ref(ref):
    wanted=ref[1:-1].split(".")
    for tree in trees.values():
        node=tree
        try:
            for part in wanted: node=node[part]
            return node["$value"]
        except Exception:
            pass
    raise ValueError(f"Unresolved token reference: {ref}")

def resolve(value):
    if isinstance(value,str) and value.startswith("{") and value.endswith("}"):
        return resolve(find_ref(value))
    if isinstance(value,dict) and "$value" in value:
        return resolve(value["$value"])
    if isinstance(value,dict) and "colorSpace" in value:
        rgb=[round(float(x)*255) for x in value["components"]]
        alpha=float(value.get("alpha",1))
        return "#{:02x}{:02x}{:02x}".format(*rgb) if alpha>=1 else f"rgba({rgb[0]}, {rgb[1]}, {rgb[2]}, {alpha:g})"
    if isinstance(value,dict) and "value" in value and "unit" in value:
        return f"{value['value']:g}{value['unit']}"
    if isinstance(value,dict) and all(k in value for k in ("color","offsetX","offsetY","blur","spread")):
        base=f"{resolve(value['offsetX'])} {resolve(value['offsetY'])} {resolve(value['blur'])} {resolve(value['spread'])} {resolve(value['color'])}"
        return f"inset {base}" if value.get("inset") else base
    if isinstance(value,dict) and all(k in value for k in ("color","width","style")):
        return f"{resolve(value['width'])} {value['style']} {resolve(value['color'])}"
    if isinstance(value,list):
        return ", ".join(resolve(v) for v in value)
    return str(value)

def flatten(node,path=()):
    if not isinstance(node,dict):
        return
    if "$value" in node:
        value=node["$value"]
        if isinstance(value,dict) and "colorSpace" not in value and "value" not in value and not set(("color","width","style")).issubset(value) and not set(("color","offsetX","offsetY","blur","spread")).issubset(value):
            for key,child in value.items():
                yield from flatten({"$value":child},path+(key,))
        else:
            yield path,value
        return
    for key,value in node.items():
        if not key.startswith("$"):
            yield from flatten(value,path+(key,))

blocks=[]
for path in paths:
    data=trees[path]
    selector=":root[data-theme='dark']" if path.name=="color.dark.json" else ":root"
    lines=[selector+" {"]
    for token_path,value in flatten(data):
        if token_path:
            variable="--"+"-".join(kebab(part) for part in token_path)
            lines.append(f"  {variable}: {resolve(value)};")
    lines.append("}")
    blocks.append("\n".join(lines))

OUT.parent.mkdir(parents=True,exist_ok=True)
OUT.write_text("\n\n".join(blocks)+"\n",encoding="utf-8")
print(f"Generated {OUT}")