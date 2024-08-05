---
editLink: false
---

# Bare minimum JSON file
This guide covers the bare minimum required in a map `json` file.

All maps require a `Name`, `Description`, `MapSize`, `BlockTextures` or `BlockTexturesV2` (V2 recommended), and `TeamSpawns`.


### Examples
Basic map info example
```json
"Name": "Map name",
"Description": "Map description\nCreated by: map author(s)",
"MapSize": [ 256, 96, 768 ],

// TeamSpawns example
"TeamSpawns": [
	{
		"GameMode": "all",
		"Type": "box",
		"Team": 0,
		"Min": [ 0, 0, 0 ],
		"Max": [ 1, 1, 1 ]
	},
	{
		"GameMode": "all",
		"Type": "box",
		"Team": 1,
		"Min": [ 0, 0, 0 ],
		"Max": [ 1, 1, 1 ]
	} 
],

// BlockTexturesV2 example
"BlockTexturesV2": [
    {
        "Note": "Example texture",
        "Name": "concrete",
		"Index": 1
	}
],
```

Guide created by RainlessSky