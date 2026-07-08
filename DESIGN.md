# DESIGN.md - Rhythm Typer (source of truth)

Single-file static game (index.html, Canvas 2D + Web Audio, zero deps). Keep that constraint: no build step, no frameworks, no external requests. Everything below must be achievable inside 1 HTML file plus static assets.

## Layout / IA intent

3 screens, all overlaying 1 fullscreen canvas:

1. **Title screen (the landing page).** The game IS the landing page; there is no separate marketing page. Must communicate in 5 seconds: name, "type on the beat," difficulty choice, your PB, and a single START affordance. Animated ocean background already running behind it so the page never looks static.
2. **Gameplay.** HUD corners: score + combo top-left, wave + health top-right, beat pips bottom-center with the fading beat hint. Center screen is sharks and words only.
3. **Game over.** The share artifact (see screenshot moment). Restart via Enter/Space stays.

IA rule: 0 navigation, 0 pages, 0 modals beyond these 3 states. Depth comes from stats, not screens.

## Hero / landing concept

Title screen as attract mode: logo type set in the mono display face, pulsing at menu BPM; 1 or 2 ambient sharks swimming across the background with unlabeled words fading in and out (demonstrates the mechanic without a tutorial); difficulty selector showing per-difficulty PB under each button (Easy / Normal / Hard each display their own best, this is the top remaining quick win from SUGGESTIONS.md); 1 instruction line: "Type the words. Hit the beat. PERFECT > GOOD > OK > MISS."

## Key screens list

1. Title / difficulty select (with per-difficulty PBs)
2. Gameplay (waves, BPM ramps at wave multiples of 3 with a visible "BPM UP: X" flash + pitch-shifted click, per SUGGESTIONS quick win 3)
3. Wave transition overlay (brief dimmed full-screen "WAVE X" for ~1.5s, quick win 2)
4. Game over / share card (score, wave, max combo, % perfect, difficulty + BPM, NEW BEST state, Copy Score + Tweet buttons)
5. Mobile/no-keyboard gate screen (confident copy: keyboard required, link back on desktop)

## Empty / loading / error state intent

- **Loading:** effectively none (single file); first paint must be the animated title, never a blank canvas. If fonts load async, fall back to system mono without layout shift.
- **Empty (no PB yet):** title shows "No best yet on Normal. Set one." instead of a blank banner. Never show 0 as a best.
- **Audio-blocked state:** browsers require a user gesture for Web Audio; START click must init audio, and if audio fails, show a 1-line notice ("Sound blocked by browser, timing still scored") rather than running silently with no explanation.
- **localStorage unavailable (private mode):** keep the existing in-memory fallback, label the best as "this session."
- **Error:** no network calls exist, so the only real failure modes are audio and storage, both handled above.

## Metadata / OG intent (X-readiness is MANDATORY)

- Title, description, canonical, JSON-LD are already solid and point at rhythm-typer.vercel.app. Keep.
- **BLOCKER: og:image / twitter:image currently point to og.svg. X and most platforms do not render SVG card images, so the share card shows blank.** Must ship a raster og.png (1200x630) and point both tags at it. This is the single highest-leverage X-readiness fix in the repo.
- OG image content: dark ocean field, logo in mono type, a rendered shark with a word above it, and a fake-run-free stat strip style (see data honesty). Must be legible at timeline size.
- twitter:card stays summary_large_image. Update og:image:type accordingly.
- Share text format (already shipped in repo HEAD) is the growth loop; never simplify it back to score-only.

## Data honesty

The product makes no real-data claims: scores are computed from actual keystroke timing (real ms windows: 65/50/40 PERFECT by difficulty), no fabricated leaderboards, no fake player counts, no external APIs. This claim is TRUE at repo HEAD (verified in SUGGESTIONS.md ground-truth pass, node --check clean). 2 disclosure rules going forward: the OG image must not depict a specific score as if it were a real run unless labeled as example art, and no leaderboard UI may be added without a real backend (leaderboards are explicitly a bigger bet, out of scope for the static build).

Deploy note: the live Vercel deploy is stale (missing enriched share, beat hint, PB persistence, restart shortcut; 4 commits). Any relaunch must start with Michael running the deploy so live == HEAD before anything is posted.

## The screenshot-worthy moment to engineer

**The game-over card.** Design it as a poster, not a dialog: oversized score in tabular mono, a horizontal stat strip (WAVE 7 | 34x COMBO | 61% PERFECT | HARD 150 BPM), a NEW BEST flare in magenta when earned, and the cyan/magenta palette so the screenshot is instantly identifiable in a Discord feed. It must contain the game's name and URL somewhere subtle so an unattributed screenshot still routes traffic. Secondary GIF moment: a PERFECT streak where hit flashes land visibly on the beat pips; keep those 2 animations frame-synced so captures look intentional.

## Build guardrails

- Preserve: name, shark/diver concept, 3 difficulties and their BPM/window tuning, keyboard-only gate, zero-dependency single-file architecture, localStorage PB with in-memory fallback, Enter/Space restart, auto-target last enemy.
- Do not add: accounts, servers, analytics beyond what exists (none), mobile touch typing.
- Input latency budget: keystroke-to-feedback under 100ms; any visual flourish that threatens this is cut.
