---
title: OOBMin/Max
prev: false
next: false
---

# OOBMin and Max
OOBMin and OOBMax define where the safe, in-bounds region of the map is. Outside of this box is considered out of bounds and will kill any players standing out of bounds for more than 10 seconds. This can be used to make outside scenery inaccessible.
::: info
`TeamSpawns` allows players to spawn out of bounds. To prevent spawning out of bounds, use `"Type": "box"` or `"Type": "line"`.
:::

## Fields
**OOBMin** [`<position>`](types/position.md)<br />

**OOBMax** [`<position>`](types/position.md)