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

### Quick Wins (S effort, no deploy needed to verify)

1. **Personal best persistence via localStorage** (THIS PASS, S/M effort)
   - Files: index.html only (single-file app).
   - What: On game over, check if GAME.score > stored best. Show "NEW BEST!" on the game-over screen when beaten (styled in gold). Show "Your best: X,XXX (Wave Y)" on the title screen after the first run. Wrap all localStorage calls in try/catch with an in-memory fallback for private mode.
   - Why the evangelist cares: closes the "every session resets" bounce. The typer-gamer has a number to defend and share.
   - Effort: S (20 to 30 lines, no new files).
   - Deploy needed to verify: no (static file, runs locally or on any static server).

2. **Show difficulty label alongside best score on title** (ties into #1, free add-on)
   - What: Store difficulty alongside best score so the title shows "Your best: 4,820 on Normal (Wave 3)".
   - Why: "Normal" is the bar; Hard-mode best score is a flex.

3. **Difficulty-specific best scores** (M effort, deferred)
   - What: Store a separate best for each difficulty key in localStorage. Title shows the best per selected difficulty.
   - Why: A Hard-mode best vs Easy-mode best are incomparable. Encourages trying harder modes.
   - Effort: M.

4. **Wave announcement visual polish** (S, deferred)
   - What: The "WAVE X" floating text appears mid-screen but is easy to miss. A brief full-screen dimmed overlay with wave number for 1.5 seconds would feel intentional.
   - Effort: S.

5. **Target auto-select on single visible word** (S, deferred)
   - What: When only 1 enemy is alive, auto-target it without requiring the first-letter press.
   - Why: Reduces frustration when a shark is close and the player knows the word.
   - Effort: S.

6. **BPM ramp-up signal** (M, deferred)
   - What: When BPM increases at wave multiples of 3, show a brief "BPM UP: 125" flash with a higher-pitched click burst so the player knows the tempo shifted.
   - Effort: S.

7. **Keyboard shortcut to restart on game over** (S, deferred)
   - What: Press Enter or Space on game-over screen to restart, so mouse is not required.
   - Effort: S (1 event listener).

8. **Favicon clarity** (S, already has shark emoji favicon, done)

### Bigger Bets (L effort, skip this pass)

- Leaderboard (requires server or external API, out of scope for static game).
- Touch/mobile typing support (keyboard requirement is intentional gate).
- Visual theme switcher (neon, lo-fi).

## Deploy Status

Commits a670fda (beat-hint) and 17c4a1a (enriched share) are in repo HEAD but the live URL still serves the pre-fix build. Next Vercel deploy will flush both without any further code change.
