# Rhythm Typer - Suggestions

## Evangelist

The person most likely to love and share Rhythm Typer is a 22-to-28-year-old who frequents r/WebGames and r/typing, practices touch-typing on Keybr or Monkeytype but wants something more game-like, and listens to lo-fi or electronic music while coding. They use Monkeytype as their baseline ("I do 110 WPM there"). What makes them screenshot it: a high score with a brutal max combo number and a high perfect percentage, something that implies both typing skill AND rhythm instinct in a single line. What makes them bounce in 5 seconds: no visible score to beat, no memory of their last run, nothing to return to. Every session resets to zero and feels like the first time. They will share once if the game is fun, but return (and share again) only if there is a personal best to defend.

## Ground-Truth Findings (Repo HEAD)

**Working:** Static single-file HTML/CSS/JS game. No build step, no dependencies, no external data.

- Title screen with 3 difficulty buttons and START works.
- Difficulty selection (Easy 90 BPM / Normal 120 BPM / Hard 150 BPM) sets timing windows correctly (PERFECT: 65/50/40 ms).
- Beat pips (4 dots) light up on rhythm; metronome clicks play via Web Audio API.
- Beat-hint "Type on the flash for more points" fades in at beat 1 and out after beat 8, then hides.
- Share text (Copy Score and Tweet) includes difficulty, wave, max combo, and perfect pct, e.g. "Rhythm Typer [Normal] - Score: 4,820 | Wave 3 | Max combo 12x | 41% perfect".
- No fabricated data, no false real-time claims, no example.com links, no stale dates.
- JS syntax passes node --check on extracted script (line 391 to 1545).

**Honest:** Scoring is algorithmic from actual timing (getTimingScore uses real 50ms PERFECT window on Normal). No inflated numbers, no invented data.

**Live vs Repo gap:** Live at rhythm-typer.vercel.app is on the PRE-beat-hint build (commit prior to a670fda). The beat-hint (#beat-hint) and enriched share text from the last 2 commits are in repo HEAD but NOT yet deployed. This is a deploy-needed item only, not a code fix.

**Nothing fabricated remains** in the current repo HEAD.

## Prioritized Plan

### Shipped Wave 1

- Personal best persistence via localStorage (NEW BEST! on game over, "Your best: X,XXX on Difficulty (Wave Y)" on title screen, in-memory fallback for private mode).
- Difficulty label stored alongside best score (item 2, free add-on).

### Shipped Wave 2

- Keyboard shortcut Enter/Space to restart on game over (no mouse required after a run ends).
- Auto-target when exactly 1 enemy is alive and nothing is targeted (reduces frustration when the last shark is close).

### Quick Wins Remaining

1. **Difficulty-specific best scores** (M effort)
   - What: Store a separate best for each difficulty key in localStorage. Title shows the best per selected difficulty.
   - Why: A Hard-mode best vs Easy-mode best are incomparable. Encourages trying harder modes.
   - Effort: M.

2. **Wave announcement visual polish** (S)
   - What: The "WAVE X" floating text appears mid-screen but is easy to miss. A brief full-screen dimmed overlay with wave number for 1.5 seconds would feel intentional.
   - Effort: S.

3. **BPM ramp-up signal** (S/M)
   - What: When BPM increases at wave multiples of 3, show a brief "BPM UP: 125" flash with a higher-pitched click burst so the player knows the tempo shifted.
   - Effort: S.

4. **Favicon clarity** (S, already has shark emoji favicon, done)

### Bigger Bets (L effort, skip this pass)

- Leaderboard (requires server or external API, out of scope for static game).
- Touch/mobile typing support (keyboard requirement is intentional gate).
- Visual theme switcher (neon, lo-fi).

## Deploy Status

Commits a670fda (beat-hint) and 17c4a1a (enriched share) are in repo HEAD but the live URL still serves the pre-fix build. Next Vercel deploy will flush both without any further code change.
