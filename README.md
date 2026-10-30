# Push Block

A short puzzle platformer level for Practice 3 of the Game Design course. You control a small robot that cannot jump. Its only action is to push blocks. A block that falls into lava becomes a bridge, and a block that falls on an enemy crushes it. The level teaches all of this through its design, with no text on screen.

The level has four sections, from a safe start to a final test. It takes less than 2 minutes to finish.

## Controls

* Left and Right arrows, or A and D: move
* Space: push the block in front of you
* R: restart the current section

## How to run it

1. Download this repository as a ZIP, or clone it.
2. Unzip it and open `index.html` in Chrome.

There is nothing to install. The game loads Three.js from a CDN, so it needs an internet connection.

## Where to edit the level map

The map lives in `level.js`, apart from the game code. Each character is one tile:

* `#` fixed ground or wall
* `B` pushable block
* `^` lava
* `@` player start
* `G` guard that stands still
* `P` patrol that walks
* `C` optional coin
* `O` goal
* `.` air

All rows must have the same length. The bottom row is the base floor.

`level.js` also has two settings. `checkpoints` lists the tiles where the player restarts after failing, counting from 1. `patrol` sets the first and last tile the patrol walks between.

For example, to move the coin, replace the `C` with a `.` and write a `C` in another air tile. Save the file and reload the page.

## Where to change how it feels

The feel constants sit together at the top of the game script in `index.html`, under the comment `FEEL CONSTANTS`. The most useful ones are:

* `WALK_SPEED`: how fast the robot walks, in tiles per second
* `PLAYER_GRAVITY`: how fast the robot falls
* `PUSH_DURATION`: how long a block takes to slide one tile
* `PATROL_SPEED`: how fast the patrol walks
* `PUSH_BUFFER`: how early you can press Space before you touch a block
* `CAMERA_LOOKAHEAD`: how many tiles the camera shows ahead of the robot

The robot has no jump, so there is no jump strength value.

## Files

* `index.html`: the page, the title and end screens, and the game logic
* `level.js`: the level map
* `README.md`: this file

## Credits

Built with [Three.js](https://threejs.org) r128. All shapes and sounds are made in code, with no image or audio files.
