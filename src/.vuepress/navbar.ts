import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  {
    text: '首页',
    icon: 'material-symbols:home',
    link: '/'
  },
  {
    text: '博客',
    icon: 'material-symbols:menu-book',
    link: '/blog/',
    activeMatch: '/(blog|article)/'
  },
  {
    text: '友情链接',
    icon: 'fa-solid:user-friends',
    link: '/friends/',
    activeMatch: '/friends/'
  },
  {
    text: '开源项目',
    icon: 'ri:open-source-fill',
    link: '/projects/',
    activeMatch: '/projects/'
  },
  {
    text: '关于我',
    icon: 'mdi:about',
    link: '/about/',
    activeMatch: '/about/'
  },
  {
    text: '技术文档',
    icon: 'mdi:idea',
    activeMatch: '/notes/(kkbot-js|kkbot-ts)/*',
    items: [
      {
        text: 'kkbot-js',
        icon: 'lucide:bot',
        link: '/docs/kkbot-js/',
        activeMatch: '/docs/kkbot-js/*'
      },
      {
        text: 'kkbot-ts',
        icon: 'lucide:bot',
        link: '/docs/kkbot-ts/',
        activeMatch: '/docs/kkbot-ts/*'
      },
      {
        text: 'node-napcat-ts',
        icon: 'https://avatars.githubusercontent.com/u/165024194?s=48&v=4',
        link: '/docs/node-napcat-ts/',
        activeMatch: '/docs/node-napcat-ts/*'
      }
    ]
  },
  {
    text: '笔记',
    icon: 'icon-park-solid:bookshelf',
    activeMatch: '/notes/(pinia|rust|c|algorithm|java|kotlin)/*',
    items: [
      {
        text: 'pinia',
        link: '/notes/pinia/',
        icon: 'logos:pinia',
        activeMatch: '/notes/pinia/*'
      },
      {
        text: 'rust',
        link: '/notes/rust/',
        icon: 'logos:rust',
        activeMatch: '/notes/rust/*'
      },
      {
        text: 'C',
        link: '/notes/c/',
        icon: 'logos:c',
        activeMatch: '/notes/c/*'
      },
      {
        text: '数据结构和算法',
        link: '/notes/algorithm/',
        icon: 'flat-color-icons:tree-structure',
        activeMatch: '/notes/algorithm/*'
      },
      {
        text: 'Java',
        link: '/notes/java/',
        icon: 'logos:java',
        activeMatch: '/notes/java/*'
      },
      {
        text: 'Kotlin',
        link: '/notes/kotlin/',
        icon: 'devicon:kotlin',
        activeMatch: '/notes/kotlin/*'
      }
    ]
  }
])
