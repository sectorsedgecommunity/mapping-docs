---
title: Sun
prev: false
next: false
---

# Sun
There is no way to disable sunlight on its own.
::: info
Bare Minimum rendering renders everything in shadow. Design everything to work in shade and without block lights.
:::

### Fields
**SunColour** [`<rgb>`](../types/rgb.md)<br />
RGB color of the sunlight. Dark colors aren't ideal.


**SunRotation** [`<rotation>`](../types/rotation.md)<br />
List of two floats. Positions the sun in the sky in radians.
::: warning
Setting SunRotation values within 0.25 of a cardinal direction causes flickering or inaccurate shading on block faces.
:::


**SunDiffuseStrength** `<float>`<br />
The strength of the sunlight. Must be greater than zero. Defaults to 0.001.


**SunDistance** `<float>`<br />
Affects crepuscular rays.