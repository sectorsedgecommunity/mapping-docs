---
title: Sun
prev: false
next: false
---

# Sun
There is no way to disable sunlight on its own.
::: warning
Setting SunRotation values within 0.25 of a cardinal direction causes flickering or inaccurate shading on block faces.
:::

### Fields
**SunColour** `<rgb>`
RGB color of the sunlight. Dark colors aren't ideal.

**SunRotation** `<list>`
List of two floats. Positions the sun in the sky in radians.

**SunDiffuseStrength** `<float>`
The strength of the sunlight. Must be greater than zero. Defaults to 0.001.

**SunDistance** `<float>`
Affects crepuscular rays.