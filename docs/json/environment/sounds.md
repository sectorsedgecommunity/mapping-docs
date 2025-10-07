---
title: Sounds
prev: false
next: false
---

# Sounds
Sounds are a small but important part of a map. If no sounds are playing, the map can feel empty and unsettling. Ambient sounds are automatically muffled if a player is deemed to be indoors.

## AmbienceSound
**AmbienceSound** `<list>`<br />
Multiple ambient sounds can play at different altitudes. See below for available sounds.

```json
"AmbienceSound": [
    {
        "Type": "wind", // sound
        "Steps": [
            {
                "Altitude": 0, // Y coordinate
                "Volume": 0.3 // 0.0-1.0
            }
        ]
    }, // add more...
]
```

| Name           |
|:--------------:|
| wind           |
| rumble         |
| jungle         |
| ice            |
| underwater     |
| underwatercold |

## UnderwaterSound
**UnderwaterSound** `<sound>`<br />
Some snowy official maps use `underwatercold`. Defaults to `underwater`. See table above for available sounds.