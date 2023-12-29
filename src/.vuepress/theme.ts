import { plumeTheme } from 'vuepress-theme-plume'
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
    copyright: 'Copyright © 2020-present <a href="https://huankong.top">huan_kong</a>'
  },
  outlineLabel: '内容大纲',
  returnToTopLabel: '返回顶部',
  contributors: false,
  editLink: true,
  editLinkText: '在 GitHub 上编辑此页',
  lastUpdatedText: '上次更新',
  docsDir: 'src',
  themePlugins: {
    externalLinkIcon: false,
    shikiji: {
      theme: { light: 'vitesse-light', dark: 'vitesse-dark' }
    },
    markdownEnhance: {
      katex: true
    },
    // search: {
    //   locales: {
    //     '/': {
    //       placeholder: '搜索'
    //     }
    //   }
    // },
    docsearch: {
      appId: 'U198Y5GBFG',
      apiKey: 'ba76b60a3135b6bf81cec20978b2df31',
      indexName: 'huankong',
      locales: {
        '/': {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: '搜索文档',
              buttonAriaLabel: '搜索文档'
            },
            modal: {
              searchBox: {
                resetButtonTitle: '清除查询条件',
                resetButtonAriaLabel: '清除查询条件',
                cancelButtonText: '取消',
                cancelButtonAriaLabel: '取消'
              },
              startScreen: {
                recentSearchesTitle: '搜索历史',
                noRecentSearchesText: '没有搜索历史',
                saveRecentSearchButtonTitle: '保存至搜索历史',
                removeRecentSearchButtonTitle: '从搜索历史中移除',
                favoriteSearchesTitle: '收藏',
                removeFavoriteSearchButtonTitle: '从收藏中移除'
              },
              errorScreen: {
                titleText: '无法获取结果',
                helpText: '你可能需要检查你的网络连接'
              },
              footer: {
                selectText: '选择',
                navigateText: '切换',
                closeText: '关闭',
                searchByText: '搜索提供者'
              },
              noResultsScreen: {
                noResultsText: '无法找到相关结果',
                suggestedQueryText: '你可以尝试查询',
                reportMissingResultsText: '你认为该查询应该有结果？',
                reportMissingResultsLinkText: '点击反馈'
              }
            }
          }
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
