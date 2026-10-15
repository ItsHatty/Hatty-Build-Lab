# Hatty's Build Wizard — Native Formula Beta v5

## What changed
- New `native-breaker-formula.js` calculates sequential cap breakers with the recovered formula and the full generated build's selected OVR archetype.
- `breaker-optimizer.js` now proposes base candidates instead of copying gains from unrelated reference builds.
- `hatty-live.js` checks the formula **after** building all 21 base attributes and rejects candidates whose projected final ratings miss a required target. Matching verified observations take precedence.
- Clear beta/proxy labeling. The native 155-slot maximum-weight lookup has NOT been recovered here: the model uses the maximum of the 21 direct attribute weights. This is not guaranteed in-game parity.
- Keeps the previous base-build engine and its tether fix.

## Upload from iPhone to GitHub
1. Download ZIP and open it in Files; tap to extract.
2. Open your repository `itshatty/Hatty-Build-Lab` on GitHub, on branch `main`.
3. Select **Add file → Upload files**. Upload **the contents** of the extracted folder, not the ZIP itself or the enclosing folder. Ensure `index.html`, `hatty-live.js`, `breaker-optimizer.js`, and NEW `native-breaker-formula.js` are at the repository root. Keep the `data/` folder and its JSON files under `data/`.
4. When GitHub says files already exist, upload them as replacements and **Commit changes**. Do not delete other repo files.
5. Open **Settings → Pages** and verify **Deploy from a branch → main → /(root)** (if already configured, leave it).
6. Allow the Pages deployment to finish under **Actions**. Open `https://itshatty.github.io/Hatty-Build-Lab/?v=native-formula-beta-5`.
7. Run the same SG 6'5 / 233 / 6'10 test, Final target 99 Driving Dunk, 5 breakers. Results should say **Engine: native-breaker-formula-beta-5** and **recovered formula (BETA proxy)**. A build that misses 99 under the formula must not appear as a successful match.

## Troubleshooting
- If engine label is old, wait for deployment then reload in a private Safari tab.
- If page says `HattyNativeBreakers is undefined`, check `native-breaker-formula.js` exists at repository root and `index.html` references it.
- If no build is returned, that means the current bounded search found none **under the beta proxy**, NOT that the requested build is proven impossible.

## Research note
Formula reported by the upstream `souledxxout/NBA2K27-MyPlayer-Build-Lab` project: `factor = 15 + trunc((350 - 14 * currentRating) / 74)`; `boost = round(((maxWeight - selectedWeight) / maxWeight) * factor)`, minimum +1, ceiling 99. The upstream project notes the 155-slot vs 21-slot max-weight limitation. We have not copied their application source code.
