---
title: Control Shift settings
prev: false
next: false
---

# Control Shift settings
```json
// ControlShiftSpawnOverrideMin: If not -1, both team's spawn positions will always start at this XYZ value.
// ControlShiftSpawnOverrideMax: If not -1, both team's spawn positions will always end at this XYZ value.
// ControlShiftSpawnOffset: How far to push spawns back from the zone. 1 equals the length of the entire zone. Defaults to 0.25.
// ControlShiftCaptureTime: LIKELY BROKEN: How long it takes to capture the zone, in seconds.
// ControlShiftIncludesSpawns: LIKELY BROKEN: If the zone controls location of spawns.

// The example values for ControlShiftSpawnOverrideMin/Max are what Crossing uses to make the spawns cover the whole width of the map.
"ControlShiftSpawnOverrideMin": [6, -1, -1],
"ControlShiftSpawnOverrideMax": [250, -1, -1],
"ControlShiftSpawnOffset": 0.25,
"ControlShiftCaptureTime": 10, // LIKELY BROKEN
"ControlShiftIncludesSpawns": false, // LIKELY BROKEN
```