---
title: BlockTexturesV2
prev: false
next: false
---

# BlockTexturesV2
You can have a maximum of 255 indexes. 
```json
"BlockTexturesV2": [
    {
        // Note: optional, used to describe an index
        // Name: optional if HSL/HSLA/RGB/RGBA is set, name of texture; list of textures is below. Not setting a Name is fine
        //  when a color field is set.
        // Index: Determines which index in MagicaVoxel corresponds to this texture.
        // Offset: Per-axis offset for the texture. Used to align things like crate textures and Railway train textures.

        // HSL/RGB/RGBA: optional if Name is set, used to color a texture. Soltrium HSL: [ 0.5444, 1, 0.48 ]. Recommended to
        //  use RGB for flat textures and RGBA for glass.

        // Attributes: explosive, light-fade, light-on-brightness, floating, invincible, transparent, ice, meteor (unused)
        //
        // explosive: Block explodes if damaged; uses ExplosionRadius as the radius. Can be detonated by blocks with the conductor attribute.
        // light-fade: Fades the light instead of immediately removing light.
        // light-on-brightness: brightness is the brightness of the light. <1.0 is recommended.
        // floating: allows index and anything attached to float.
        // invincible: makes index impossible to break.
        // transparent: makes index transparent. use RGBA to control how translucent it is.
        // ice: adds a distortion effect when looking through index.
        // meteor: unused, was previously used in Salvage for the meteor.

        // ExplosionRadius: The radius of the explosion, in blocks. This is only used when the `explosive` attribute is set.
        // Bloom: 0.0-1.0.
        // Health: Block health; integer 0-255.
        // Armour: Probably damage*armour.
        // Damage: Amount of damage given to any player standing on the index. If set, 1 is always used in official maps.
        //  Non-negative integer.
        "Note": "Example texture",
        "Name": "concrete",
        "Offset": [ 0, 0, 0 ],
        "Index": 1,
        "HSL": [ 0.0, 0.0, 0.0 ],
        "Attributes": "",
        "ExplosionRadius": 0,
        "Bloom": 1.0,
        "Health": 8,
        "Armour": 0.3,
        "Damage": 1
    }
],
```

### Examples
White light
```json
{
    "Note": "White light",
    "Index": 1,
    "Attributes": "light-on",
    "RGB": [255, 255, 255],
    "Bloom": 1
}
```

Soltrium
```json
{
    "Note": "Explosive soltrium",
    "Index": 1,
    "Attributes": "explosive light-fade",
    "HSL": [ 0.5444, 1, 0.48 ],
    "Bloom": 1
}
```

Glass
```json
{
    "Note": "Glass",
    "Index": 1,
    "Attributes": "transparent conductor",
    "RGB": [ 133, 184, 235 ]
}
```

Railway/Reactor lasers
```json
{
	"Note": "Laser",
	"Index": 1,
	"HSL": [0.45, 0.4, 0.8],
	"Bloom": 1,
	"Damage": 1
}
```

Crude 17x4 "Soltricoz" sign using the `cratesoltec` texture. You may need to adjust the `Offset`
```json
{
	"Note": "Soltricoz sign",
	"Index": 1,
	"Name": "cratesoltec",
	"Size": 47,
	"Offset": [ 23, 12, 0 ],
	"HSL": [ 0.45, 0.6, 0.4 ],
	"Health": 50,
	"Bloom": 0.2,
	"Attributes": "light-on-0.0001 conductor"
}
```

### Multiplayer attributes
The server sends multiple attributes which were previously undocumented.
```json
    // Default: No clue what this does. Might be if the index is in some form of master index pallete that Rocket uses?
    // ReceivedFromServer: Probably for loading maps if you have them saved to disk.
    // LayerID: No idea.
    // SideDirection: Probably the same as TopDirection. Defaults to up.
    // Custom: No clue what it does as well. Defaults to false.
{
    "Default": false,
    "ReceivedFromServer": true,
    "LayerID": 255,
    "SideDirection": "up",
	"Custom": false,
}
```

### Textures list
<img src="/textures.png" alt="Textures list"/>