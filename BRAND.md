# BRAND.md - Rhythm Typer

## Positioning line (in Dan's language)

**"Monkeytype meets osu!: type on the beat, defend your PB."**

Longer form for meta descriptions: "A typing rhythm game that scores WPM and beat timing in the same run. Tight ms windows, combos, and a % perfect stat Monkeytype can't give you."

The name **Rhythm Typer** and the core concept (words ride sharks toward a diver, type them on the beat) stay exactly as they are. The sharks are a memorable hook, not a liability, as long as they are rendered with arcade-neon confidence instead of kids-game cuteness.

## Palette direction

Deep-ocean arcade neon. The current base is right, push it further with discipline:

- **Background:** near-black ocean navy, layered depth (#020b18 to #001830 range, subtle vertical gradient, faint parallax bubbles/light shafts)
- **Primary accent:** electric cyan (#0cf family) for score, UI chrome, PERFECT feedback
- **Combo/energy accent:** hot magenta (#f0a family), reserved for combo state and multiplier moments only
- **Danger:** warm red for health and near-miss states, used sparingly
- **Rating ladder needs distinct colors:** PERFECT cyan-white, GOOD green-cyan, OK amber, MISS gray-red, so a screenshot instantly communicates run quality

Rule: 2 accent colors carry the brand (cyan and magenta). Everything else is supporting cast. No rainbow UI.

## Type system

- **Display and stats: a monospace or semi-mono face** (JetBrains Mono, Space Grotesk, or IBM Plex Mono via system-safe fallback stack, self-hosted or system since the game is a zero-dependency single file). Monospace is the native typeface of the typing community; Segoe UI reads corporate and must go.
- **Numbers are the heroes:** score, combo, % perfect get the largest sizes on screen with tabular figures so they do not jitter while counting.
- Letter-spaced uppercase micro-labels (current style) stay for HUD captions.
- In-game target words: high-contrast mono, large enough to read at speed, with typed-so-far letters visibly consumed.

## Spacing and motion personality

- **Spacing:** generous dark space, HUD pinned to edges, center of screen belongs to gameplay. Title and game-over screens are 1 column, vertically rhythmic, no cards-in-cards.
- **Motion personality: metronomic.** Quarter-note beats get the full cyan pulse; valid eighth-note offbeats get a smaller magenta pulse. Impacts stay distinct through particles and screen feedback.
- Feedback must be under 100ms from keystroke; input feel beats visual polish in every tradeoff.
- Screen flash on PERFECT stays subtle (current 0.08 alpha is right); juice escalates with combo tier, not with every keypress.

## Voice and tone rules

1. Speak in stats and windows: "50ms PERFECT window on Normal," never "test your skills!"
2. Confident arcade brevity: "NEW BEST," "WAVE 7," "BPM UP: 165." All caps for game events, sentence case for UI copy.
3. Never apologize, never tutorialize at length. 1 line of instruction max on the title screen.
4. The keyboard gate is a badge, not a bug: "Keyboard required. This is the whole point."
5. No exclamation-mark salesmanship and no emoji. The favicon is a drawn shark-fin mark.

## 3 reference products to measure taste against

1. **Monkeytype** - restraint, stat-forward layout, instant restart loop, dark mono aesthetic
2. **osu!** - hit feedback, combo celebration, the sound design of accuracy
3. **A Dance of Fire and Ice** - geometric clarity, brutal-but-fair timing, minimal art doing maximal atmosphere

## 3 anti-references (never look like this)

1. **Nitro Type / kids' typing tutors** - cartoon mascots, XP confetti, "great job!" energy. The sharks must read arcade-menacing, not classroom-friendly.
2. **Generic AI-template slop** - purple-to-blue gradient hero, glassmorphism cards, Inter-on-white SaaS layout, floating 3D blobs, "Built with love" footer. This is a game, not a landing page cosplaying as one.
3. **Flash-portal era clutter (Miniclip circa 2009)** - ad-box borders, beveled buttons, 6 competing fonts, blinking PLAY NOW. Even though this is a browser game, it must feel like a crafted single-purpose toy, not a portal embed.
