# Hatty Build Lab — Badge Research Integration (experimental)

This is an incremental website update built on the tether-integration release.

## Added
- Full 53-badge tier requirements, height eligibility, height-specific token costs, and 31,500 token-contribution records from the public NBA 2K27 builder dataset (2026-08-22 capture).
- Badge eligibility and token potential shown alongside each calculated candidate. Data loads after the core build results; a failure to load it does not prevent base calculations.
- `cap-breaker-planner.js` strict utility, demonstrated against the user's measured 83→99 (+5/+4/+3/+2/+2) sequence. The utility **is not wired into optimization**: it must never extrapolate this one sequence to a different body or build.
- `verified-builds.js` records the user's first 99-OVR in-game validated SG body and attribute spread (Post Control 80).
- `test-research.js` with seven smoke tests (run `node test-research.js`).

## Still not implemented
- Cap-breaker-aware candidate search or allocation, including specialization restrictions.
- In-game 99 OVR affordability correction: calculated OVR 98.993 previously displayed 98 in-game and required one additional Post Control point. This discrepancy remains unresolved.
- Optimal badge loadout: slot allocation and badge-token spend optimizer.
- Animation and takeover eligibility and ranking.
- Generalized attribute tether completeness across all bodies.

## Installation
Upload all files from the extracted ZIP to the GitHub Pages repository root, retaining `data/`. Existing matching files are replaced. Do not upload the ZIP as one file. This release is experimental; don't spend VC without checking in-game.

Data provenance: https://github.com/lightmatmul/nba2k27-builder-dataset
