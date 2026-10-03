# Step 2 Design System Baseline

The repository token source is DTCG 2025.10 JSON. Primitive colors use structured sRGB values; dimensions use typed value objects; shadows use the DTCG composite shadow structure. Semantic tokens reference primitives.

Light and Dark are explicit modes. Base UI supplies unstyled accessible interaction primitives; Feynman-owned components provide application identity.

CSS variables are generated from token source. Generated CSS is derived output and is never a second source of truth.

The DTCG 2025.10 format defines typed color and dimension values and a composite shadow type.