# Step 2 Security Baseline

User-authored mathematical expressions are parsed into a constrained AST. No eval, Function constructor, dynamic import, DOM access, or arbitrary JavaScript execution is permitted in the expression path.

Expression input and token count are bounded. Unsupported syntax and invalid numeric results fail explicitly.

Dependency installation and lockfile state remain release/security evidence items.
