---
title: LinearZones
prev: false
next: false
editLink: true
---

# LinearZones
LinearZones are used in Breakthrough and Control Shift to mark where a zone should be.
The Control Shift zone always chooses the most direct path between LinearZones, so you may want to add corner zones if the intended path is around a corner. Additionally, the zone will also change scale to match the nearest LinearZone.
```json
"LinearZones": [
	{
		"Type": "box",
		"Min": [ 1, 1, 1 ],
		"Max": [ 2, 2, 2 ]
	},
	{
		"Type": "box",
		"Min": [ 5, 1, 5 ],
		"Max": [ 6, 2, 6 ]
	}, // More LinearZones...
],
```