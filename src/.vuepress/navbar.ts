import type { NavItem } from 'vuepress-theme-plume'

export default [
  {
    text: '首页',
    icon: 'material-symbols:home',
    link: '/'
  },
  {
    text: '博客',
    icon: 'material-symbols:menu-book',
    link: '/blog',
    activeMatch: '/(blog|article)/'
  },
  {
    text: '友情链接',
    icon: 'fa-solid:user-friends',
    link: '/friends',
    activeMatch: '/friends'
  },
  {
    text: '开源项目',
    icon: 'ri:open-source-fill',
    link: '/projects',
    activeMatch: '/projects'
  },
  {
    text: '关于我',
    icon: 'mdi:about',
    link: '/about',
    activeMatch: '/about'
  },
  {
    text: '技术文档',
    icon: 'mdi:idea',
    activeMatch: '/note/(kkbot-js|kkbot-ts)/*',
    items: [
      {
        text: 'kkbot-js',
        icon: 'fluent:bot-24-regular',
        link: '/note/kkbot-js',
        activeMatch: '/note/kkbot-js/*'
      },
      {
        text: 'kkbot-ts',
        icon: 'fluent:bot-24-regular',
        link: '/note/kkbot-ts',
        activeMatch: '/note/kkbot-ts/*'
      }
    ]
  },
  {
    text: '笔记',
    icon: 'icon-park-solid:bookshelf',
    activeMatch: '/note/(pinia|rust|c|algorithm)/*',
    items: [
      {
        text: 'pinia',
        link: '/note/pinia',
        icon: 'logos:pinia',
        activeMatch: '/note/pinia/*'
      },
      {
        text: 'rust',
        link: '/note/rust',
        icon: 'logos:rust',
        activeMatch: '/note/rust/*'
      },
      {
        text: 'c',
        link: '/note/c',
        icon: 'logos:c',
        activeMatch: '/note/c/*'
      },
      {
        text: '数据结构和算法',
        link: '/note/algorithm',
        icon: 'arcticons:algorithms',
        activeMatch: '/note/algorithm/*'
      }
    ]
  }
] as NavItem[]
