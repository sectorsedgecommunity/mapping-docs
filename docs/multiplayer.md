---
title: Multiplayer
prev: false
next: false
---

# Multiplayer

### Setting up a custom map for use
Make sure all contents of a folder have the same name as the parent folder. A `vox` file is not needed when on a server.

### Bonuses
- `forcemap` can pick maps with incorrect Static map size, and still be playable.

### Limitations
* `forcemap` cannot pick a custom map with a space in the file name.
* Allegiance `json` attribute is only for allegiance music.
* The map `Name` is only used for the post-vote summary.
* `preview.jpg` isn't used in the map vote or post-vote summary.
  * This has been confirmed to be intentional behavior.
* Grass (particles) do not appear in custom maps, in multiplayer.
  * This is currently being worked on.