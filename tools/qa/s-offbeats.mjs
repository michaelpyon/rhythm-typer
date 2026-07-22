export async function scenario(page) {
  await page.waitForFunction(() => typeof getTimingFromBeat === 'function');
  return page.evaluate(() => {
    GAME.beatInterval = 500;
    GAME.lastBeatTime = 1000;
    GAME.PERFECT_WINDOW = 50;
    GAME.GOOD_WINDOW = 110;
    GAME.OK_WINDOW = 170;

    const sample = now => {
      const distance = getTimingFromBeat(now);
      return { distance, rating: getTimingRating(distance) };
    };
    const result = {
      beat: sample(1000),
      offbeat: sample(1250),
      nextBeat: sample(1500),
      offbeatEdge: sample(1300),
      betweenSubdivisions: sample(1125),
    };

    if (result.beat.rating !== 'PERFECT' || result.beat.distance !== 0) {
      throw new Error(`Beat timing changed: ${JSON.stringify(result.beat)}`);
    }
    if (result.offbeat.rating !== 'PERFECT' || result.offbeat.distance !== 0) {
      throw new Error(`Exact offbeat was not PERFECT: ${JSON.stringify(result.offbeat)}`);
    }
    if (result.nextBeat.rating !== 'PERFECT' || result.nextBeat.distance !== 0) {
      throw new Error(`Next beat timing changed: ${JSON.stringify(result.nextBeat)}`);
    }
    if (result.offbeatEdge.rating !== 'PERFECT' || result.offbeatEdge.distance !== 50) {
      throw new Error(`Offbeat window edge changed: ${JSON.stringify(result.offbeatEdge)}`);
    }
    if (result.betweenSubdivisions.distance !== 125) {
      throw new Error(`Subdivision symmetry changed: ${JSON.stringify(result.betweenSubdivisions)}`);
    }

    GAME.currentBeatPip = 0;
    GAME.offbeatPlayed = false;
    document.querySelectorAll('.beat-pip').forEach((pip, index) => {
      pip.classList.toggle('active', index === 0);
      pip.classList.remove('offbeat');
    });
    updateBeat(1250);
    result.offbeatCue = {
      played: GAME.offbeatPlayed,
      visible: document.querySelector('.beat-pip[data-beat="0"]').classList.contains('offbeat'),
    };
    if (!result.offbeatCue.played || !result.offbeatCue.visible) {
      throw new Error(`Offbeat cue did not fire: ${JSON.stringify(result.offbeatCue)}`);
    }

    GAME.state = 'playing';
    GAME.enemies = [new Enemy('a', 0, 120)];
    GAME.targetEnemy = null;
    GAME.score = 0;
    GAME.combo = 0;
    GAME.perfectCount = 0;
    GAME.totalCharsTyped = 0;
    GAME.lastBeatTime = performance.now() - GAME.beatInterval / 2;
    handleKeyDown(new KeyboardEvent('keydown', { key: 'a' }));
    result.input = {
      perfectCount: GAME.perfectCount,
      typed: GAME.totalCharsTyped,
      score: GAME.score,
      enemyAlive: GAME.enemies[0].alive,
    };
    if (result.input.perfectCount !== 1 || result.input.typed !== 1 || result.input.enemyAlive) {
      throw new Error(`Offbeat input did not score PERFECT: ${JSON.stringify(result.input)}`);
    }
    return result;
  });
}
