# Hatty Build Lab V4.1 — auto-loaded legal body data

Upload **index.html**, **manifest.webmanifest**, and the entire **data** folder (including `data/legal_bodies.json`) to the repository root. The app automatically fetches `./data/legal_bodies.json` on launch. No manual import on iPhone is needed.

**Verified in this release:** Position-specific legal height, weight and wingspan ranges from the upstream community dataset captured August 22, 2026.

**Not yet implemented:** Actual body-dependent attribute caps, complete 99 OVR budget, linked attribute constraints, build-specific cap breaker sequences, badge/animation unlock rules, or a real reverse optimizer. Generated planning views are **NOT playable build recommendations**.

The dataset file is derived from https://github.com/lightmatmul/nba2k27-builder-dataset/blob/main/bodies/legal_bodies.json . Confirm upstream terms before redistribution. This release is not affiliated with 2K.

### iPhone upload tip
GitHub's web uploader may flatten folders. Open your repo, choose **Add file → Create new file**, enter `data/legal_bodies.json` as the filename, paste the contents of the supplied JSON, then commit. Alternatively use the GitHub web file upload if it preserves folder paths.
