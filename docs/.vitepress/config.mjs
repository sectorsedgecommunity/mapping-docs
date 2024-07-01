import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Sector's Edge Mapping Docs",
  description: "Mapmaking documentation for Sector's Edge",
  themeConfig: {
    sidebar: [
      {
        text: "Map Making",
        items: [{ text: 'Getting Started', link: '/index.md' },  { text: 'Reference', link: '/reference.md' }, { text: 'MagicaVoxel Usage', link: '/magicavoxel.md' }, { text: 'Community Guides', link: '/community.md' }, { text: 'External Resources', link: '/resources.md' }]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sectorsedgecommunity/mapping-docs' }
    ]
  }
})
