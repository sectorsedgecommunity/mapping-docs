---
title: WeaponSpawns
prev: false
next: false
---

# WeaponSpawns
Configuration for groups of weapons spawned in Head Hunter. WeaponSpawns is required for Head Hunter to be a valid game mode on a map.

```json
// This is the first config used on Shrine.
"WeaponSpawns": [ // List of individually configured positions where weapons spawn
	{
		"Name": "Central Shrine", // Human-readable name to describe the location
		"Position": [256, 288], // X Z coordinates. Always spawns on the lowest space available
		"Weapons": 16, // Initial spawned weapon count
		"Mods": 14, // Initial spawned weapon count
		// Spawns the first item at a random point MinRadius away from the center and the last item at a random point MaxRadius away from the center, and the rest between.
		"MinRadius": 0, // Minimum radius for spawning weapons & suit modifications
		"MaxRadius": 24, // Maximum radius for spawning weapons & suit modifications

		// LIKELY BROKEN
		// Each time interval seconds passes, there's a Chance percentage that the server will spawn Weapons2 weapons and Mods2 suit mods. Recommended to set this to a pretty long amount of time and low amount of weapons/mods so there aren't 8 million weapons by the end of a round
		"interval": 60, // Integer
		"Chance": 1, // Float
		"Weapons2": 2, // Integer
		"Mods2": 1 // Integer
	},
    // Add more...
],
```