---
title: TeamSpawns
prev: false
next: false
---

# TeamSpawns
`TeamSpawns` determines spawns for teams (what a surprise right?). You must have configs for team 0 and team 1.
```json
"TeamSpawns": [
    {
        // GameMode: sta/brk/ctf/esc/ffa/all
        // Type: box, free, line, point
        //  point: uses Radius and is centered around Min. If Min is missing, defaults [ 0, 0, 0 ]
        // Team: 0 or 1
        // Min & Max: max must be greater than min, otherwise have glitchy spawn area.
        // OOBDistance: Out of bounds distance behind(?) spawn.
        // Radius: Likely used in FFA game modes as a minimum distance between players.
        // SearchTopDown: True/false. If true, searches top to bottom instead of bottom to top.
        // Indoors: True/false. If true, always spawn a player under a block.
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
| GameMode value | Game mode                              |
|:--------------:|:---------------------------------------|
| sta            | Static                                 |
| brk            | Breakthrough                           |
| ctf            | Capture the Flag                       |
| esc            | Escort                                 |
| ffa            | Free for all game modes (confirm this) |
| all            | Any                                    |

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