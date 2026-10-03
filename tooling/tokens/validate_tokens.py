from pathlib import Path
import json,re,sys

ROOT=Path(__file__).resolve().parents[2]
TOKEN_ROOT=ROOT/"packages/design-system/tokens"
REF_RE=re.compile(r"^\{[-A-Za-z0-9_.]+\}$")
ERRORS=[]

def is_ref(v): return isinstance(v,str) and bool(REF_RE.fullmatch(v))
def is_color(v):
    return isinstance(v,dict) and v.get("colorSpace")=="srgb" and isinstance(v.get("components"),list) and len(v["components"])==3 and all(isinstance(x,(int,float)) and 0<=x<=1 for x in v["components"]) and 0<=v.get("alpha",1)<=1
def is_dimension(v): return isinstance(v,dict) and isinstance(v.get("value"),(int,float)) and v.get("unit") in {"px","rem"}

def walk(node,inherited=None,path=()):
    if not isinstance(node,dict): return
    typ=node.get("$type",inherited)
    if "$value" in node:
        value=node["$value"]
        if typ is None: ERRORS.append(f"{'.'.join(path)}: missing $type")
        elif is_ref(value): pass
        elif typ=="color" and not is_color(value): ERRORS.append(f"{'.'.join(path)}: invalid color")
        elif typ=="dimension" and not is_dimension(value): ERRORS.append(f"{'.'.join(path)}: invalid dimension")
        elif typ=="number" and not isinstance(value,(int,float)): ERRORS.append(f"{'.'.join(path)}: invalid number")
        elif typ=="fontWeight" and not isinstance(value,(int,str)): ERRORS.append(f"{'.'.join(path)}: invalid fontWeight")
        elif typ=="fontFamily" and not isinstance(value,(str,list)): ERRORS.append(f"{'.'.join(path)}: invalid fontFamily")
        elif typ=="duration" and not isinstance(value,str): ERRORS.append(f"{'.'.join(path)}: invalid duration")
        elif typ=="cubicBezier" and not(isinstance(value,list) and len(value)==4 and all(isinstance(x,(int,float)) for x in value)): ERRORS.append(f"{'.'.join(path)}: invalid cubicBezier")
        elif typ in {"border","shadow","typography"} and not isinstance(value,(dict,str)): ERRORS.append(f"{'.'.join(path)}: invalid {typ}")
        return
    for key,value in node.items():
        if not key.startswith("$"): walk(value,typ,path+(key,))

files=list(TOKEN_ROOT.rglob("*.json"))
for path in files:
    try:
        data=json.loads(path.read_text(encoding="utf-8"))
        if data.get("$schema")!="https://www.designtokens.org/schemas/2025.10/format.json": ERRORS.append(f"{path.relative_to(ROOT)}: incorrect DTCG schema")
        walk(data)
    except Exception as exc: ERRORS.append(f"{path.relative_to(ROOT)}: {exc}")

tokens=set()
def collect(node,path=()):
    if not isinstance(node,dict): return
    if "$value" in node:
        tokens.add(".".join(path)); return
    for key,value in node.items():
        if not key.startswith("$"): collect(value,path+(key,))
for path in files: collect(json.loads(path.read_text(encoding="utf-8")))

for path in files:
    data=json.loads(path.read_text(encoding="utf-8"))
    stack=[data]
    while stack:
        node=stack.pop()
        if isinstance(node,dict):
            value=node.get("$value")
            if is_ref(value) and value[1:-1] not in tokens: ERRORS.append(f"{path.relative_to(ROOT)}: unresolved reference {value}")
            for value in node.values():
                if isinstance(value,(dict,list)): stack.append(value)
        elif isinstance(node,list):
            stack.extend(node)

for path in list((ROOT/"app/src").rglob("*"))+list((ROOT/"packages/design-system/src").rglob("*")):
    if path.is_file() and path.suffix in {".ts",".tsx",".css"} and re.search(r"#[0-9a-fA-F]{3,8}\b",path.read_text(encoding="utf-8")):
        ERRORS.append(f"{path.relative_to(ROOT)}: raw hex color outside token source")

if ERRORS:
    print("\n".join(ERRORS));sys.exit(1)
print(f"DTCG token validation passed ({len(files)} files).")