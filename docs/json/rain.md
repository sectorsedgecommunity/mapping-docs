# Json file → Rain

You can copy into your own maps and edit it. Remove the comments when you copy this into your map.

```json
    // SunColourRaining: Color of sun, in RGB
    // RainColour: Color of rain, in RGBA?
    // RainStartMin & RainStartMax: Minimum and maximum time in seconds into match when rain begins. Server randomly picks a number between those 2 numbers for when to start raining.
    // RainDensity: Amount of rain particles spawned. Percentage 0.0-1.0. 0.75 for 25% less rain particles
    // RainRenderDistance: Controls render distance when raining. Percentage 0.0-1.0. 0.5 for 50% lower render distance
    // WindSpeed: wind speed
    // WindDirection: yaw direction of wind. pushes rain and leaf particles horizontally
    // WaterRiseSpeed: number of blocks per millisecond. use 0.001 for 1 block per second
    "SunColourRaining": [ 36, 42, 61 ],
	"RainColour": [ 20, 40, 40, 0],
	"RainStartMin": 900,
	"RainStartMax": 1200,
	"WindSpeed": 0.015,
	"WindDirection": 0.785375,
	"WaterRiseSpeed": 0,
    "RainDensity": 1.0
    "RainRenderDistance": 1.0
```