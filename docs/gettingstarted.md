# Getting Started

This is a simple guide to getting a first map functional.


## Requirements

The first step is to download the voxel editor [MagicaVoxel](https://ephtracy.github.io/). That's it!


## Preparing maps

The corner of your map must be aligned with the center of the grid in MagicaVoxel, with the green arrow pointing upwards and the red arrow pointing to the right:

<img src="./public/alignment.png" alt="MagicaVoxel Alignment"/>
<div style="justify-content: center; display: flex; margin-top:10px; font-size: 13px; margin-bottom: 40px">
    <span><i>Top-down view of a map</i></span>
</div>
 

## Make your map appear in-game

To add a map in-game, go to `Play → Singleplayer` and click on the folder icon to the right of the search bar. This will open the workshop folder.

<img src="./public/folderbutton.png" alt="In-game workshop folder icon"/>
<div style="justify-content: center; display: flex; margin-top:10px; font-size: 13px; margin-bottom: 40px">
    <span><i>In-game workshop folder icon</i></span>
</div>

Create a new folder and give it a name, then place your `.vox` file in it. Maps must also have an accompanying `.json` file, which contains metadata for textures, lights, spawn regions, etc.
You can find a template `json` file in the **Create your first map** section.

If there are any errors or missing fields in your `json` metadata file, they will appear in game on the map list. Clicking the refresh icon will cause all files to be reloaded and the error list will update.

<img src="./public/errors.png" alt="JSON errors"/>
<div style="justify-content: center; display: flex; margin-top:10px; font-size: 13px; margin-bottom: 40px">
    <span><i>JSON errors</i></span>
</div>


## Uploading maps

To upload a map folder to the workshop, it must have a `.json`, `.vox` and `preview.jpg` file. The `preview.jpg` file should be a screenshot you've taken of your map.

<div style="justify-content: center; display: flex;">
    <img src="./public/folderexample.png" alt="Map folder example"/>
</div>
<div style="justify-content: center; display: flex; margin-top:10px; font-size: 13px; margin-bottom: 40px">
    <span><i>Map folder example</i></span>
</div>


When you have these files ready, the **upload** button will light up. Select a visibility (private, friends only, unlisted, public) and then click the upload button.

<img src="./public/uploadbutton.png" alt="Upload button"/>
<div style="justify-content: center; display: flex; margin-top:10px; font-size: 13px; margin-bottom: 40px">
    <span><i>Upload button</i></span>
</div>

Note that each map file can be changed after your map is uploaded to the workshop. To re-upload your map, simply click the upload button again.


## Template files

Download these template files and place them in the `/workshop/maps/myFirstMap` folder:

* [map_template.vox](./public/Map_Template.vox)
* [map_template.json](./public/map_template.json)