---
title: Water
prev: false
next: false
---

# Water
Water can serve a visual and gameplay purpose.
::: danger
Do not set WaterStartX or WaterStartZ to a negative number. This will hang rendering if the -x or -z side of the map is in view and can crash clients.
:::

### Fields
**WaterLevel** `<float>`<br />
Initial water level in blocks from Y=0. Can be set to change during rainfall. Random displacement can reach up to about 0.2 above the specified coordinate. Defaults to 0.


**WaterColour** `<rgb>`<br />
Color of water. Defaults to [0, 0, 0].


**EnclosedWater** `<boolean>`<br />
Whether water is bound to the map borders. Requires map size to be a multiple of 64. Defaults to false.


**MinWaterLevel** `<float>`<br />
Minimum water level. Can be used with rainfall to create unique scenarios. Defaults to -1000.


**MaxWaterLevel** `<float>`<br />
Maximum water level. Can be used with rainfall to create unique scenarios. Defaults to 1024.


**WaterStartX** `<integer>`<br />
Controls water bounds and where water player movement ends in chunks (32x32). Caustics are always visible though. A start position of 0 is 64 blocks (2 chunks) BEFORE 0 on that axis. Defaults to 0.


**WaterStartZ** `<integer>`<br />
Defaults to 0.


**WaterEndX** `<integer>`<br />
Defaults to 100.


**WaterEndZ** `<integer>`<br />
Defaults to 100.