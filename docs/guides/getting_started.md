# Getting Started
This is a simple guide to getting a first map functional.


### Requirements

The first and only requirement is to download the voxel editor [MagicaVoxel](https://ephtracy.github.io/).


### Preparation in MagicaVoxel

The corner of your map must be aligned with the center of the grid in MagicaVoxel, with the green arrow pointing forwards and the red arrow pointing to the right:

<div style="justify-content: center; display: flex; margin-top:10px; font-size: 13px; margin-bottom: 40px">
<p align="center">
<img src="/alignment_new.png" alt="MagicaVoxel Alignment"/>
<br/><i>Top-down view of a map</i>
</p></div>

Sector's Edge uses the red arrow as forwards on the minimap. This is why maps such as Railway have a map size of `[ 256, 96, 768]`.


### Make your map playable

To add a map in-game, go to `Play → Singleplayer` and click on the folder icon to the right of the search bar. This will open the workshop folder.

<div style="justify-content: center; display: flex; margin-top:10px; font-size: 13px; margin-bottom: 40px">
<p align="center">
<img src="/folderbutton.png" alt="In-game workshop folder icon"/>
<br/><i>Workshop folder button</i>
</p></div>

Create a new folder and give it a name, then place your `.vox` file in it. Maps must also have an accompanying `.json` file, which contains metadata for textures, lights, spawn regions, etc.
You can find a template `json` file in the **Create your first map** section.

If there are any errors or missing fields in your `json` metadata file, they will appear in game on the map list. Clicking the refresh icon will cause all files to be reloaded and the error list will update.

<div style="justify-content: center; display: flex; margin-top:10px; font-size: 13px; margin-bottom: 40px">
<p align="center">
<img src="/errors.png" alt="JSON errors"/>
<br/><i>JSON errors</i>
</p></div>


### Uploading maps

To upload a map folder to the workshop, it must have a `.json`, `.vox` and `preview.jpg` file. The `preview.jpg` file should be a screenshot you've taken of your map.

<div style="justify-content: center; display: flex; margin-top:10px; font-size: 13px; margin-bottom: 40px">
<p align="center">
<img src="/folderexample.png" alt="Map folder example"/>
<br/><i>Map folder example</i>
</p></div>


When you have these files ready, the **upload** button will light up. Select a visibility (private, friends only, unlisted, public) and then click the upload button.

<div style="justify-content: center; display: flex; margin-top:10px; font-size: 13px; margin-bottom: 40px">
<p align="center">
<img src="/uploadbutton.png" alt="Upload button"/>
<br/><i>Upload button</i>
</p></div>

Note that each map file can be changed after your map is uploaded to the workshop. To re-upload your map, simply click the upload button again.


### Template files

Download these template files and place them in the `/workshop/maps/myFirstMap` folder:

* [map_template.vox](/Map_Template.vox){target="_self"}
* [map_template.json](/map_template.json)