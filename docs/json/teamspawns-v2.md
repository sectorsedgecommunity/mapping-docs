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
**GameMode** \<string>
\nSpecifies game mode(s) this config affects.
  * sta: Static
  * brk: Breakthrough
  * ctf: Capture the Flag
  * esc: Escort
  * ffa: Free for All, Gun Game, Head Hunter
  * all: All game modes

\n**Type** \<string>
\nSpecifies shape and/or function of spawn.
  * box: Uses Min, Max.
  * free: Uses Radius for enemy distance check. Does not display spawn area effect.
  * line: Uses Min and Max for end points, Radius for thickness.
  * point: Uses Radius and is centered around Min. If Min is missing, defaults [ 0, 0, 0 ]. Does not display spawn area effect.\n

\n**Team** \<numeric boolean>
\nDetermines which team this config is affecting.

\n**Min & Max** \<list>
\nList of 3 integers. Minimum and maximum coordinates a player can spawn at. Max must be greater than min.

\n**OOBDistance** \<integer>
\nOut of bounds distance behind(?) spawn.

\n**Radius** \<integer>
\nInteger >0. Functionality depends on Type.
  * Defaults to 0.\n

\n**FFA game modes** \<integer>
\nMinimum distance between players.
  * Type="line": Thickness of line.
  * Type="point": Valid spawn radius around point.\n

\n**SearchTopDown** \<boolean>
\nIf true, players will spawn on the highest valid block. Defaults to false.

\n**Indoors** \<boolean>
\nIf true, always spawn a player under a block. Defaults to false.

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
\nConfiguration regarding the spawn camera. Separate attributes for team 0 and team 1.

### Fields
\n**Type** \<string>
\nAll values for this are unknown.

\n**Yaw** \<float>
\nA value of 3.145 (1π) is approximately 180 degrees.

\n**Position** \<list>
\nList of 3 integers. Default position of camera. Doesn't seem to work anymore.

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
```json
// Maximum/Minimum Y level players can spawn at. Useful for maps like Railway or Corahk Canyon.
"MaxSpawnHeight": 70,
"MinSpawnHeight": 20
```