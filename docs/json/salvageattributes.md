---
title: Salvage Attributes
---

# Json file → Salvage Attributes
Salvage game mode still has attributes in the `json` file but isn't functional in-game. 
You can copy into your own maps and edit it. Remove the comments when you copy this into your map.

```json
// MeteorBottom: Lowest Y level a meteor can land on
// MeteorTop: Highest Y level a meteor can land on
// MeteorBreachChance: 0.0-1.0 chance that a meteor can fall into and destroy ground. Never goes below MeteorBottom
// MeteorSpawnSpread: Likely spread from MeteorLineStart & MeteorLineEnd
// MeteorLineStart & MeteorLineEnd: A line where meteors can fall on
"MeteorBottom": 30,
"MeteorTop": 40,
"MeteorBreachChance": 0.35,
"MeteorSpawnSpread": 10,
"MeteorLineStart": [0, 124],
"MeteorLineEnd": [128, 124],
```