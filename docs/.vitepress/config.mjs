import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Mapping Documentation",
  logo: '/se-wiki-edit.png',
  description: "Mapmaking documentation for Sector's Edge",
  base: "/mapping-docs/",
  ignoreDeadLinks: true,
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    sidebar: [
      {
        text: "Map Making",
        items: [
          { text: 'Getting Started', link: '/gettingstarted.md' },
          { text: 'JSON file', link: '/json.md', collapsed: true, items: [
            { text: 'AmbienceSound', link: '/json/ambiencesound.md' },
            { text: 'Bare-minimum map JSON', link: '/json/bareminimum.md' },
            { text: 'BlockTexturesV2', link: '/json/blocktexturesv2.md' },
            { text: 'Game modes', link: '/gamemodes.md' },
            { text: 'Particles', link: '/json/particles.md' },
            { text: 'Removed attributes', link: '/oldattributes.md' },
            { text: 'Salvage attributes', link: '/json/salvageattributes.md' },
            { text: 'TeamSpawns', link: '/json/teamspawns.md' },
            { text: 'Water', link: '/json/water.md' },
            { text: 'Weather', link: '/json/weather.md' }
          ]
          },
          { text: 'Multiplayer support', link: '/multiplayer.md' },
          { text: 'Resources', link: '/resources.md' }
        ]
      }
    ],
    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sectorsedgecommunity/mapping-docs' }
    ]
  }
})
