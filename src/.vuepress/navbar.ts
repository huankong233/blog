import { NavItem } from '@vuepress-plume/vuepress-theme-plume'

export default [
  { text: '首页', link: '/', icon: 'material-symbols:home' },
  {
    text: '博客',
    link: '/blog/',
    activeMatch: '/(blog|article)/',
    icon: 'material-symbols:menu-book'
  },
  {
    text: 'Projects',
    link: '/projects/',
    icon: 'ri:open-source-fill',
    activeMatch: '/projects'
  },
  {
    text: '技术文档',
    icon: 'mdi:idea',
    items: [
      {
        text: 'kkbot',
        icon: 'carbon:bot',
        items: [
          {
            text: 'v0.1',
            link: '/notes/kkbot',
            activeMatch: '/notes/kkbot'
          }
        ]
      }
    ]
  },
  {
    text: '笔记',
    icon: 'icon-park-solid:bookshelf',
    items: [
      {
        text: 'pinia',
        link: '/note/pinia',
        icon: 'logos:pinia',
        activeMatch: '/note/pinia'
      },
      {
        text: 'rust',
        link: '/note/rust',
        icon: 'logos:rust',
        activeMatch: '/note/rust'
      }
    ]
  }
] as NavItem[]
