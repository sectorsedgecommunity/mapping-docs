# Json file → Rain

You can copy into your own maps and edit it. Remove the comments when you copy this into your map.

```json
    // SunColourRaining: Color of sun, in RGB
    "SunColourRaining": [ 36, 42, 61 ],

    // RainColour: Color of rain, in RGBA?
    // RainStartMin: Minimum time in seconds into a match when rain will begin falling.
    // RainStartMax: Maximum time in seconds into a match when rain will being falling.
    // Server randomly picks a number between those 2 numbers for when to start raining.
    // RainDensity: Amount of rain particles spawned. Percentage 0.0-1.0. 0.75 for 25% less rain particles
    // RainRenderDistance: Controls render distance when raining. Percentage 0.0-1.0. 0.5 for 50% lower render distance
    "RainColour": [ 20, 40, 40, 0],
	"RainStartMin": 900,
	"RainStartMax": 1200,
    "RainDensity": 1.0
    "RainRenderDistance": 1.0 

    // WindSpeed: wind speed
    // WindDirection: yaw direction of wind. pushes rain and leaf particles horizontally
	"WindSpeed": 0.015,
	"WindDirection": 0.785375,

    // WaterRiseSpeed: number of blocks per millisecond. use 0.001 for 1 block per second
	"WaterRiseSpeed": 0,
```