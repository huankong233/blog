import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  {
    text: '首页',
    icon: 'material-symbols:home',
    link: '/',
  },
  {
    text: '博客',
    icon: 'material-symbols:menu-book',
    link: '/blog/',
    activeMatch: '/(blog|article)/',
  },
  {
    text: '友情链接',
    icon: 'fa-solid:user-friends',
    link: '/friends/',
  },
  {
    text: '开源项目',
    icon: 'ri:open-source-fill',
    link: '/projects/',
  },
  {
    text: '笔记',
    icon: 'icon-park-solid:bookshelf',
    activeMatch: '/notes',
    items: [
      {
        text: 'pinia',
        link: '/notes/pinia/',
        icon: 'logos:pinia',
      },
      {
        text: 'rust',
        link: '/notes/rust/',
        icon: 'logos:rust',
      },
      {
        text: 'c',
        link: '/notes/c/',
        icon: 'logos:c',
      },
      {
        text: 'algorithm',
        link: '/notes/algorithm/',
        icon: 'flat-color-icons:tree-structure',
      },
      {
        text: 'Java',
        link: '/notes/java/',
        icon: 'logos:java',
      },
      {
        text: 'Kotlin',
        link: '/notes/kotlin/',
        icon: 'devicon:kotlin',
      },
    ],
  },
  {
    text: '关于我',
    icon: 'mdi:about',
    link: '/about/',
  },
])
