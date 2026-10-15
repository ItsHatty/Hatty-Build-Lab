# Hatty Build Lab V4.2

## What works
- Loads recorded position/height legal body measurement ranges from `data/legal_bodies.json`.
- Independent Auto/Manual weight and wingspan controls.
- Enumerates legal physical combinations at selected height, with cautious feasibility filtering when an external cap dataset is supplied.
- 21 attributes with minimum/exact targets, base/final selection, and cap breaker strategies (Auto, Prioritize, None, Require 1–5).
- Local save/load and explicit non-verified planning preview.

## What is NOT implemented
- Accurate body-dependent attribute ceilings (not present in the bundled source data).
- NBA 2K27 overall-99 allocation / linked attribute engine.
- Validated build-dependent cap breaker gain function.
- Badge/animation requirement engine.
- Certified playable build generation.

Do not use planning output to spend VC. No proprietary third-party source code is included.

## Deployment
Upload `index.html`, `manifest.webmanifest`, and `data/legal_bodies.json` preserving folder paths to your GitHub Pages repository.
