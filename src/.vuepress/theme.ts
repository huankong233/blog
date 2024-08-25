import { plumeTheme } from 'vuepress-theme-plume'
import navbar from './navbar'
import notes from './notes.js'

export default plumeTheme({
  logo: 'https://img.huankong.top/i/2022/11/29/6385ef8c7a675.ico',
  appearance: true,
  hostname: 'https://blog.huankong.top/',
  avatar: {
    name: 'huan_kong',
    url: 'https://img.huankong.top/i/2024/03/20/65fa4e318ce15.png',
    description: '世间的美好总是不期而遇',
    circle: true
  },
  social: [{ icon: 'github', link: 'https://github.com/huankong233' }],
  navbar,
  notes,
  editLink: true,
  editLinkText: '在 GitHub 上编辑此页',
  footer: {
    copyright: 'Copyright © 2020-present <a href="https://huankong.top">huan_kong</a>'
  },
  outlineLabel: '内容大纲',
  returnToTopLabel: '返回顶部',
  contributors: true,
  lastUpdatedText: '上次更新',
  docsDir: 'src',
  plugins: {
    markdownEnhance: { demo: true },
    markdownPower: { caniuse: true, jsfiddle: true, bilibili: true },

    docsearch: {
      appId: 'U198Y5GBFG',
      apiKey: 'ba76b60a3135b6bf81cec20978b2df31',
      indexName: 'huankong'
    },
    comment: {
      provider: 'Giscus',
      comment: true,
      repo: 'huankong233/blog-page',
      repoId: 'R_kgDOI84cvQ',
      category: 'Announcements',
      categoryId: 'DIC_kwDOI84cvc4CUo2w',
      mapping: 'title',
      reactionsEnabled: true,
      inputPosition: 'top'
    },
    frontmatter: {
      include: ['**/*.{md,MD}'],
      exclude: ['.vuepress/**/*', 'node_modules', '**/.~*.{md,MD}']
    }
  }
})
