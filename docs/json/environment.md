---
title: Environment Attributes
prev: false
next: false
---

# Environment Attributes
This page contains all attributes related to a map's environment, such as skybox, ambience, sun, and more.
```json
// SkyboxType: valid options: ad, cf, rw, is, lb, mc, st. See table below for details.
// SkyboxRotation: Pitch/yaw of skybox. 6.283 (2π) is approximately 360 degrees.
// SkyboxVerticalOffset: Vertical offset of the literal sky box. ±0.93 maximum before the void is exposed.
"SkyboxType": "rw",
"SkyboxRotation": [ 0, 0.7 ],
"SkyboxVerticalOffset": 0.0,
// Enclosed: If true, disables shadows, skybox, and crepuscular rays. This also makes the top of the map invisible, which lets you see into the map from the spawn screen.
"Enclosed": false,
// CustomSkyboxColour: Determines if the skybox is a flat 2-color sky. True/false. Useful for overcast or nighttime maps.
    // HorizonColour: RGB Color of horizon.
    // TopColour: RGB Color of top half of sky.
"CustomSkyboxColour": false,
    "HorizonColour": [
        0,
        0,
        0
    ],
    "TopColour": [
        0,
        0,
        0
    ],
```
### SkyboxType skybox codes
| Skybox code | Official usage                                          | Description                                                                                 |
|:------------|:--------------------------------------------------------|:--------------------------------------------------------------------------------------------|
| AD          | Aegis Desert, Devoid Wasteland.                         | Open desert with a clear sky, mountains. A pink planet (moon?) and blue planet with rings.  |
| CF          | Crashed Freighter, Soltec Plaza.                        | Pretty red mountains at sunset in the open waters with plenty of stars. No planets visible. |
| RW          | Railway, Reactor.                                       | Dark beige foggy city with partial clouds, and futuristic skyscrapers. No planets visible.  |
| IS          | Ice Station, Corahk Canyon, Cold Harbour.               | Coastline of an island with extreme snow mountains, partial clouds. No planets visible.     |
| LB          | Laboratory.                                             | Cloud planet with futuristic skyscrapers at sunset. A blue gas planet is visible.           |
| MC          | Magma Chamber, Base Omicron.                            | Blue-gray harsh mountains with some "pwetty stars". Unlit-side of a planet is visible.      |
| ST          | Soltrium Temple, Shrine, Aegis Oasis, Devoid Cathedral. | Pleasant blue-gray mountains with medium clouds. Red planet and a gray moon(?) visible.     |

```json
// RenderDistance: Render distance in chunks(?) If end of render distance is visible, it will always be a fade to skybox. If render distance game setting is less than this, then that will take priority.
// RenderDistanceSpawn: Render distance for the spawn screen. Only takes effect if RenderDistance is below ~1024.
"RenderDistance": 2048,
"RenderDistanceSpawn": 2048,
```

```json
// SunColour: Regular color of the sun, in RGB.
// SunRotation: Rotation of the sun. 6.283 (2π) is approximately 360 degrees.
// SunDiffuseStrength: The strength of the sunlight. >0.0. Defaults to 0.001.
// SunDistance: No clue what this does.
// CrepuscularThresholdOverride: Probably threshold to render crepuscular rays. 0.0 to ~2.0; though some flickering may occur when this is set >1.5.
// CrepuscularStartHeight: Probably lowers where the sun would be, relative to clouds? Lowering this value causes more rays to shine through. 0.0-1.0.
"SunColour": [ 255, 255, 255 ],
"SunRotation": [ 0.75, 2.4915926535897932 ],
"SunDiffuseStrength": 0,
"SunDistance": 0.0,
"CrepuscularThresholdOverride": 1,
"CrepuscularStartHeight": 0.5,
"CrepuscularPitch": 0,
"CrepuscularYaw": 0,
```

