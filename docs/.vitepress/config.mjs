import { defineConfig } from 'vitepress'

export default defineConfig({
  head: [['link', { rel: 'icon', href: '/mapping-docs/favicon.ico' }]],
  title: "Sector's Edge Mapmaking Docs",
  description: "Mapmaking documentation for Sector's Edge",
  base: "/mapping-docs/",
  ignoreDeadLinks: true,
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    logo: { light: "/se-docs-dark.png", dark: "/se-docs-light.png", alt: "Sector's Edge Documentation" },
    siteTitle: false,
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/sectorsedgecommunity/mapping-docs' }
    ],
    sidebar: [
      {
        text: "Map Making",
        items: [
          { text: 'Getting Started', link: '/gettingstarted.md' },
          { text: 'JSON file', link: '/json.md', collapsed: true, items: [
            { text: 'Basic map info', link: '/json/basicmapinfo.md' },
            { text: 'BlockTexturesV2', link: '/json/blocktexturesv2.md' },
            { text: 'Environment', link: '/json/environment.md' },
            { text: 'FlagSpawns', link: '/json/flagspawns.md' },
            { text: 'Game modes', link: '/json/gamemodes.md' },
            { text: 'InvincibleMin/Max', link: '/json/invincibleminmax.md' },
            { text: 'LinearZones', link: '/json/linearzones.md' },
            { text: 'Minimap attributes', link: '/json/minimapattributes.md' },
            { text: 'Particles', link: '/json/particles.md' },
            { text: 'Removed attributes', link: '/json/oldattributes.md' },
            { text: 'RushStages', link: '/json/rushstages.md' },
            { text: 'TeamSpawns', link: '/json/teamspawns.md' }
          ]
          },
          { text: 'Multiplayer support', link: '/multiplayer.md' },
          { text: 'Resources', link: '/resources.md', collapsed: true, items: [
            { text: 'Bare minimum map JSON', link: '/guides/bareminimum.md' },
            { text: 'Map making PDF', link: '/guides/pdf.md' },
            { text: 'Worldpainter to MagicaVoxel', link: '/guides/worldpainter.md' },
          ]
          }
        ]
      }
    ]
  }
})
