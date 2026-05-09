# Rhythm Typer

A typing rhythm game. Words swim toward you on sharks. Type them to destroy the sharks before they reach you. Time each keystroke to the beat for bonus points and bigger combos.

## Play

Open `index.html` in any modern browser, or visit the live site.

## Run locally

It's a single static HTML file, so any static server works.

```bash
# Option 1: Python (built-in)
python3 -m http.server 8000

# Option 2: npx serve
npx serve .

# Option 3: just open the file
open index.html
```

Then visit `http://localhost:8000`.

## How to play

1. Pick a difficulty (Easy / Normal / Hard).
2. Click START.
3. Sharks swim from the right carrying words above them.
4. Type the first letter of any visible word to lock onto that shark.
5. Keep typing the rest of the word to destroy the shark.
6. Time keystrokes to the beat: PERFECT > GOOD > OK > MISS.
7. Don't let sharks reach the diver. 0 health means game over.

## Scoring

- PERFECT timing: 100 base points
- GOOD timing: 60 base points
- OK timing: 30 base points
- MISS timing: 10 base points
- Combos every 5 hits add a 25% multiplier
- Destroying a shark adds `word.length * 20` bonus

## Difficulty tuning

| Difficulty | BPM | Speed | Spawn rate | Word pool |
|---|---|---|---|---|
| Easy | 90 | 0.4 | every 3.0s | short common words |
| Normal | 120 | 0.6 | every 2.2s | mixed |
| Hard | 150 | 0.85 | every 1.6s | medium and long words |

## Tech

- Pure HTML, CSS, JS. Zero build, zero dependencies.
- Canvas 2D for rendering.
- Web Audio API for the metronome and SFX (synthesized, no audio files).
- ~1300 lines, all in `index.html`.

## File structure

```
rhythm-typer/
  index.html   # Everything (HTML + CSS + JS)
  og.svg       # Social share preview
  README.md    # This file
```

## Browser support

Works in any browser with Canvas 2D and Web Audio. The `roundRect` polyfill covers Safari < 16. Tested on Chrome, Safari, Firefox.

## Requirements

A physical keyboard. The game relies on character keypresses and is gated to desktop/laptop users.

## License

MIT.
