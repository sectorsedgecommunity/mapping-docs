---
title: Player Spawns
prev: false
next: false
---

# Player Spawns
This page covers fields related to spawning.

## TeamSpawns
`TeamSpawns` holds configs for how teams' regular spawns work. You must have configs for team 0 and team 1 even in FFA game modes.

### Fields
**GameMode** `<string choices>`<br />
Specifies gamemode(s) this config affects.
| Gamemode code |              Gamemode               |
|:-------------:|:------------------------------------|
| sta           | Static                              |
| brk           | Breakthrough                        |
| ctf           | Capture the Flag                    |
| esc           | Escort                              |
| ffa           | Free for All, Gun Game, Head Hunter |
| all           | All game modes                      |


**Type** `<string choices>`<br />
Specifies shape and/or function of spawn.
| Type   | Functionality                                                                                                                |
|:------:|:-----------------------------------------------------------------------------------------------------------------------------|
| box    | Uses `Min`, `Max` for position.                                                                                              |
| free   | Uses `Radius` for enemy distance check. Does not display spawn area effect.                                                  |
| line   | Uses `Min` and `Max` for end points, `Radius` for thickness.                                                                 |
| point  | Uses `Radius` and is centered around `Min`. If `Min` is missing, defaults `[ 0, 0, 0 ]`. Does not display spawn area effect. |


**Team** `<numeric boolean>`<br />
Determines which team this spawn is affecting.


**Min & Max** [`<position>`](types/position.md)<br />
Minimum and maximum coordinates a player can spawn at. Max must be greater than min.


**OOBDistance** `<integer>`<br />
Out of bounds distance behind(?) spawn. *Todo: What does this actually do?*


**Radius** `<integer>`<br />
Functionality depends on `Type`. Must be positive. Defaults to 0.


**SearchTopDown** `<boolean>`<br />
If true, players will spawn on the highest valid block rather than the lowest. Defaults to false.


**Indoors** `<boolean>`<br />
If true, always spawn a player under a block. Defaults to false.

### Example
```json
"TeamSpawns": [
    {
        "GameMode": "all",
        "Type": "box",
        "Team": 0,
        "Min": [ 0, 0, 0 ],
        "Max": [ 1, 1, 1 ],
        "OOBDistance": 40,
        "Radius": 0,
        "SearchTopDown": false,
        "Indoors": false
	}
],
```

## SpawnCamera
Configuration regarding the spawn camera. Separate attributes for team 0 and team 1.

### Fields
**Type** `<string>`<br />
All values for this are unknown. `pan` seems to be valid.


**Yaw** `<float>`<br />
Yaw rotation in radians.


**Position** [`<position>`](types/position.md)<br />
List of 3 integers. Default position of camera. Doesn't seem to work anymore.

### Example
```json
"SpawnCamera0": {
		"Type": "pan",
		"Yaw": 0,
		"Position": [ 93, 128, 48 ] // BROKEN
},
"SpawnCamera1": {
	    "Type": "pan",
	    "Yaw": 0,
	    "Position": [ 208, 128, 60 ] // BROKEN
},
```

## Min/MaxSpawnHeight
Maximum/Minimum Y level players can spawn at. Useful for maps like Railway or Corahk Canyon.

**MinSpawnHeight** `<integer>`<br />

**MaxSpawnHeight** `<integer>`