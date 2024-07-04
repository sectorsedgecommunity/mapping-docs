# Bare-minimum JSON file
This page covers the bare minimum required in a map `json` file.

## Basic map info
All maps require a `Name`, `Description`, and `MapSize`.

## Team spawns
todo

## BlockTexturesV2
todo


## Examples
Basic map info example
```json
"Name": "Map name",
"Description": "Map description\nCreated by: map author(s)",
"MapSize": [ 256, 96, 768 ],
```

`TeamSpawns` example
```json
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
```