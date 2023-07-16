import { NavItem } from '@vuepress-plume/vuepress-theme-plume'

export default [
  { text: '首页', icon: 'material-symbols:home', link: '/' },
  {
    text: '博客',
    icon: 'material-symbols:menu-book',
    link: '/blog',
    activeMatch: '/(blog|article)/'
  },
  {
    text: '开源项目',
    icon: 'ri:open-source-fill',

    link: '/projects',
    activeMatch: '/projects'
  },
  {
    text: '技术文档',
    icon: 'mdi:idea',
    items: [
      {
        text: 'kkbot',
        icon: 'fluent:bot-24-regular',
        link: '/note/kkbot',
        activeMatch: '/note/kkbot'
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
