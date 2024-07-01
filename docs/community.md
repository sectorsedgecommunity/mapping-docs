# Community Guides
We share here guides that the community has created. 

## Links
The official mapmaking Discord server is an awesome resource for the `json` file and offers official map files to look at. **Do not reupload official map files.**
[Official Mapmaking Discord server](https://discord.gg/sJA3cs4DEV)

Our community Discord server is great for chatting and we organize events every now and then.
[Community Discord server](https://discord.gg/t5zhZRJ2w3)

## World Painter

What you will need:
- World Painter - https://www.worldpainter.net/
- MagicaVoxel (Of course 😉 )
- Place the below height.txt in your shader folder

How you do it:
- Build world in world builder
- Export as PNG
- open in paint, save as PNG (Yes even though it was exported as a PNG)
- Change color pallet to grayscale (Very important)
- Drag your saved PNG into MV
- Select the object and change Height to 256
- Select the console at the bottom and type xs height

height.txt shader
```c
// console commands
// 'xs height'

// shader inputs
// uniform vec3 	iVolumeSize;	// volume size [1-126]
// uniform float	iColorIndex;	// current color index [1-255]
// uniform vec3		iMirror;	// current mirror mode [0-1]
// uniform vec3		iAxis;		// current axis mode [0-1]

// uniform float	iFrame;		// current anim frame index
// uniform float 	iNumFrames;	// total num of anim frames

// uniform float 	iIter;		// current iteration index

// uniform vec4		iRand;		// random number
// uniform float	iArgs[8];	// user args

// built-in functions
// float voxel( vec3 v );		// get voxel color index at position v

// generate new voxel color index at position v
float map( vec3 v ) {
	float height = 255.0 - voxel( vec3( v.xy, 0.0 ) ); //depends on palette

	height = height * 0.5f - 1.0; // map to range [0 - 126]

	return ( v.z <= height ? iColorIndex : 0.0 );
}
```

Guide created by `Vhauss`

## Old Map Making guide

`Caspooky` and `Realkill` have created a guide for [Map Making](./MapMaking.pdf). This guide is out of date, but still covers basics on MagicaVoxel.