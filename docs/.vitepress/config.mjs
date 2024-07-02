import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Sector's Edge Mapping Docs",
  description: "Mapmaking documentation for Sector's Edge",
  base: "/mapping-docs/",
  ignoreDeadLinks: true,
  cleanUrls: true,
  themeConfig: {
    sidebar: [
      {
        text: "Map Making",
        items: [
          { text: 'Getting Started', link: '/gettingstarted.md' },
          { text: 'JSON file', link: '/json.md', items: [
            { text: 'AmbienceSound', link: '/json/ambiencesound.md' },
            { text: 'BlockTexturesV2', link: '/json/blocktexturesv2.md' },
            { text: 'Game modes', link: '/gamemodes.md' },
            { text: 'Particles', link: '/json/particles.md' },
            { text: 'Removed attributes', link: '/oldattributes.md' },
            { text: 'Salvage attributes', link: '/json/salvageattributes.md' },
            { text: 'TeamSpawns', link: '/json/teamspawns.md' },
            { text: 'Water', link: '/json/weather.md' },
            { text: 'Weather', link: '/json/weather.md' }
          ]
          },
          { text: 'Multiplayer support', link: '/multiplayer.md' },
          { text: 'Resources', link: '/resources.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sectorsedgecommunity/mapping-docs' }
    ]
  }
})
