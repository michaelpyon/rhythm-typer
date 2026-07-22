# Rhythm Typer - Suggestions

## Evangelist

The person most likely to love and share Rhythm Typer is a 22-to-28-year-old who frequents r/WebGames and r/typing, practices touch-typing on Keybr or Monkeytype but wants something more game-like, and listens to lo-fi or electronic music while coding. They use Monkeytype as their baseline ("I do 110 WPM there"). What makes them screenshot it: a high score with a brutal max combo number and a high perfect percentage, something that implies both typing skill AND rhythm instinct in a single line. What makes them bounce in 5 seconds: no visible score to beat, no memory of their last run, nothing to return to. Every session resets to zero and feels like the first time. They will share once if the game is fun, but return (and share again) only if there is a personal best to defend.

## Ground-Truth Findings (Repo HEAD)

**Working:** Static single-file HTML/CSS/JS game. No build step, no dependencies, no external data.

- Title screen with 3 difficulty buttons and START works.
- Difficulty selection (Easy 90 BPM / Normal 120 BPM / Hard 150 BPM) sets timing windows correctly (PERFECT: 65/50/40 ms).
- Beat pips (4 dots) light up on rhythm; metronome clicks play via Web Audio API.
- Beat-hint "Type on the flash for more points" fades in at beat 1 and out after beat 8, then hides.
- Share text (Copy Score and Share on X) includes difficulty, live BPM, wave, max combo, and perfect percentage.
- No fabricated data, no false real-time claims, no example.com links, no stale dates.
- JS syntax passes node --check on extracted script (line 391 to 1545).

**Honest:** Scoring is algorithmic from actual timing (getTimingScore uses real 50ms PERFECT window on Normal). No inflated numbers, no invented data.

**Live release status (2026-07-22):** The public bundle is allowlisted to `index.html`, `og.png`, and `favicon.svg`. Internal persona, brand, design, Claude, gstack, and Vercel project files are excluded. Two consecutive production-build gates were clean and byte-identical. The stable URL passed desktop, mobile, and short-landscape public canaries with 0 console errors.

**Nothing fabricated remains** in the current repo HEAD.

## Prioritized Plan

### Shipped Wave 1

- Personal best persistence via localStorage (NEW BEST! on game over, "Your best: X,XXX on Difficulty (Wave Y)" on title screen, in-memory fallback for private mode).
- Difficulty label stored alongside best score (item 2, free add-on).

### Shipped Wave 2

- Keyboard shortcut Enter/Space to restart on game over (no mouse required after a run ends).
- Auto-target when exactly 1 enemy is alive and nothing is targeted (reduces frustration when the last shark is close).

### Shipped Wave 3

- Difficulty-specific local bests with legacy-score migration and an in-memory fallback.
- 1.5-second wave callout plus an explicit BPM-up signal every 3rd wave.
- Self-attributed game-over poster with difficulty, live BPM, wave, max combo, characters, and perfect percentage.
- Keyboard-detection gate for narrow/coarse-pointer screens, with external-keyboard unlock.
- Deliberate pause on Escape or focus loss, with beat-clock resync on resume.
- Raster 1200x630 social card, drawn favicon, complete image alt/type metadata, and `@mikaships` creator metadata.
- Corrected the Easy-selected/Normal-engine mismatch and the impossible capitalized `December` Hard word.

### Bigger Bets (L effort, skip this pass)

- Leaderboard (requires server or external API, out of scope for static game).
- Touch/mobile typing support (keyboard requirement is intentional gate).
- Visual theme switcher (neon, lo-fi).

## Deploy Status

The passed build is deployed through the existing `rhythm-typer` Vercel project at https://rhythm-typer.vercel.app. Future releases must keep the same 2-gate and independent-public-canary standard before replacing it.
