import { plumeTheme } from '@vuepress-plume/vuepress-theme-plume'
import notes from './notes'
import navbar from './navbar'

export default plumeTheme({
  logo: 'https://img.huankong.top/i/2022/11/29/6385ef8c7a675.ico',
  appearance: true,
  hostname: 'https://blog.huankong.top/',
  avatar: {
    name: 'huan_kong',
    url: 'https://img.huankong.top/i/2022/11/29/6385f13b5bb93.png',
    description: '世间的美好总是不期而遇'
  },
  social: [{ icon: 'github', link: 'https://github.com/huankong233' }],
  navbar,
  notes,
  footer: {
    copyright:
      'Proudly written with <a href="https://github.com/vuepress/vuepress-next">VuePress Next</a> and <a href="https://github.com/pengzhanbo/vuepress-theme-plume">vuepress-theme-plume theme</a>.<br>Copyright © 2020-present <a href="https://huankong.top">huan_kong</a>'
  },
  themePlugins: {
    shiki: {
      theme: 'one-dark-pro'
    },
    markdownEnhance: {
      katex: true
    },
    search: {
      locales: {
        '/': {
          placeholder: '搜索'
        }
      }
    },
    comment: {
      provider: 'Giscus',
      comment: true,
      repo: 'huankong233/blog-page',
      repoId: 'R_kgDOI84cvQ',
      category: 'Announcements',
      categoryId: 'DIC_kwDOI84cvc4CUo2w',
      mapping: 'title'
    }
  }
})
