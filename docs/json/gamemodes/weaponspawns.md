---
title: WeaponSpawns
prev: false
next: false
---

# WeaponSpawns
Configuration for weapon spawning used in Head Hunter. WeaponSpawns is required for Head Hunter to be a valid game mode on a map.

```json
// This is the first config used on Shrine.
"WeaponSpawns": [ // List of individually configured positions where weapons spawn
	{
		"Position": [256, 288], // X Z coordinates
		"Weapons": 16, // Maximum # of weapons that can be spawned
		"Mods": 14, // Maximum # of suit modifications that can be spawned
		"MinRadius": 0, // Minimum radius for spawning weapons & suit modifications
		"MaxRadius": 24, // Maximum radius for spawning weapons & suit modifications
		"interval": 60, // LIKELY BROKEN: Probably interval for spawning weapons, in seconds
		"Chance": 1, // LIKELY BROKEN: >0.0-1.0 (0%-100%) chance to spawn weapons & suit modifications
		"Weapons2": 2, // BROKEN: Is included in weapon/mod amount check though
		"Mods2": 1, // BROKEN: Is included in weapon/mod amount check though
		"Name": "Central Shrine" // Human-readable name to describe the location
	},
    // Add more...
],
```