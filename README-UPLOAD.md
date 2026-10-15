# Hatty Build Lab — GitHub Pages release (experimental)

Upload **all top-level files and the complete `data/` folder** to the root of `itshatty/Hatty-Build-Lab`, replacing files with the same names. Keep `index.html` in the repository root. GitHub Pages should publish from main / root. On iPhone, GitHub's web uploader can be awkward with folders; extracting the ZIP in Files and uploading via a desktop browser is easiest. Do not upload the ZIP itself as one repository file.

## Working now
- Legal body combinations (position, height, weight, wingspan).
- 21 physical attribute ceilings from August 2026 tuning (21/21 matched the published measured reference body).
- Height-specific linked-attribute minimum propagation (except unresolved zero-delta rules).
- 15-archetype nonlinear OVR calculator.
- Experimental target-based search across legal weights and wingspans, with a greedy fill of unused OVR budget.
- All 21 calculated BASE attributes and physical ceilings displayed.

## NOT implemented or validated
- Cap-breaker allocation is **not** used by the new generator. All target ratings are treated as BASE builder ratings, even if the UI displays cap-breaker priority selectors.
- Full game legality cannot be guaranteed: zero-delta linked rules are unresolved, and the August 22 tuning may have changed.
- Missing Standing Dunk height multipliers at 5'9–6'0 cause those heights to return unmeasured rather than fabricate a value.
- Search is a heuristic; not a proof of optimality or that every legal build has been found.
- The legacy V4.3 exact-search panel still requires its own separate rule bundle and may show 'blocked'; use the **NEW · Calculated 99 OVR base-build search** button instead.

## Validation
`node test-release.js` tests the 21 measured physical caps, a target candidate, OVR <=99 and final caps. Earlier OVR model parity tests are separate. Test outputs are **not in-game confirmation**.

## Best in-game test
Set SG / 6'5", select manual weight 233 lb and wingspan 6'10", choose 2–4 modest targets, click **Generate calculated base builds**, and compare the full resulting 21 base ratings against the NBA 2K27 builder. Send screenshots of any discrepancy.
