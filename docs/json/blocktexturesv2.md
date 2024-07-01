# Json file → BlockTexturesV2

Here is an example BlockTexturesV2 setup which shows all possible values. You can copy into your own maps and edit it. Remove the comments when you copy this into your map.

```json
"BlockTexturesV2": [
    {
        // Note: optional, used to describe an index
        // Name: optional if HSL/RGB/RGBA is set, name of texture; list of textures is below. Not setting a Name is fine when a color field is set
        // HSL/RGB/RGBA: optional if Name is set, used to color a texture. Soltrium HSL: [ 0.5444, 1, 0.48 ]

        // **Attributes: explosive, light-fade, light-on-brightness, floating, invincible, transparent, ice, meteor (unused)**
        //
        // **explosive**: Block explodes if damaged; uses ExplosionRadius as the radius
        // **light-fade**: Fades the light instead of immediately removing light
        // **light-on-brightness**: brightness is the brightness of the light. <1.0 is recommended
        // **floating**: allows index and anything attached to float
        // **invincible**: makes index impossible to break
        // **transparent**: makes index transparent. use RGBA to control how translucent it is
        // **ice**: adds a distortion effect when looking through index
        // **meteor**: unused, was previously used in Salvage for the meteor

        // ExplosionRadius is the radius of the explosion, in blocks. This is only used when the `explosive` attribute is set
        // Bloom: 0.0-1.0
        // Health: 0-255; block health
        // Armour: forgot what this exactly does; it was something like damage*armour
        "Note": "Example index",
        "Name": "concrete",
        "HSL": [ 0.0, 0.0, 0.0 ],
        "Attributes": "",
        "ExplosionRadius": 0,
        "Bloom": 1.0,
        "Health": 8,
        "Armour": 0.3
    }
],
```

## Textures list
<img src="/public/textures.png" alt="Textures list"/>
<div style="justify-content: center; display: flex; margin-top:10px; font-size: 13px; margin-bottom: 40px">
    <span>Textures list</span>
</div>