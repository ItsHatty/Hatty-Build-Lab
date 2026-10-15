# In-game tether fix — experimental

Observed: SG 6ft5, 233 lb, 6ft10 wingspan: Speed With Ball 80 requires Speed at least 76. The August dataset encoded a zero-delta Speed With Ball -> Speed relationship that the earlier code skipped entirely. Zero-delta is NOT an equality requirement (that would incorrectly force Speed 80). This patch adds a narrow evidence-based lower bound for this exact body at SWB >=80. It is NOT a validated formula for other bodies or other SWB values. Other tether constraints may still be missing.

The greedy filler now weights useful basketball attributes more than Free Throw and Post Control; this is a heuristic, not a global optimum. No cap breaker optimization is included. Do not spend VC on results without testing.

Tests: node test-tether.js. Upload the CONTENTS of this directory to GitHub root, keeping data/ intact.
