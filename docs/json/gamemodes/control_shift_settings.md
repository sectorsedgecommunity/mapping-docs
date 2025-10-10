---
title: Control Shift settings
prev: false
next: false
---

# Control Shift settings
**ControlShiftSpawnOverrideMin** [`<position>`](types/position.md)<br />
If a coordinate is not -1, then both team's spawn positions will always start at the given X/Y/Z value.

**ControlShiftSpawnOverrideMax** [`<position>`](types/position.md)<br />
If a coordinate is not -1, then both team's spawn positions will always end at the given X/Y/Z value.

**ControlShiftSpawnOffset** `<float>`<br />
How far to push spawns back from the zone. 1 equals the length of the entire zone. Defaults to 0.25.

**ControlShiftCaptureTime** `<integer>`<br />
How fast the zone moves in half-seconds (needs testing). Defaults to 300.

**ControlShiftIncludesSpawns** `<boolean>`<br />
LIKELY BROKEN: If the zone controls location of spawns.