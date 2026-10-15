# Cap-breaker planning milestone

## New working features
- Final-phase attribute targets now search possible base ratings and allocate cap breakers, up to five per attribute and within the projected breaker budget.
- Uses native NBA 2K27 reference-body measurements in `data/cap-breaker-gains.json` (isolated and near-caps scenarios), not a fabricated constant +5 progression.
- Feeds resulting base targets into the existing legal-body, linked-attribute and OVR calculator; displays base attributes, breaker counts, predicted ranges, and badge eligibility.
- Base-phase selection keeps targets as base ratings, without cap breakers.
- `No breakers` and `Require N` strategies are recognized. Priority is handled through estimated builder-budget savings rather than a guaranteed global optimum.

## Critical limitations
- Reference-body breaker gains are **not proven for other bodies**. The tool labels them as estimates; it cannot certify that any breaker plan works in-game.
- Badge analysis displays base badge eligibility; final badge gains after cap breakers are not yet recalculated.
- The greedy fill algorithm is not a global unlock-aware optimizer. It can leave a build slightly below the in-game 99 threshold (as observed in the validated SG build).
- Animation, takeovers and equipped badge loadout are not yet integrated. No claims otherwise.
- The measured Speed With Ball→Speed correction applies only to the exact SG body previously tested.

## Tests
Run `node test-research.js && node test-breaker-optimizer.js && node test-integration.js`. These are module/synthetic checks, **not game verification**.
