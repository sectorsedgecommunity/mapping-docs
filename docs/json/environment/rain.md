---
title: Rain
prev: false
next: false
---

# Rain
The server randomly picks between `RainStartMin` and `RainStartMax` for when to start rainfall.

### Fields
**RainStartMin** `<integer>`<br />
Minimum time in seconds into a match when rain will begin falling.


**RainStartMax** `<integer>`<br />
Maximum time in seconds into a match when rain will begin falling.


**RainColour** [`<rgba>`](../types/rgba.md)<br />
Color of rain particles. A controls bloom.


**RainDensity** `<float>`<br />
Amount of rain particles spawned. 0.75 for 25% less rain particles.


**RainRenderDistance** `<float>`<br />
Controls render distance when raining. 0.5 for 50% lower render distance.


**SunColourRaining** [`<rgb>`](../types/rgb.md)<br />
Color of sunlight when raining.


**WaterRiseSpeed** `<float>`<br />
\# of blocks/ms. use 0.001 for 1 block per second. Defaults to 0.