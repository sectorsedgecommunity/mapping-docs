# Json file → Particles
Back to: [`Json file`](/docs/json.md)

Here is an example Particles setup which shows all possible values. You can copy into your own maps and edit it. Remove the comments when you copy this into your map.

```json
"Particles": [
    {
        // Optional, to identify a particle if you want to duplicate it around
        "Name": "Example particle",
        // Physical - Ricochet, strong friction, gravity
        // Skid - Ricochet, low friction, no gravity
        // Smoke - Ricochet, medium friction, no gravity, velocity reduces over time
        // Soltrium - Phases through walls, no gravity; likely used when a voxel with the `explosive` attribute explodes
        "Type": "physical",

        // Spawn 2 particles every 500ms
        "Amount": 2,
        "Interval": 500,

        // Particles are spawned at each of these positions
        "Positions": [
             [ 1.0, 2.0, 3.0],   
        ],

        // Optional, The position in the array above will be removed when the respective block below is destroyed
        "Block": [
            [ 1, 2, 3],
        ],

        // Optional, Spawn particles randomly around each Position
        // e.g. in a 0.4 block radius around each Position in the X and Y axis
        // None - No spread
        // Sphere - Spherical spread
        // Box - Box spread
        "OffsetType": "none",
        "Offset": [ 0.0, 0.0, 0.0],

        // Optional, Spawn N particles in one random spot, rather than N particles each in random spots. Each particle still has random velocity
        "Clumped": true

        // Each particle's velocity = Velocity + (random value between -Deviation and Deviation)
        // i.e. X velocity is a random value between -0.005 and 0.005
        // i.e. Y velocity is a random value between 0 and 0.01
        // i.e. Z velocity is a random value between 0.005 and 0.015
        // Velocity is VERY strong, < 0.1 is often enough
        "Velocity": [0, 0.005, 0.01],
        "Deviation": [0.005, 0.005, 0.005],

        // RGBA colour of the particle (A represents bloom strength)
        "Colour": [200, 200, 200, 0],

        // [Physical | Skid] Minimum and max lifetime of this particle in milliseconds
        // When N particles are spawned, their lifetimes are evenly spread out across this range,
        // i.e. if 3 particles are spawned, the 1st will last 500ms, the 2nd will last 750ms and the 3rd will last 1000ms
        "Lifetime": {
            "Min": 500,
            "Max": 1000
        },

        // [Soltrium] Minimum and maximum multiplier for every frame the particle's scale is multiplied by
        // When N particles are spawned, their decay values are evenly spread out across this range,
        // i.e. if 3 particles are spawned, the 1st will lose 7% scale each frame, the 2nd will lose 6% scale each frame and the 3rd will lose 5% scale each frame
        "Decay": {
            "Min": 0.93,
            "Max": 0.95
        },

        // The scale (size) of the particle in voxels(?)
        "Scale": 0.1
    }
],
```