# 25 — Performance and Rendering Budgets

Performance is an architectural property of interactive scientific software.

Each production exploration defines appropriate budgets for initial load, interaction latency, animation/frame performance when required, computation time, memory, data volume, and asset size. Exact thresholds are established empirically during implementation.

Render loops avoid repeated scientific recomputation, unnecessary allocations, object churn, and high-frequency DOM state for large scientific data.

Computation frequency may differ from rendering frequency when scientific state is unchanged.

Large visualizations may use instancing, LOD, sampling, progressive rendering, workers, GPU buffers, tiling, or precomputation where scientifically honest.

Million-scale data must not be represented as naive per-object React state.

Scientific arrays, workers, and renderer resources have explicit disposal paths.

Benchmarks use representative scientific workloads.

Performance optimization must not remove essential accessible information.

Scientific correctness without usable performance is incomplete; performance without scientific correctness is also incomplete.
