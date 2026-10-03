# Copyright and Provenance

## 1. Purpose

This project uses *The Feynman Lectures on Physics* as its conceptual source of truth while creating an original visualization and explanatory layer.

This document is a project policy, not legal advice.

## 2. Source relationship

The official Feynman Lectures website is the source reference for chapter and section structure. The project should link to the relevant source rather than treating the source website as a content repository to be mirrored.

Reference:
https://www.feynmanlectures.caltech.edu/

## 3. Public-content rule

Unless the project has a clear right or permission to reproduce material, the public repository and application should not redistribute:

- complete chapters or sections of the Feynman text;
- scans or copies of book pages;
- original Feynman figures or other copyrighted site assets;
- a scraped corpus of the source work.

Short quotations may be used only where appropriate and legally permissible, with attribution and source linkage.

## 4. Original project content

The project should prefer:

- original explanations;
- original diagrams;
- original simulations;
- original animations;
- independently derived scientific models;
- properly licensed external datasets/assets.

## 5. Provenance record

Each content unit should be able to identify its source relationship, for example:

~~~json
{
  "source": {
    "work": "The Feynman Lectures on Physics",
    "volume": "I",
    "chapter": "1",
    "section": "1-2",
    "url": "https://www.feynmanlectures.caltech.edu/I_01.html"
  }
}
~~~

The source relationship is metadata; it is not permission to reproduce the source material.

## 6. Asset provenance

Every shipped image, animation, dataset, font, icon, and third-party artifact must have a documented provenance/licensing status appropriate to the repository's intended distribution.

## 7. Rights review gate

A content item with substantial third-party material does not enter the public release set until its rights status is documented and, where needed, permission is obtained.

## 8. Publication review

Before public release, review:

- source text;
- figures/images;
- animation assets;
- datasets;
- fonts/icons;
- dependencies and their licenses;
- generated artifacts.

## 9. Change rule

If a future requirement calls for substantial reproduction of Feynman source material, stop publication of that material and perform a dedicated rights review before implementation.

## 10. Attribution

The project should clearly attribute *The Feynman Lectures on Physics* as the conceptual source while distinguishing the project's original explanatory and visualization work.
