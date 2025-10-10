---
title: Basic map info
prev: false
next: false
---

# Basic map info
This is the basic info about a map, such as its name, description, and dimensions.

## Fields
**Name** `<string>`<br />
Name of map. This is only displayed in the Singleplayer map selection and when map voting in multiplayer concludes.

**Description** `<string>`<br />
Description of map. This is only displayed in the Singleplayer map selection. `\n` can be used for new lines.

**MapSize** `<array>`<br />
Map dimensions must be divisible by 32. X and Z are limited to 2048, while Y is limited to 256. Linear map dimensions are often X=256 Z=768.