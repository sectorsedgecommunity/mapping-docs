---
title: Render Distance
prev: false
next: false
---

# Render Distance
Setting a reduced render distance can help establish a sense of scale or help counteract sniping on open maps.
::: info
When the Render Distance game setting is less than or equal to 12, fog is an opaque color. When set above 12, fog fades out to the skybox color.
:::

### Fields
**RenderDistance** `<integer>`
Render distance in chunks (32x32).

**RenderDistanceSpawn** `<integer>`
Render distance in chunks when in the respawn screen. Only takes effect if RenderDistance is below ~1024.

**FogColour** `<rgb>`
Color for fog when render distance game setting is <12.