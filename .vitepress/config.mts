import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  
  title: "Croma",
  description: "Documentation for the Croma Discord bot",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: [
      {
        text: 'Croma',
        items: [
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Strike System', link: '/strike-system' },
          { text: 'Automod', link: '/automod' },
          { text: 'Croma Pro', link: '/croma-pro' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Perditum/Croma' }
    ]
  }
})
