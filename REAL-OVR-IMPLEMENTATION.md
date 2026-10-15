# NBA 2K27 real OVR formula — first independently reproduced milestone

Source: user-uploaded `nba2k27-builder-dataset-main.zip`, captured 2026-08-22, api_version 202750199, live_tuning_version 993560759169487438.

`verify_real_ovr.py` implements the dataset's 15-archetype, nonlinear, height-weighted OVR pricing formula, using the shipped named tuning table. The script was actually executed against all 256 independent full-attribute mixed-vector records: **256/256 winning archetypes match; worst absolute OVR difference 0.000025**. This is a real dataset parity test, not a synthetic test.

Run: `python verify_real_ovr.py` from this directory. It reads `reference_dataset/tuning/progression_attributes.txt` and `reference_dataset/overall/mixed_vectors.json`.

## Remaining before website is a working build optimizer

1. Port verified OVR calculator into browser JavaScript and connect it to search; current `optimizer-v43.js` still expects an old synthetic cost/budget model and must NOT be represented as integrated.
2. Implement height/weight/wingspan ceilings with interpolation and missing Standing Dunk height data handling.
3. Implement height-specific linked constraints, but treat MaxDelta=0 as unresolved, per dataset.
4. Determine cap breaker sequence by body and base rating; validate against the user's two actual builds. Dataset breaker probes were recorded at a single reference body.
5. Optimize efficiently over legal bodies and all 21 attributes; verify actual builds in the live game and tuning patch drift.

**No GitHub deployment yet.**
