---
title: Multiplayer
prev: false
next: false
editLink: true
---

# Multiplayer

### Setting up a custom map for use
Make sure all contents of a folder have the same name as the parent folder. A `vox` file is not needed when on a server.

### Bonuses
- `forcemap` can pick maps with incorrect Static map size, and still be playable.

### Limitations
* `forcemap` cannot pick a custom map with a space in the file name.
* Allegiance `json` attribute is entirely non-functional in the map vote screen.
  * Needs testing if this does affect what allegiance music plays.
* The map `Name` is only used for the post-vote summary.
* `preview.jpg` isn't used in the map vote or post-vote summary.
* Grass (particles) do not appear in custom maps, in multiplayer.