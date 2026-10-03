# Step 2 Design System Baseline

The repository token source uses the DTCG 2025.10 format. Primitive colors use structured sRGB values; dimensions use typed value objects; shadow and typography use composite token values. urlDTCG 2025.10 format specificationhttps://www.designtokens.org/TR/2025.10/format/

The foundation includes color, spacing, sizing, radius, opacity, shadow, font, typography, easing, motion, z-index, breakpoints, aspect ratio, stroke width, and border primitives, plus semantic color, dimension, and typography roles.

Light and Dark are explicit semantic modes. Base UI provides unstyled accessible interaction primitives; Feynman-owned components provide project identity.

Generated CSS is derived output. DTCG JSON remains the source of truth. Component CSS is owned by the design-system package and consumed by application integration, avoiding a package-build/runtime style mismatch.