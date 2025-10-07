---
title: Skybox
prev: false
next: false
---

# Skybox
The [skybox](https://en.wikipedia.org/wiki/Skybox_(video_games)) is a key part in a map's atmosphere.

## Cubemap skybox
`SkyboxType` uses cubemaps from the base game. These contain the most amount of detail, but may only fit certain environments.

### Fields
**SkyboxType** `<string choices>`

Specifies cubemap to use for skybox. See choices in the table.
| Skybox code   | Official usage                                          | Description                                                                                  |
|:-------------:|:--------------------------------------------------------|:---------------------------------------------------------------------------------------------|
| AD            | Aegis Desert, Devoid Wasteland.                         | Open desert with a clear sky, mountains. A pink planet (moon?) and blue planet with rings.   |
| CF            | Crashed Freighter, Soltec Plaza.                        | Red mountains at sunset in the open waters with plenty of stars. No planets visible.         |
| RW            | Railway, Reactor.                                       | Dark beige foggy city with partial clouds, and futuristic skyscrapers. No planets visible.   |
| IS            | Ice Station, Corahk Canyon, Cold Harbour.               | Coastline with extreme snow mountains nearby, and partial clouds. No planets visible.        |
| LB            | Laboratory.                                             | Cloud planet with futuristic skyscrapers at sunset. A blue gas planet is visible.            |
| MC            | Magma Chamber, Base Omicron.                            | Blue-gray harsh mountains and some "pwetty stars". Unlit-side of a planet is visible.        |
| ST            | Soltrium Temple, Shrine, Aegis Oasis, Devoid Cathedral. | Pleasant blue-gray mountains with medium clouds. Red planet and a gray moon(?) visible.      |
| CUSTOM        | N/A                                                     | Custom cubemap from 6 textures placed in `AppData\Roaming\vercidium\`. Doesn't work anymore. |


**SkyboxRotation** `<list>`

List of two floats. Rotates the skybox cube in radians.


**SkyboxVerticalOffset** `<float>`

Vertical offset of skybox cube. ±0.93 maximum before the void is exposed.


## Dual color skybox
If cubemap skyboxes don't fit your map's atmosphere, you can use a dual color skybox. Instead of using a cubemap, the game fades between a horizon color and a top color.

### Fields
**CustomSkyboxColour** `<boolean>`

Determines if the skybox is a flat two color sky.


**HorizonColour** `<rgb>`

RGB color of horizon. Formatted `[R, G, B]`.


**TopColour** `<rgb>`

RGB color of top half of sky.


## Enclosed
When `Enclosed` is true, shadows, skybox, crepuscular rays are disabled, and the top faces of blocks on the topmost layer of the map are removed to reveal the map in the respawn screen. This is useful for maps like Subway which are fully underground.

### Fields
**Enclosed** `<boolean>`