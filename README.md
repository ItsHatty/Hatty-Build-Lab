# Hatty Build Lab V4 — research foundation

## What works
- All 21 attributes organized by six expandable disciplines.
- Required attribute checkboxes, minimum/exact modes, and base/final phase.
- Position/height/weight/wingspan selectors populated from imported legal-body data.
- Current/projected breaker comparison, complete 21-attribute planning tables, and local saved preferences.
- Optional imported full-body caps, breaker sequences, and badge/animation threshold matching.

## What is NOT implemented
This release **cannot produce validated playable 99-OVR builds**. The full OVR pricing solver, linked attributes, exhaustive body search, and reliable build-specific cap-breaker oracle are not integrated. A result with unselected attributes at 25 is a planning placeholder, NOT an optimized build. Do not spend VC based on these results.

## Import data
Use **Rules & data → Import rules JSON** to import `bodies/legal_bodies.json` from https://github.com/lightmatmul/nba2k27-builder-dataset . This unlocks legal body selectors. The dataset's other files cannot be dropped into this app indiscriminately: they need to be transformed and combined into a verified full-body rules bundle.

Custom optional JSON bundle shape:
```json
{
  "legal_bodies": [ {"position":"PG","heights":[{"height_inches":75,"min_weight_lb":170,"max_weight_lb":230,"min_wingspan_inches":75,"max_wingspan_inches":81}]} ],
  "caps": {"PG:75:198:78":{"driving_dunk":90}},
  "cap_breaker_sequences": {"PG:75:198:78":{"driving_dunk":{"83":[87,90,92,93,94]}}},
  "thresholds": [{"name":"Example animation","tier":"","requirements":[{"attribute":"Driving Dunk","minimum":89}]}]
}
```
The example numeric values are **synthetic schema examples only**, NOT NBA 2K27 facts. Cap breaker sequence entries must represent the final rating after breaker 1, 2, 3, 4, 5 for the **exact full starting build**, not just the body; this simplistic bundle does not encode the full build and is insufficient for exact optimization. For real accuracy, a new data model and solver are required.

## Publishing
Upload `index.html` and `manifest.webmanifest` to the repository root. `README.md` is optional. GitHub Pages is public; browser local storage is not synchronized and can be lost if Safari clears site data.

## Sources
- https://github.com/lightmatmul/nba2k27-builder-dataset
- https://github.com/souledxxout/NBA2K27-MyPlayer-Build-Lab

Not affiliated with 2K. Respect source licenses and terms.
