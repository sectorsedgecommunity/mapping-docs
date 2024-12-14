---
title: Basic map info
prev: false
next: false
---

# Basic map info
This is the basic info about a map, such as its name, description, and dimensions.  Linear map dimensions are often X=256 Z=768. Maps also require [`TeamSpawns`](/json/teamspawns.md).

::: info
`Allegiance` is optional, only serving to customize music. This may not even work anymore though. Valid values are: `devoid`, `aegis`, `corahk`, `helix`, `irridyne`, `nova`, `soltec`, `terra`.
:::

```json
"Name": "Map name",
"Description": "Map description\nCreated by: map author(s)",
"MapSize": [ 256, 96, 768 ],
```