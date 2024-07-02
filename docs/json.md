# JSON file
Todo - Finish adding full JSON Schema

[`Game modes`](gamemodes.md)

[`Removed Attributes`](oldattributes.md)

## Attributes
[`BlockTexturesV2`](./json/blocktexturesv2.md)

[`TeamSpawns`](./json/teamspawns.md)

[`Particles`](./json/particles.md)

[`Weather`](./json/weather.md)

[`Salvage Attributes`](./json/salvageattributes.md)

[`AmbienceSound`](./json/ambiencesound.md)

## Tips
* You can use `\n` in the map description to start a new line. This is useful if you want to add additional sections to the map details. An example is adding `\nCreated by: username1, username2` to the end of the map description.
* Use official maps' `json` files as reference for what you can and can't do.
* Ask other people for help!

## Limitations
* Arena maps' X and Z (in-game) are hardcoded to `[ 96, 160 ]`. The Y axis is not hardcoded though.
* Rush and Breakthrough require at least 2 points.
* `grass` attribute does not appear in multiplayer when added in an unofficial map.
* Breakthrough and Control Shift game modes cannot be seperated
* Gun Game, Free for all, and Head Hunter game modes cannot be seperated
* You cannot upload a map to the Steam Workshop without a `preview.jpg`

## Example json file
[map_template.json](./public/map_template.json)