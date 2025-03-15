---
title: Salvage fields
prev: false
next: false
---

# Salvage fields
Salvage game mode still has fields in the `json` file but isn't playable in-game. This is because meteors do not spawn even if these fields are correctly set.

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

## `meteor` block attribute
The `meteor` block attribute marks the index as the block the meteor is made out of. There can only be one meteor index. In the past there was the `meteordepleted` block attribute for meteors that were depleted. (confirm this)

## CanisterSpawns
This would determine where canister locations in Old Salvage are. This no longer does anything, but is still a valid field.

The following setup is from one of Padre's old maps.
```json
"CanisterSpawns": [
    [
        {
            "Name": "Center", // Optional
            "Type": "box", // Probably only Box
            "Min": [ 162, 66, 131 ],
            "Max": [ 162, 66, 131 ],
        }
    ],
    [
        {
            "Name": "Center2",
            "Type": "box",
            "Min": [ 176, 27, 126 ],
            "Max": [ 176, 28, 126 ],
        }
    ],
    [
        {
            "Name": "Corner",
            "Type": "box",
            "Min": [ 222, 27, 19 ],
            "Max": [ 222, 29, 19 ], 
        }
    ],
    [
        {
            "Name": "Corner2",
            "Type": "box",
            "Min": [ 24, 28, 219 ],
            "Max": [ 24, 30, 219 ],
        }
    ],
    [
        {
            "Name": "Corner3",
            "Type": "box",
            "Min": [ 25, 25, 69 ],
            "Max": [ 25, 27, 69 ],
        }
    ]
],
```