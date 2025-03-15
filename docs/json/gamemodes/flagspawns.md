---
title: FlagSpawns
prev: false
next: false
---

# FlagSpawns
::: warning
Make sure your maps have an invincible floor somewhere underneath flags, because flags don't respawn if they fall into the void.
:::
The game automatically creates a 7x7 area around flag spawns which players can capture flags in. Players can capture flags at any elevation within the 7x7 area.
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