```json
// FogType: This doesn't do anything. "clear" and "fog" are valid.
// FogColour: RGB color value for fog when render distance game setting is <12
"FogType": "clear",
"FogColour": [ 212, 166, 123 ],
```

```json
// Brightness: Multiplier for overall brightness. Defaults to 1.
// BlockBrightness: Multiplier for the brightness of blocks. Defaults to 1.3.
// RainBrightness: Value that Brightness is set to when raining. Defaults to 1.
"Brightness": 1,
"BlockBrightness": 1.3,
"RainBrightness": 1,
```

```json
// WaterLevel: In-game Y-coordinate for sea level. Random displacement can reach up to about 0.2 above the specified coordinate. Defaults to 0.
// WaterColour: Color of water in RGB. Defaults to [0, 0, 0].
// EnclosedWater: Whether water is bound to the map borders. Requires map size to be a multiple of 64. Defaults to false.
"WaterLevel": 7.3,
"WaterColour": [ 124, 53, 47 ],
"EnclosedWater": false,

// MinWaterLevel seemingly does nothing.
// MaxWaterLevel is the maximum value for WaterLevel.
// Example values are the defaults in received .json files.
"MinWaterLevel": -1000,
"MaxWaterLevel": 1024,

// Controls water bounds and where water player movement ends in chunks (16x16 horizontally). Caustics are always visible though. A start position of 0 is 64 blocks (4 chunks) BEFORE 0 on that axis.
"WaterStartX": 0,
"WaterEndX": 100,
"WaterStartZ": 0,
"WaterEndZ": 100,
```

```json
// RainColour: RGBA color of rain. A controls bloom.
// SunColourRaining: Color of sun when raining, in RGB.
// Server randomly picks a number between these 2 numbers for when to start raining.
//   RainStartMin: Minimum time in seconds into a match when rain will begin falling.
//   RainStartMax: Maximum time in seconds into a match when rain will begin falling.
// RainDensity: Amount of rain particles spawned. Percentage 0.0-1.0. 0.75 for 25% less rain particles.
// RainRenderDistance: Controls render distance when raining. Percentage 0.0-1.0. 0.5 for 50% lower render distance.
// WaterRiseSpeed: # of blocks/ms. use 0.001 for 1 block per second.
"RainColour": [ 20, 40, 40, 0],
"SunColourRaining": [ 36, 42, 61 ],
"RainStartMin": 900,
"RainStartMax": 1200,
"RainDensity": 1.0
"RainRenderDistance": 1.0,
"WaterRiseSpeed": 0,
```

```json
// WindSpeed: Wind speed, in blocks per second? From limited testing appears to do nothing to weather particles.
// WindDirection: Yaw direction of wind. Pushes rain and leaf particles horizontally. Also does nothing to weather particles.
"WindSpeed": 0.015,
"WindDirection": 0.785375,
```

```json
// Snow immediately begins falling from match start. Snow is seperate from Rain.
// HasFallingSnow: Boolean, Controls whether the map has falling snow.
// HasBlizzardSnow: Boolean, Blizzard snow has more intense, non-customizable wind applied. Overrides HasFallingSnow.
// SnowIndex: Index used for voxels placed by snowfall. Don't think this works anymore.
// FallingSnowColour: RGBA color of snowflakes. A controls bloom.
"HasFallingSnow": true,
"HasBlizzardSnow": false,
"FallingSnowColour": [ 255, 255, 255, 255],
"SnowIndex": 19, // BROKEN
```

```json
// Type: Values: wind, rumble, jungle, ice. Vercidium stated `rain` and `ship` exists but it appears that they don't.
// Altitude: Y coordinate where the sound plays?
// Volume: Seems to be 0.0-1.0.
"AmbienceSound": [
    {
        "Type": "wind",
        "Steps": [
            {
                "Altitude": 0,
                "Volume": 0.3
            }
        ]
    }
],
// All possible values for this are unknown. Defaults to "underwater"
"UnderwaterSound": "underwatercold", // Some snowy official maps use this.
```