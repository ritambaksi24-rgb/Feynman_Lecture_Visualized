# 23 — Computation and Execution Architecture

## Execution targets

Scientific computation may run in:

- main-thread TypeScript for trivial work;
- Web Workers for expensive CPU work;
- WebAssembly for suitable algorithms;
- GPU compute/rendering paths where justified;
- server-side infrastructure where a real service exists;
- offline Python tooling for research/authoring.

Selection is based on correctness, responsiveness, reproducibility, data volume, portability, maintenance, and security.

Workers exchange serializable, versioned messages and never leak React or renderer objects.

Different execution backends document meaningful numerical differences and accepted tolerance.

Random sources and seeds are explicit inputs when reproducibility matters.

Static/expensive assets may be precomputed when runtime computation provides no educational benefit; generated assets remain tied to source/model versions.

Python is appropriate for research, validation, data preparation, and specialized offline visualization.

VisPy is optional scientific validation/authoring tooling, not a browser requirement.

Manim is an optional offline animation authoring/rendering pipeline.

A compute implementation follows a contract with inputs, parameters, execution, progress where meaningful, cancellation, result, and error.

Resource limits bound memory, time, recursion, expression complexity, generated rows, and simulation size.

All alternate execution paths meet the same scientific validation criteria within documented tolerance.
