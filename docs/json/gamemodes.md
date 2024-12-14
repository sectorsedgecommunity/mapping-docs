---
title: Game modes
prev: false
next: false
---

# Game modes
There are currently 11 game modes in Sector's Edge. This page lists the minimum requirements to play a game mode on a map.

## Breakthrough
Breakthrough has 2 teams compete for control over static capture zones.
- 2 valid `TeamSpawns` with the `brk` or `all` GameMode field
- At least 2 `LinearZones`

## Control Shift
Control Shift has one capture zone that shifts depending on teams' control.
- At least 2 `LinearZones`

## Capture the Flag
Capture the Flag has 2 teams try to steal and claim each others' flags. First to 3 captures wins.
- 2 valid `TeamSpawns` with the `ctf` or `all` GameMode field
- One valid `FlagSpawns` for both teams

## Escort
Escort is reversed Capture the Flag. 2 teams attempt to deliver their own flags to the other's flag zone.
- 2 valid `TeamSpawns` with the `esc` or `all` GameMode field
- One valid `FlagSpawns` for both teams

## Free for all
- Always here

## Gun Game
Gun Game has players kill each other to change weapons, scaling with difficulty of weapons and ending on the Digger(?). FFAPlayerSpawns are used, if available.
- Always available

## Head Hunter
Head Hunter has players kill each other to earn Soltrium, which they drop 50% (rounded up) of on death.
- A valid `WeaponSpawns` setup
- FFAPlayerSpawns is setup
- Team spawns for "ffa" or "all" GameMode

## Rush
Rush has 2 Rush Objectives, which one team attempts to arm and then protect until detonation. The other team attempts to keep the Rush Objectives from exploding by protecting objectives or defusing an armed Rush Objective. Armed Rush Objectives have a 15 second countdown until detonation.
- At least 2 Rush Objectives in at least 1 stage

## Salvage
Salvage was a game mode in which 2 teams fight over harvesting meteors that fall mid-game. Salvage was removed from the game to be replaced by another similar game mode that never released.
- `MeteorBottom` attribute is set correctly
- `MeteorTop` attribute is set correctly
- `MeteorBreachChance` attribute is set correctly
- `MeteorSpawnSpread` attribute is set correctly
- `MeteorLineStart` attribute is set correctly
- `MeteorLineEnd` attribute is set correctly
- An index with the `meteor` block attribute
- An index with the `meteordepleted` block attribute. This block attribute no longer exists.

## Static
::: warning
As of 2.4.6b, Static no longer has a hardcoded map size. However, `TeamSpawns` isn't properly checked, meaning previously incompatible maps can be selected for Static. When an incompatible map with Static loads on a server, the server will crash. (needs testing)
:::
Static has 2 teams duel in a small arena with randomized loadouts. First team to 5 round wins, wins the match. Destruction and player structures are retained after a round.
- 2 valid `TeamSpawns` with the `sta` GameMode field


## Team Deathmatch
Team Deathmatch has 2 teams kill each other. That's it.
- Always there for you
