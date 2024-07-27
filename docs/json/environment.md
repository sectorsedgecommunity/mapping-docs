---
title: Environment
---

## Environment
This page contains all attributes related to a map's environment, such as skybox, ambience, sun, and more.
```json
// SkyboxType: valid options: ad, cf, rw, is, lb, mc, st
// AD: Used on Aegis Desert, Devoid Wasteland. Open desert with a clear sky, mountains and plenty of sand. A pink planet (moon?) and blue planet with rings.
// CF: Used on Crashed Freighter, Soltec Plaza. Pretty red mountains at sunset in the open waters. No planets visible but plenty of very bright stars.
// RW: Used on Railway, Reactor. Foggy city with partial clouds, and futuristic skyscrapers riddled with pipes. No planets visible.
// IS: Used on Ice Station, Corahk Canyon, Cold Harbour. Coastline of an island with extreme snow mountains, partial clouds. No planets visible. This skybox/planet is confirmed to be NYX-03.
// LB: Used on Laboratory. Cloud planet with futuristic skyscrapers at sunset. A blue gas planet is visible. This may be the same planet seen in the default Space skybox.
// MC: Used on Magma Chamber, Base Omicron. Blue-gray harsh mountains with some "pwetty stars" (quote from Paddy on Steam). Unlit-side of a planet with a blue atmosphere. This MAY be the same planet as in the default Space skybox, but I don't think this is confirmed.
// ST: Used on Soltrium Temple, Shrine, Aegis Oasis, Devoid Cathedral. Pleasant blue-gray mountains with medium clouds. Red planet and a gray moon(?) visible.
// SkyboxRotation: Pitch/yaw of skybox. 6.283 is approximately 360 degrees on both. π*2?
// SkyboxVerticalOffset: Vertical offset of the literal sky box. +0.93 or -0.93 maximum before the void is exposed.
"SkyboxType": "rw",
"SkyboxRotation": [ 0, 0.7 ],
"SkyboxVerticalOffset": 0.0,
// Enclosed: If true, disables shadows, skybox, and crepuscular rays. This also makes the top of the map not meshed, which lets you see into the map from the spawn screen.
"Enclosed": false,
// CustomSkyboxColour: Determines if the skybox is a flat 2-color sky. True/false.
    // HorizonColour: Color of horizon. RGBA?
    // TopColour: Color of top half of sky. RGBA?
"CustomSkyboxColour": false,
    "HorizonColour": [
        0,
        0,
        0,
        0
    ],
    "TopColour": [
        0,
        0,
        0,
        0
    ],
```

```json
// RenderDistance: Render distance in chunks(?)
// RenderDistanceSpawn: Must be lower than RenderDistance(?), and only takes effect if RenderDistance is below ~1024.
"RenderDistance": 2048,
"RenderDistanceSpawn": 2048,

```json
// SunColour: Regular color of the sun, in RGB.
// SunColourRaining: Color of sun when raining, in RGB.
// SunRotation: Rotation of the sun.
// CrepuscularThresholdOverride: Probably threshold to render crepuscular rays. 0.0 to ~2.0; though it does start to get a bit glitchy after about 1.5.
// CrepuscularStartHeight: Probably lowers where the sun would be, relative to clouds? Because lowering this value causes more rays to shine through. 0.0-1.0.
// SunDiffuseStrength: The strength of the sun. >0.0. Defaults to 0.001.
"SunColour": [ 255, 255, 255 ],
"SunColourRaining": [ 36, 42, 61 ],
"SunDiffuseStrength": 0,
"SunRotation": [ 0.75, 2.4915926535897932 ],
"CrepuscularThresholdOverride": 1,
"CrepuscularStartHeight": 0.5,
"CrepuscularPitch": 0,
"CrepuscularYaw": 0,
```

```json
// FogType: This very likely does nothing. "clear" and "fog" are valid.
// FogColour: RGB color value for fog seen when render distance game setting is low enough?
"FogType": "clear",
"FogColour": [ 212, 166, 123 ],
```

```json
// Brightness: Multiplier for overall brightness. Defaults to 1.
// BlockBrightness: Multiplier for the brightness of blocks. Defaults to 1.3.
// RainBrightness: Multiplier for rain brightness? Defaults to 1.
"Brightness": 1,
"BlockBrightness": 1.3,
"RainBrightness": 1,
```

```json
// WaterLevel: In-game Y-coordinate for sea level Random displacement can reach up to about 0.2 above the specified coordinate. Defaults to 0.
// WaterColour: Color of water in RGB. Defaults to [0,0,0].
"WaterLevel": 7.3,
"WaterColour": [ 124, 53, 47 ],

// Example values are the defaults in received .json files. MinWaterLevel seemingly does nothing and MaxWaterLevel is a maximum for WaterLevel's value.
"MinWaterLevel": -1000,
"MaxWaterLevel": 1024,

// These seemingly don't work properly anymore. Controls water bounds and where modified player movement ends.
"WaterStartX": 0,
"WaterEndX": 100,
"WaterStartZ": 0,
"WaterEndZ": 100,
```

```json
// RainColour: RGBA color of rain. A controls bloom.
// RainStartMin: Minimum time in seconds into a match when rain will begin falling.
// RainStartMax: Maximum time in seconds into a match when rain will begin falling.
// Server randomly picks a number between those 2 numbers for when to start raining.
// RainDensity: Amount of rain particles spawned. Percentage 0.0-1.0. 0.75 for 25% less rain particles.
// RainRenderDistance: Controls render distance when raining. Percentage 0.0-1.0. 0.5 for 50% lower render distance.
// WaterRiseSpeed: # of blocks/ms. use 0.001 for 1 block per second.
"RainColour": [ 20, 40, 40, 0],
"RainStartMin": 900,
"RainStartMax": 1200,
"RainDensity": 1.0
"RainRenderDistance": 1.0,
"WaterRiseSpeed": 0,
```

```json
// WindSpeed: Wind speed, in blocks per second? From limited testing appears to do nothing to falling rain/snow.
// WindDirection: Yaw direction of wind. Pushes rain and leaf particles horizontally.
"WindSpeed": 0.015,
"WindDirection": 0.785375,
```

```json
// Snow is seperate from Rain. Snow immediately begins falling from match start.
// HasFallingSnow: Boolean, Controls whether the map has falling snow.
// HasBlizzardSnow: Boolean, Blizzard snow has more intense, non-customizable wind applied. Overrides HasFallingSnow.
// SnowIndex: Index used for voxels placed by snowfall. Don't think this works anymore.
// FallingSnowColour: RGBA color of snowflakes. A controls bloom.
"HasFallingSnow": true,
"HasBlizzardSnow": false,
"SnowIndex": 19,
"FallingSnowColour": [ 255, 255, 255, 255],
```

```json
// Type: Values: wind, rumble, jungle, ice. Vercidium stated `rain` and `ship` may exist but it appears they don't.
// Altitude: Y coordinate where the sound plays.
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
"UnderwaterSound": "underwatercold",

```