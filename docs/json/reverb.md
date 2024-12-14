---
title: Reverb
prev: false
next: false
---

# Reverb
Configuration for audio reverb. You can find a list of reverb settings below. In-game you can also find a list of reverb settings, but you can test a select few sounds with a given reverb setting in the Reverb tab of the Singleplayer menu.

```json
// MaxRoomSize: Useful for limiting reverb on maps like Laser Tag.
// MinIndoor: Minimum reverb setting for "indoor" areas
// MinIndoor: Maximum reverb setting for "indoor" areas
// Outdoor: Reverb setting for "outdoor" areas
"Reverb": {
	"MaxRoomSize": 15000,
    "MinIndoor": "paddedcell",
    "MaxIndoor": "wooden_hall",
	"Outdoor": "forest",

    // From the old mapmaking Discord server - this may not work because Room size in-game always displays 0.
    // For clarification, reverb is strongest when in a room with volume <= MinRoomVolume, and reverb is weakest when in a room with volume >= MaxRoomVolume, e.g. in Laser Tag I've reduced MaxRoomVolume to 2000000 to reduce reverb
    // Default values are:
    "MinRoomVolume": 200000,
    "MaxRoomVolume": 6000000
},
```

## List of reverb settings
These are used for `MinIndoor` and `MaxIndoor`.
| General         | Outdoor       | Castle              | Factory              | Wood                | Sport                   | Prefab              | Space Station             | City           | Driving                 | Ice Palace             | Dome            | Mood         |
|:---------------:|:-------------:|:-------------------:|:--------------------:|:-------------------:|:-----------------------:|:-------------------:|:-------------------------:|:--------------:|:-----------------------:|:----------------------:|:---------------:|:------------:|
| generic         | backyard      | castle_smallroom    | factory_smallroom    | wooden_smallroom    | sport_emptystadium      | prefab_workshop     | spacestation_smallroom    | city_streets   | driving_commentator     | icepalace_smallroom    | dome_tomb       | mood_heaven  |
| paddedcell      | rollingplains | castle_shortpassage | factory_shortpassage | wooden_shortpassage | sport_squashcourt       | prefab_practiseroom | spacestation_shortpassage | city_subway    | driving_pitgarage       | icepalace_shortpassage | pipe_small      | mood_hell    |
| room            | deepcanyon    | castle_mediumroom   | factory_mediumroom   | wooden_mediumroom   | sport_smallswimmingpool | prefab_outhouse     | spacestation_mediumroom   | city_museum    | driving_incar_racer     | icepalace_mediumroom   | dome_saintpauls | mood_memory  |
| bathroom        | creek         | castle_largeroom    | factory_largeroom    | wooden_largeroom    | sport_largeswimmingpool | prefab_caravan      | spacestation_largeroom    | city_library   | driving_incar_sports    | icepalace_largeroom    | pipe_longthin   |              |
| livingroom      | valley        | castle_longpassage  | factory_longpassage  | wooden_longpassage  | sport_gymnasium         |                     | spacestation_longpassage  | city_underpass | driving_incar_luxury    | icepalace_longpassage  | pipe_large      |              |
| stoneroom       | forest        | castle_hall         | factory_hall         | wooden_hall         | sport_fullstadium       |                     | spacestation_hall         | city_abandoned | driving_fullgrandstand  | icepalace_hall         | pipe_resonant   |              |
| auditorium      | city          | castle_cupboard     | factory_cupboard     | wooden_cupboard     | sport_stadiumtannoy     |                     | spacestation_cupboard     |                | driving_emptygrandstand | icepalace_cupboard     |                 |              |
| concerthall     | mountains     | castle_courtyard    | factory_courtyard    | wooden_courtyard    |                         |                     | spacestation_courtyard    |                | driving_tunnel          | icepalace_courtyard    |                 |              |
| cave            | quarry        | castle_alcove       | factory_alcove       | wooden_alcove       |                         |                     | spacestation_alcove       |                |                         | icepalace_alcove       |                 |              |
| arena           | plain         |                     |                      |                     |                         |                     |                           |                |                         |                        |                 |              |
| hangar          | parkinglot    |                     |                      |                     |                         |                     |                           |                |                         |                        |                 |              |
| carpetedhallway |               |                     |                      |                     |                         |                     |                           |                |                         |                        |                 |              |
| hallway         |               |                     |                      |                     |                         |                     |                           |                |                         |                        |                 |              |
| stonecorridor   |               |                     |                      |                     |                         |                     |                           |                |                         |                        |                 |              |
| alley           |               |                     |                      |                     |                         |                     |                           |                |                         |                        |                 |              |
| sewerpipe       |               |                     |                      |                     |                         |                     |                           |                |                         |                        |                 |              |
| underwater      |               |                     |                      |                     |                         |                     |                           |                |                         |                        |                 |              |
| dustyroom       |               |                     |                      |                     |                         |                     |                           |                |                         |                        |                 |              |
| chapel          |               |                     |                      |                     |                         |                     |                           |                |                         |                        |                 |              |
| smallwaterroom  |               |                     |                      |                     |                         |                     |                           |                |                         |                        |                 |              |
| drugged         |               |                     |                      |                     |                         |                     |                           |                |                         |                        |                 |              |
| dizzy           |               |                     |                      |                     |                         |                     |                           |                |                         |                        |                 |              |
| psychotic       |               |                     |                      |                     |                         |                     |                           |                |                         |                        |                 |              |