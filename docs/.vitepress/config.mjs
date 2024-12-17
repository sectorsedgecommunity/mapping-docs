import { defineConfig } from 'vitepress'

export default defineConfig({
  head: [['link', { rel: 'icon', href: '/mapping-docs/se_logo.svg' }]],
  title: "Mapmaking Documentation | Sector's Edge Community",
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
          { text: 'JSON file', link: '/json.md', collapsed: true, items: [
            { text: 'Basic map info', link: '/json/basic_map_info.md' },
            { text: 'BlockTexturesV2', link: '/json/blocktexturesv2.md' },
            { text: 'Environment', link: '/json/environment.md' },
            { text: 'Game modes', link: '/json/gamemodes.md', collapsed: true, items: [
              { text: 'ArenaForcefieldAltitude', link: '/json/gamemodes/arenaforcefieldaltitude.md' },
              { text: 'CanisterSpawns', link: '/json/gamemodes/canisterspawns.md' },
              { text: 'Control Shift settings', link: '/json/gamemodes/control_shift_settings.md' },
              { text: 'FFAPlayerSpawns', link: '/json/gamemodes/ffaplayerspawns.md' },
              { text: 'FlagSpawns', link: '/json/gamemodes/flagspawns.md' },
              { text: 'LinearZones', link: '/json/gamemodes/linearzones.md' },
              { text: 'RushStages', link: '/json/gamemodes/rushstages.md' },
              { text: 'Salvage settings', link: '/json/gamemodes/salvage_settings.md' },
              { text: 'WeaponSpawns', link: '/json/gamemodes/weaponspawns.md' }
            ]
            },
            { text: 'Grass', link: '/json/grass.md' },
            { text: 'InvincibleMin/Max', link: '/json/invincibleminmax.md' },
            { text: 'Minimap fields', link: '/json/minimap_fields.md' },
            { text: 'Particles', link: '/json/particles.md' },
            { text: 'Reverb', link: '/json/reverb.md' },
            { text: 'Removed fields', link: '/json/old_fields.md' },
            { text: 'TeamSpawns', link: '/json/teamspawns.md' }
          ]
          },
          { text: 'Multiplayer support', link: '/multiplayer.md' },
          { text: 'Resources and guides', link: '/resources.md', collapsed: true, items: [
            { text: 'Bare minimum map JSON', link: '/guides/bare_minimum.md' },
            { text: 'Getting Started', link: '/guides/getting_started.md' },
            { text: 'How to contribute', link: '/guides/how_to_contribute.md' },
            { text: 'How to create identical indexes', link: '/guides/identical_indexes.md' },
            { text: 'Map making PDF', link: '/guides/pdf.md' },
            { text: 'Worldpainter to MagicaVoxel', link: '/guides/worldpainter.md' }
          ]
          }
        ]
      }
    ],
    editLink: {
      pattern: 'https://github.com/sectorsedgecommunity/mapping-docs/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    footer: {
      message: 'Made with ❤ by the Sector\'s Edge community'
    }
  }
})
