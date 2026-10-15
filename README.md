# Hatty Build Lab — Fix Pack (based on V4.3)

## Changes
- Removed Stamina from the attribute selector and generated planning table.
- Added a single primary **Optimize Build** button, wired to the existing strict verified optimizer.
- Moved unverified planning/comparison controls under an Advanced disclosure.
- Preserved existing saved settings and existing verified-engine source.

## Important: NOT A VERIFIED PLAYABLE BUILD GENERATOR YET
This fixes the interface and incorrect Stamina attribute, **not** the missing game data. The included legal_bodies.json only contains physical measurement rules. Actual NBA 2K27 per-body attribute caps, full 99 OVR costs, legal linked-attribute vectors, and cap-breaker progression are still missing. The optimizer will report that accurately instead of inventing results.

## Upload to GitHub
Replace the root `index.html` and `optimizer-v43.js`. Keep `data/legal_bodies.json` under `data/`. The manifest is unchanged. You can also upload all included files while preserving paths. On iPhone refresh the website after GitHub Pages publishes.
