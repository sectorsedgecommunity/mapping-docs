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