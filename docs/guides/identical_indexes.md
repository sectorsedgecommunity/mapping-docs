---
editLink: false
prev: false
next: false
---

# Creating visually identical indexes
::: tip
There is no real use case for having identical indexes in a map.
:::
It is possible to have two or more indexes with the same look in-game. To do this, use block attributes that can loop or look functionally identical.

## `Offset` method
Using `Offset`, increase the offset on an axis by a multiple of the index's `Size` value. This outputs a visually identical block with differing indexes.

## `HSL` method
This method isn't actually identical, but it can be used for detailing. Using `HSL`, you can do slight variance in any of the three values. PadreToto recommends using small lightness variation for detailing in some cases.

## Example
Example of two visually identical indexes.

### Gray crate
Normal crate
```json
{
    "Note": "Gray offset crate",
    "Name": "crategrey",
	"Index": 1,
	"Size": 4
},
```
Identical crate
```json
{
    "Note": "Gray offset crate",
    "Name": "crategrey",
	"Index": 2,
	"Size": 4,
	"Offset": [ 0, 4, 0 ]
},
```

Guide created by RainlessSky