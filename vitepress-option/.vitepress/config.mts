import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TIL Vitepress",
  description: "Things I Learned Today",
  lastUpdated: true,
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'TILs', link: '/til' }
    ],

    sidebar: [
      { text: 'TIL', link: '/til' },
      {
        text: 'Docker',
        collapsed: true,
        items: [
          { text: 'Remove Container When It Exits', link: '/docker/remove-container-when-it-exits' }
        ]
      },
      {
        text: 'Linux',
        collapsed: true,
        items: [
          {
            text: 'Fedora',
            collapsed: false,
            items: [
              { text: 'Fix clear command not found', link: '/linux/fedora/fix-clear-command-not-found' }
            ]
          }
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    search: {
      provider: 'local'
    },

    lastUpdated: {
      formatOptions: { dateStyle: 'medium' }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
