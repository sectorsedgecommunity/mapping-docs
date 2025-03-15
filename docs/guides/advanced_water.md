---
title: Advanced water
editLink: false
prev: false
next: false
---

# Advanced water
This guide covers how to use `MinWaterLevel`, `MaxWaterLevel`, and `WaterRiseSpeed` in multiple unique ways.

## Setup rainfall
To use `WaterRiseSpeed`, it must be currently raining. Why? I don't know. While setting up your map's config, set `RainStartMin` and `RainStartMax` to the following:
```json
"RainStartMin": 3,
"RainStartMax": 3,
```
This will always begin rainfall after 3 seconds. Keep in mind whenever the `.json` file is reloaded, you must reopen the map for rainfall to begin again.

## Normal rising water level
To have a slightly more dynamic gameplay experience, you can use `WaterRiseSpeed` as it is intended to be used: very subtly. A good example of the intended use case is Soltrium Temple. Here is the rain start and rise speed from it.
```json
"RainStartMin": 700,
"RainStartMax": 900,
"WaterRiseSpeed": 0.000015,
```
This causes the water level to rise by 0.015 blocks/sec for the last 5:00-8:20 of a match. The highest possible amount of water rise is 7.5 blocks.

## Faster rising water level
Let's say you wanted players to seek high ground across a significant portion of the match. You can achieve this by having the water level rise starting after 10:00-15:00 at 0.05 blocks/sec.
```json
"RainStartMin": 600,
"RainStartMax": 900,
"WaterRiseSpeed": 0.00005,
```
This is 3 blocks/minute, covering a minimum of 30 blocks and a maximum of 45 blocks of additional height. Rather challenging to build a map so tall, right?

## Limited ascending water height
Using `MaxWaterLevel`, you can have both- a fast rising water level, and reasonable final water level.
```json
"RainStartMin": 600,
"RainStartMax": 900,
"WaterRiseSpeed": 0.0001,
"MaxWaterLevel": 50.3
```
This setup, while starting at the same time as the previous one, rises at double the speed. The water level is kept under control because the maximum height is limited to y=50. Make sure to change `MaxWaterLevel` for your specific use case.

## Limited descending water height
I recently discovered that `WaterRiseSpeed` is allowed to be negative, and works just fine. Why not use it then? Put a limit on how far it can descend with `MinWaterLevel` and it's novel to see.
```json
"RainStartMin": 600,
"RainStartMax": 900,
"WaterRiseSpeed": -0.00005,
"MinWaterLevel": 5.3
```
Starts raining after 10:00-15:00. Water level descends at 0.05 blocks/sec (3 blocks/min), and stops at y=5.3. Usually for descending water height you'll want to limit it to within the playable area, because there isn't really any value in having inaccessible water.

Guide created by RainlessSky 