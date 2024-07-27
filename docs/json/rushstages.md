---
title: RushStages
---

# RushStages
```json
"RushStages":	// Each object in the RushStages list is a Rush stage. Minimum 1 stage.
	[
		{	// First Rush stage
			"Areas":	// Areas: Another list that should contain all areas in a stage.
			[
				{
					"Name": "Stage 1, area 1", 	// Name: Names this position to help humans see where this is, when reading the JSON file.
					"Positions": [		// Positions: List of actual coordinates of where Rush Objectives spawn. This should be used to group nearby coordinates together.
						[ 1, 1, 1 ],
						[ 2, 2, 2 ]
					]
				},
				{
					"Name": "Stage 1, area 2",
					"Positions": [
						[ 2, 2, 2 ]
					]
				}
			],
			"SpawnReference": [ 510, 115 ]		// SpawnReference: Hint to the game where the attackers should be coming from. In-game XZ coordinate.
		},
		{	// Second Rush stage
			"Areas":
			[
				{
					"Name": "Stage 2, area 1",
					"Positions": [
						[ 1, 1, 1 ],
						[ 2, 2, 2 ],
						[ 3, 3, 3 ]
					]
				},
				{
					"Name": "Stage 2, area 2",
					"Positions": [
						[ 1, 1, 1 ],
						[ 2, 2, 2 ]
					]
				}
			],
			"SpawnReference": [ 510, 115 ]
		} // Add more Rush stages...	
	],
```