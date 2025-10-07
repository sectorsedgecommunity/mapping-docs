---
title: Rain
prev: false
next: false
---

# Rain
The server randomly picks between `RainStartMin` and `RainStartMax` for when to start rainfall.

### Fields
**RainStartMin** `<integer>`
Minimum time in seconds into a match when rain will begin falling.


**RainStartMax** `<integer>`
Maximum time in seconds into a match when rain will begin falling.


**RainColour** `<rgba>`
Color of rain particles. A controls bloom.


**RainDensity** `<float>`
Amount of rain particles spawned. 0.75 for 25% less rain particles.


**RainRenderDistance** `<float>`
Controls render distance when raining. 0.5 for 50% lower render distance.


**SunColourRaining** `<rgb>`
Color of sunlight when raining.


**WaterRiseSpeed** `<float>`
\# of blocks/ms. use 0.001 for 1 block per second. Defaults to 0.