import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Sector's Edge Mapping Docs",
  description: "Mapmaking documentation for Sector's Edge",
  base: "/mapping-docs/",
  themeConfig: {
    sidebar: [
      {
        text: "Map Making",
        items: [{ text: 'Getting Started', link: '/index.md' },  { text: 'JSON Reference', link: '/json.md' }, { text: 'Multiplayer', link: '/multiplayer.md' }, { text: 'Community Guides', link: '/community.md' }, { text: 'External Resources', link: '/resources.md' }]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sectorsedgecommunity/mapping-docs' }
    ]
  }
})
