---
title: Reverb
prev: false
next: false
---

# Reverb
Configuration for audio reverb. You can find a list of reverb settings in the Reverb tab of the Singleplayer menu.

```json
// MaxRoomSize: Useful for limiting reverb on maps like Laser Tag.
// MinIndoor: Minimum reverb setting for "indoor" areas
// MinIndoor: Maximum reverb setting for "indoor" areas
// Outdoor: Reverb setting for "outdoor" areas
"Reverb": {
	"MaxRoomSize": 15000,
    "MinIndoor": "paddedcell",
    "MaxIndoor": "wooden_hall",
	"Outdoor": "forest",

    // From the old mapmaking Discord server - this may not work because Room size in-game always displays 0.
    // For clarification, reverb is strongest when in a room with volume <= MinRoomVolume, and reverb is weakest when in a room with volume >= MaxRoomVolume, e.g. in Laser Tag I've reduced MaxRoomVolume to 2000000 to reduce reverb
    // Default values are:
    "MinRoomVolume": 200000,
    "MaxRoomVolume": 6000000
},
```