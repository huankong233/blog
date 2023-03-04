import { viteBundler } from '@vuepress/bundler-vite'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { defineUserConfig } from 'vuepress'
import { gungnirTheme } from '@huan_kong/vuepress-theme-gungnir'
import navbar from './navbar'
import sidebar from './sidebar'

const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig({
  base: '/',
  head: [
    ['link', { rel: 'icon', href: `https://img.huankong.top/i/2022/11/29/6385ef8c7a675.ico` }],
    ['meta', { name: 'referrer', content: 'never' }],
    ['meta', { name: 'application-name', content: `huan_kong's blog` }],
    ['meta', { name: 'apple-mobile-web-app-title', content: `huan_kong's blog` }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    [
      'link',
      { rel: 'apple-touch-icon', href: `https://img.huankong.top/i/2022/11/29/6385ef8c7a675.ico` }
    ],
    ['meta', { name: 'theme-color', content: '#377bb5' }],
    ['meta', { name: 'msapplication-TileColor', content: '#377bb5' }]
  ],

  bundler: viteBundler(),

  lang: 'zh-CN',
  title: '幸运的人一生都被童年治愈，不幸的人一生都在治愈童年。',
  description: `huan_kong's blog`,

  // configure default theme
  theme: gungnirTheme({
    navbarTitle: '空空博客',
    repo: 'huankong233/blog',
    docsDir: '/docs',
    docsBranch: 'master',

    blogNumPerPage: 5,

    hitokoto: false, // enable hitokoto (一言) or not?

    // personal information
    personalInfo: {
      name: 'huan_kong',
      avatar: 'https://img.huankong.top/i/2022/11/29/6385f13b5bb93.png',
      description: '幸运的人一生都被童年治愈，不幸的人一生都在治愈童年。',
      sns: {
        github: 'huankong233',
        bilibili: {
          icon: 'ri-bilibili-line',
          link: 'https://space.bilibili.com/131929259'
        },
        cloudmusic: {
          icon: 'ri-netease-cloud-music-fill',
          link: 'https://music.163.com/#/user/1609570134'
        }
      }
    },

    // header images on home page
    homeHeaderImages: [
      {
        path: 'https://img.huankong.top/i/2023/02/07/63e1e7ee94296.png',
        mask: 'rgba(40, 57, 101, .4)'
      }
    ],

    // other pages
    pages: {
      tags: {
        title: '标签~',
        bgImage: {
          path: 'https://img.huankong.top/i/2023/02/07/63e1e7ee94296.png',
          mask: 'rgba(211, 136, 37, .5)'
        }
      },
      links: {
        title: '友情链接~',
        bgImage: {
          path: 'https://img.huankong.top/i/2023/02/07/63e1e7ee94296.png',
          mask: 'rgba(64, 118, 190, 0.5)'
        }
      }
    },

    navbar,
    sidebar,

    themePlugins: {
      git: isProd,
      katex: true,
      mermaid: true,
      chartjs: true,
      giscus: {
        repo: 'huankong233/blog-page',
        repoId: 'R_kgDOI84cvQ',
        category: 'Announcements',
        categoryId: 'DIC_kwDOI84cvc4CUo2w',
        mapping: 'title',
        lazyLoad: true
      },
      mdPlus: {
        all: true
      },
      pwa: true,
      // use @vuepress/plugin-docsearch instead
      search: {
        locales: {
          '/': {
            placeholder: '关键词'
          }
        }
      }
    },

    searchIcon: 'bi-search',
    searchText: '搜索',

    footer: `
      &copy; <a href="https://github.com/huankong233" target="_blank">huan_kong</a> 2021-2023
      <br>
      Powered by <a href="https://v2.vuepress.vuejs.org" target="_blank">VuePress</a> &
      <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
    `
  }),

  markdown: {
    headers: {
      level: [2, 3, 4, 5]
    },
    toc: {
      level: [2, 3, 4, 5]
    }
  },

  plugins: []
})
