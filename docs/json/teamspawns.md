---
title: TeamSpawns
prev: false
next: false
editLink: true
---

# TeamSpawns
```json
"TeamSpawns": [
    {
        // GameMode: sta (Static), brk (Breakthrough), ctf (Capture the Flag), esc (Escort), all,
        //  sal. (Salvage, non-functional game mode)
        //
        // ControlShiftSpawnOffset: Seperate from TeamSpawns. Default value is 0.2, i.e. 20%.
        // Players spawn where the zone would be if the zone was shifted back X%.
        //
        // Type: point, line, box, free, radius(?)
        // Team: 0 or 1
        // Min & Max: max must be greater than min, otherwise have glitchy spawn area.
        // OOBDistance: Out of bounds distance behind(?) spawn.
        // SearchTopDown: True/false.Searches top→down instead.
        // Indoors: True/false. Always spawns a player under a block.
        "GameMode": "all",
        "Type": "box",
        "Team": 0,
        "Min": [ 0, 0, 0 ],
        "Max": [ 1, 1, 1],
        "OOBDistance": 40,
        "SearchTopDown": false,
        "Indoors": false
	}
],
```

```json
// As far as I know, official maps only use Yaw.
// Type: All valid values for this are unknown, but pan is often used.
// Yaw: A value of 3.145 is approximately 180 degrees. π!
// Position: ???
"SpawnCamera0": {
		"Type": "pan",
		"Yaw": 0,
		"Position": [ 93, 128, 48]
},
"SpawnCamera1": {
	    "Type": "pan",
	    "Yaw": 0,
	    "Position": [ 208, 128, 60]
},

// Maximum height players can spawn at. Useful for maps like Railway.
"MaxSpawnHeight": 70,

// This may work, needs testing.
"ControlShiftIncludesSpawns": false,
```