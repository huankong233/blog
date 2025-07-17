import { plumeTheme } from 'vuepress-theme-plume'
import navbar from './navbar'
import notes from './notes.js'

export default plumeTheme({
  logo: 'https://img.huankong.top/i/2022/11/29/6385ef8c7a675.ico',

  navbar,
  notes,

  profile: {
    name: 'huan_kong',
    url: 'https://img.huankong.top/i/2024/03/20/65fa4e318ce15.png',
    description: '世间的美好总是不期而遇',
    circle: true,
  },

  social: [{ icon: 'github', link: 'https://github.com/huankong233' }],

  editLink: true,
  footer: {
    copyright: 'Copyright © 2020-present <a href="https://huankong.top">huan_kong</a>',
  },

  hostname: 'https://blog.huankong.top/',
  docsRepo: 'https://github.com/huankong233/blog',
  docsDir: 'src',

  codeHighlighter: {
    twoslash: true,
    lineNumbers: 10,
  },

  markdown: {
    mermaid: true,
    caniuse: true,
    jsfiddle: true,
    demo: true,
    npmTo: true,
    audioReader: true,
    chat: true,
  },

  search: {
    provider: 'algolia',
    appId: 'U198Y5GBFG',
    apiKey: 'ba76b60a3135b6bf81cec20978b2df31',
    indexName: 'huankong',
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
    inputPosition: 'top',
    darkTheme: 'dark_protanopia',
    lightTheme: 'light_protanopia',
  },
})
