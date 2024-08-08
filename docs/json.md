---
title: JSON file
prev: false
next: false
---

# JSON file
The `json` file in a map contains critical information about the map. This includes block textures, skybox information, team spawns, game mode parameters, and more.

### Tips
+ You can use `\n` in the map description to start a new line.
  - This is useful if you want to add additional sections to the map details.
  - An example of this can be `\nCreated by: username1, username2` to the end of the map description to credit who created the map.
+ Use official maps' `json` files as reference for what you can and can't do.

### Limitations
* Arena game mode is hardcoded to `[ 96, 256, 160 ]` X,Z in-game.
* Rush and Breakthrough require at least 2 points.
* `grass` BlockTexturesV2 attribute does not appear in multiplayer when added in an unofficial map.
* Grass particles can only use 1 color config per map.
* Breakthrough and Control Shift game modes cannot be seperated.
* Gun Game, Team Deathmatch, and Free for all game modes cannot be seperated and are always available on a map.
* You cannot upload a map to the Steam Workshop without a `preview.jpg`.
* `preview.jpg` must be less than 1MB to upload to the Steam Workshop.

### Example json file
[map_template.json](/map_template.json)