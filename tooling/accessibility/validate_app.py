from pathlib import Path
import re,sys
ROOT=Path(__file__).resolve().parents[2]
html=(ROOT/"app/index.html").read_text(encoding="utf-8")
tsx=(ROOT/"app/src/App.tsx").read_text(encoding="utf-8")
css=(ROOT/"app/src/styles.css").read_text(encoding="utf-8")
errors=[]
if not re.search(r'<html[^>]*lang="[^"]+"',html): errors.append("html lang is required")
if "<title>" not in html: errors.append("document title is required")
if not re.search(r'<input[^>]*aria-label=',tsx): errors.append("range input needs aria-label")
if 'role="alert"' not in tsx: errors.append("error state needs alert role")
if 'role="status"' not in tsx: errors.append("progress state needs status role")
if "prefers-reduced-motion" not in css: errors.append("reduced-motion handling is required")
if errors: print("\n".join(errors));sys.exit(1)
print("Application accessibility baseline validation passed.")