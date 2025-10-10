---
title: Grass
prev: false
next: false
---

# Grass
::: info
Grass does not render on custom maps in multiplayer.
:::
Grass can be used to add extra detail to a map. To add grass to a map, add the `grass` Attribute to a BlockTexturesV2 index.

## Fields
`GrassColourTopDark` and `GrassColourTopLight` are used to give variance to the color of the top of the grass for better looks. All of these default to the colors that the official maps use if unset.

**GrassColourBase** [`<rgb>`](../types/rgb.md)<br />
Color of the bottom of the grass. This is always the same.

**GrassColourTopDark** [`<rgb>`](../types/rgb.md)<br />
Darkest color of the top of the grass.

**GrassColourTopLight** [`<rgb>`](../types/rgb.md)<br />
Lightest color of the top of the grass.

## Limitations
* You can only have one set of colors per map.