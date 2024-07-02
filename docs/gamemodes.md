# Game modes
There are currently 11 game modes in Sector's Edge. This page lists the minimum requirements for all game modes.

## [Control Shift](/gamemodes/cs.md)
- At least 2 `LinearZones`

## [Breakthrough](/gamemodes/brk.md)
- At least 2 `LinearZones`
- 2 valid `TeamSpawns` with the `brk` or `all` GameMode attribute

## [Static](/gamemodes/sta.md)
- Map X and Z size is 96, 160, respectively

## [Capture the Flag](/gamemodes/ctf.md)
- 2 valid `TeamSpawns` with the `ctf` or `all` GameMode attribute
- One valid `FlagSpawns` for both teams

## [Escort](/gamemodes/esc.md)
- 2 valid `TeamSpawns` with the `esc` or `all` GameMode attribute
- One valid `FlagSpawns` for both teams

## [Rush](/gamemodes/rush.md)
- At least 2 Rush Objectives in at least 1 stage

## [Head Hunter](/gamemodes/hh.md)
- A valid `WeaponSpawns` setup

## [Gun Game](/gamemodes/gg.md)
- ???

## [Free for all](/gamemodes/ffa.md)
- Literally anything

## [Team Deathmatch](/gamemodes/tdm.md)
- ???

## [Salvage](./gamemodes/sal.md)
Although Salvage is no longer playable, the attributes remain in the `json` file.

- `MeteorBottom` attribute is set correctly
- `MeteorTop` attribute is set correctly
- `MeteorBreachChance` attribute is set correctly
- `MeteorSpawnSpread` attribute is set correctly
- `MeteorLineStart` attribute is set correctly
- `MeteorLineEnd` attribute is set correctly
- An index with the `meteor` attribute