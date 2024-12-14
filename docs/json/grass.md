---
title: Grass
prev: false
next: false
---

# Grass
::: info
Grass does not render on custom maps in multiplayer.
:::
Grass can be used to add extra detail to a map. `GrassColourTopDark` and `GrassColourTopLight` are used to give variance to the color of the top of the grass for better looks.

To add grass to a map, add the `grass` Attribute to a BlockTexturesV2 index.

```json
// This sets a completely black set of colors for grass.
// All of these default to the colors that the official maps use if unset.
// GrassColourBase: Color of the bottom of the grass.
// GrassColourTopDark: Darkest color of the top of the grass.
// GrassColourTopLight: Lightest color of the top of the grass.
"GrassColourBase": [0, 0, 0],
"GrassColourTopDark": [0, 0, 0],
"GrassColourTopLight": [0, 0, 0],
```

## Limitations
+ You can only have one set of colors per map.
+ As said above, grass doesn't render on custom maps in multiplayer.