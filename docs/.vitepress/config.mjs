import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Sector's Edge Mapping Docs",
  description: "Mapmaking documentation for Sector's Edge",
  base: "/mapping-docs/",
  themeConfig: {
    sidebar: [
      {
        text: "Map Making",
        items: [
          { text: 'Getting Started', link: '/gettingstarted.md' },
          { text: 'JSON file', link: '/json.md', items: [
            { text: 'BlockTexturesV2', link: '/json/blocktexturesv2.md' },
            { text: 'Game modes', link: '/gamemodes.md' },
            { text: 'Particles', link: '/json/Particles.md' },
            { text: 'Removed attributes', link: '/oldattributes.md' },
            { text: 'Salvage attributes', link: '/json/salvageattributes.md' },
            { text: 'TeamSpawns', link: '/json/teamspawns.md' },
            { text: 'Weather', link: '/json/Weather.md' }
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
