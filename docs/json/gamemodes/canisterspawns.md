---
title: CanisterSpawns
prev: false
next: false
---

# CanisterSpawns
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