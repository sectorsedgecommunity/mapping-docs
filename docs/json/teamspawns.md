# Json file → TeamSpawns

Here is an example TeamSpawn setup which shows all possible values. You can copy into your own maps and edit it. Remove the comments when you copy this into your map.

```json
"TeamSpawns": [
    {
            // GameMode: sta (Static), brk (Breakthrough), ctf (Capture the Flag), esc (Escort), all, sal (Salvage, non-functional game mode)
            //
            // ControlShiftSpawnOffset: Seperate from TeamSpawns. Default value is 0.2, i.e. 20%
            // Players spawn where the zone would be if the zone was shifted back X%
            //
            // Type: box, line, radius
            // Team: 0, 1
            // Min & Max: max must be greater than min, otherwise have glitchy spawn area
            // OOBDistance: out of bounds distance from the spawn: known to be used for BRK
            // SearchTopDown: searches top->down instead
        "GameMode": "all",
        "Type": "box",
        "Team": 0,
        "Min": [ 0, 0, 0 ],
        "Max": [ 1, 1, 1],
        "OOBDistance": 40,
        "SearchTopDown": false,
	}
],
```