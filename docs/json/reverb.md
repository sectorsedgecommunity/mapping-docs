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
	"Outdoor": "forest"
},
```