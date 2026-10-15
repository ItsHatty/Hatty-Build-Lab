# Hatty Build Lab V4.3 — Strict optimization engine foundation

## New in V4.3
- New independent `optimizer-v43.js` engine with exhaustive legal body search.
- Strict rule validation: refuses to certify builds unless complete body-dependent attribute caps, cumulative costs, cap-breaker sequences, and explicitly legal linked-attribute vectors are supplied.
- Exact dynamic programming for cap-breaker allocations, respecting target minima/exact values, prohibited and required breakers, and available breaker count.
- Displays up to five ranked matches with all 22 attributes, base, breakers, final and total verified supplied budget cost.
- Downloadable rules JSON schema; no fabricated game formulas or false playable recommendations.

## Important limitations
- **This package does not include verified NBA 2K27 attribute ceilings, overall pricing, legal attribute vectors, or cap breaker sequences.** Consequently the new engine remains blocked until that data is supplied. V4.3 is not yet a complete playable build generator.
- The supplied rules bundle must use a consistent cumulative cost scale; the engine assumes each attribute's cumulative cost is additive, with a shared budget.
- The linked-attribute validator uses explicit legal base vectors. This is correct for vectors provided, but cannot synthesize unseen legal vectors. Completeness of optimization depends on the coverage of supplied vectors.
- `Prioritize` currently acts as a tie-break preference after budget use, not a guaranteed spend. It is not an independently validated 2K game mechanic.
- Results validated against user-supplied data are **not independently game-verified by Hatty Build Lab**. Confirm in the NBA 2K builder before spending VC.

## Deploy on GitHub Pages
Upload/replace `index.html`, `optimizer-v43.js`, and `manifest.webmanifest` at repository root, and keep `data/legal_bodies.json` at the same relative path. Uploading `optimizer-v43.js` is essential. Existing saved targets use the same local storage key as V4.2.
