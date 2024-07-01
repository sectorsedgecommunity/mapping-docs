# Json file → AmbienceSound
Back to: [`Json file`](/json.md)

You can copy into your own maps and edit it. Remove the comments when you copy this into your map.

```json
// Type: wind, rumble, jungle, ice. Vercidium stated `rain` and `ship` exist but it appears they don't
// Steps: what altitudes and volume the sound plays at
// Altitude: Y coordinate where the sound plays
// Volume: appears to be 0.0-1.0
    "AmbienceSound": [
        {
            "Type": "wind",
            "Steps": [
                {
                    "Altitude": 200,
                    "Volume": 0.3
                }
            ]
        }
    ],
```