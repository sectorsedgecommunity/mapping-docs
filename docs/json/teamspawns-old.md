---
title: TeamSpawns
prev: false
next: false
---

# TeamSpawns
You must have configs for team 0 and team 1 even in FFA game modes.
```json
// GameMode: String. Specifies game mode(s) this config affects. See below for values.
// Type: box, free, line, point
//     box: Uses Min, Max
//     free: Uses Radius for enemy distance check. Does not display spawn area effect
//     line: Uses Min and Max for end points, Radius for thickness.
//     point: Uses Radius and is centered around Min. If Min is missing, defaults [ 0, 0, 0 ]. Does not display spawn area effect
// Team: 0 or 1. Determines which team this config is affecting.
// Min & Max: List of 3 integers. Minimum and maximum coordinates a player can spawn at.
//     Max must be greater than min, otherwise have glitchy spawn area.
// OOBDistance: Integer. Out of bounds distance behind(?) spawn.
// Radius: Integer >0. Functionality depends on Type. Defaults to 0.
//     FFA game modes: minimum distance between players.
//     Type="line": Thickness of line
//     Type="point": Valid spawn radius around point
// SearchTopDown: Boolean. If true, players will spawn on the highest valid block. Defaults to false.
// Indoors: Boolean. If true, always spawn a player under a block. Defaults to false.
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
| GameMode value | Game mode               |
|:--------------:|:------------------------|
| sta            | Static                  |
| brk            | Breakthrough            |
| ctf            | Capture the Flag        |
| esc            | Escort                  |
| ffa            | Free for all game modes |
| all            | Any                     |

## SpawnCamera
```json
// Type: All values for this are unknown.
// Yaw: A value of 3.145 (1π) is approximately 180 degrees.
// Position: Doesn't seem to work anymore.
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
```json
// Maximum/Minimum Y level players can spawn at. Useful for maps like Railway or Corahk Canyon.
"MaxSpawnHeight": 70,
"MinSpawnHeight": 20
```