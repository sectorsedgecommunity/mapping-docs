# Game modes
There are currently 11 game modes in Sector's Edge. This page lists the minimum requirements for all game modes.

### Breakthrough
Breakthrough has 2 teams compete for control over set zones. Unlike Control Shift, the zones don't move.
- 2 valid `TeamSpawns` with the `brk` or `all` GameMode attribute
- At least 2 `LinearZones`

### Control Shift
Control Shift is like Breakthrough, but theres only one zone and it moves depending on the teams' control.
- At least 2 `LinearZones`

### Capture the Flag
Capture the Flag has 2 teams try to steal and bring back each others' flags.
- 2 valid `TeamSpawns` with the `ctf` or `all` GameMode attribute
- One valid `FlagSpawns` for both teams

### Escort
Escort is pretty much a reversed Capture the Flag. 2 teams attempt to deliver their own flags to each other.
- 2 valid `TeamSpawns` with the `esc` or `all` GameMode attribute
- One valid `FlagSpawns` for both teams

### Free for all
- Always here

### Gun Game
Gun Game has players kill each other to change weapons, scaling with difficulty of weapons and ending on the Digger(?).
- Always available

### Head Hunter
Head Hunter has players kill each other to earn Soltrium, which they drop 50% (rounded up) of on death.
- A valid `WeaponSpawns` setup

### Rush
Rush has 2 Rush Objectives, which one team attempts to arm and then protect until detonation. The other team attempts to keep the Rush Objectives from exploding by protecting prior to being armed or defusing an armed Rush Objective. Armed Rush Objectives have a 15 second countdown until detonation.
- At least 2 Rush Objectives in at least 1 stage

### Salvage
Salvage was a game mode in which 2 teams fight over harvesting meteors that fall mid-game. Salvage no longer works because meteors no longer spawn.
- `MeteorBottom` attribute is set correctly
- `MeteorTop` attribute is set correctly
- `MeteorBreachChance` attribute is set correctly
- `MeteorSpawnSpread` attribute is set correctly
- `MeteorLineStart` attribute is set correctly
- `MeteorLineEnd` attribute is set correctly
- An index with the `meteor` attribute

### Static
Static has 2 teams of 3 duel in a small arena with randomized loadouts.
- Map X and Z size is 96, 160, respectively


### Team Deathmatch
Team Deathmatch has 2 teams kill each other. That's it.
- Always there for you