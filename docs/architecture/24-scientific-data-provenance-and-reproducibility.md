# 24 — Scientific Data, Provenance and Reproducibility

## Data classes

- analytical data derived from equations;
- numerical simulation data;
- measured/curated datasets;
- generated visualization assets;
- documented educational approximations.

External dataset manifests record ID, version, source, license, retrieval date, units, schema, transformations, quality notes, and citation.

Derived datasets record parent source and deterministic transformation steps.

A scientific result is reconstructible, where applicable, from content/model/exploration versions, dataset version, parameters, units, algorithm, numerical settings, and random seed.

Classify results as exactly reproducible, reproducible within numerical tolerance, statistically reproducible, or illustrative approximation.

Approximations are explicitly labelled and are not presented as measured or exact.

Raw source datasets are separated from transformed data. Large generated data may live outside Git while the repository stores manifests and deterministic generation instructions.

User experiments remain distinct from public scientific datasets.
