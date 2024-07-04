# Game modes
There are currently 11 game modes in Sector's Edge. This page lists the minimum requirements for all game modes.

## [Control Shift](/json/gamemodes/cs.md)
- At least 2 `LinearZones`

## [Breakthrough](/json/gamemodes/brk.md)
- At least 2 `LinearZones`
- 2 valid `TeamSpawns` with the `brk` or `all` GameMode attribute

## [Static](/json/gamemodes/sta.md)
- Map X and Z size is 96, 160, respectively

## [Capture the Flag](/json/gamemodes/ctf.md)
- 2 valid `TeamSpawns` with the `ctf` or `all` GameMode attribute
- One valid `FlagSpawns` for both teams

## [Escort](/json/gamemodes/esc.md)
- 2 valid `TeamSpawns` with the `esc` or `all` GameMode attribute
- One valid `FlagSpawns` for both teams

## [Rush](/json/gamemodes/rush.md)
- At least 2 Rush Objectives in at least 1 stage

## [Head Hunter](/json/gamemodes/hh.md)
- A valid `WeaponSpawns` setup

## [Gun Game](/json/gamemodes/gg.md)
- Always available

## [Free for all](/json/gamemodes/ffa.md)
- Always here

## [Team Deathmatch](/json/gamemodes/tdm.md)
- Always there for you

## [Salvage](./json/gamemodes/sal.md)
Salvage meteors no longer spawn, leaving the mode unplayable. The attributes remain in the `json` file.

- `MeteorBottom` attribute is set correctly
- `MeteorTop` attribute is set correctly
- `MeteorBreachChance` attribute is set correctly
- `MeteorSpawnSpread` attribute is set correctly
- `MeteorLineStart` attribute is set correctly
- `MeteorLineEnd` attribute is set correctly
- An index with the `meteor` attribute