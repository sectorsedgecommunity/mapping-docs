---
title: FlagSpawns
---

# Json file → FlagSpawns
The game automatically creates a 7x7 area around flag spawns which players can capture flags in. Players can capture flags at any elevation within the 7x7 area. Make sure your maps have an indestructable floor underneath flags, as flags do not respawn if they fall into the void.
```json
	"FlagSpawns": [
	{
		"Team": 0,
		"Position": [ 1, 1, 1 ]
	},
	{
		"Team": 1,
		"Position": [ 10, 1, 10 ]
	}
],
```