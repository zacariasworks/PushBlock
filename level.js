// ============================================================
//  PUSH BLOCK level map (data, kept apart from the game code)
// ============================================================
//  Each character is one tile. Columns are numbered from 1 to 29.
//  The bottom row is the base floor. All rows must have the same length.
//
//  #  fixed ground or wall
//  B  pushable block
//  ^  lava (a block that falls in covers it and becomes a bridge)
//  @  player start
//  G  guard that stands still
//  P  patrol
//  C  optional coin
//  O  goal
//  .  air
// ============================================================

window.LEVEL = {
  map: [
    ".............................",
    ".....##.....B...B...B..B....O",
    ".@.B.##.B..##..##G###.###CP.#",
    "#########^###^#######^#######",
    "#############################",
  ],

  // Safe points where the player restarts, as tile numbers (1 is the first tile)
  checkpoints: [1, 8, 16, 20],

  // Tiles the patrol walks between
  patrol: { from: 26, to: 28 },
};
