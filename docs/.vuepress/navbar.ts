import type { NavbarConfig } from '@huan_kong/vuepress-theme-gungnir'

export default <NavbarConfig>[
  {
    text: '首页',
    link: '/',
    icon: 'fa-fort-awesome'
  },
  {
    text: '标签',
    link: '/tags/',
    icon: 'fa-tag'
  },
  {
    text: '友情链接',
    link: '/friends/',
    icon: 'fa-satellite-dish'
  },
  {
    text: `文档`,
    icon: 'bi-book-fill',
    children: [
      {
        text: 'kkbot',
        link: '/docs/kkbot/1.介绍.html'
      }
    ]
  },
  {
    text: `附属站点`,
    icon: 'co-git',
    children: [
      {
        text: '粉蓝白',
        link: 'https://huankong.top',
        icon: 'bi-gender-trans'
      },
      {
        text: '图床',
        link: 'https://img.huankong.top',
        icon: 'bi-images'
      },
      {
        text: '短链接',
        link: 'https://url.huankong.top',
        icon: 'hi-solid-link'
      },
      {
        text: '自制小游戏',
        link: 'https://game.huankong.top',
        icon: 'io-game-controller-sharp'
      },
      {
        text: '资源中心',
        link: 'https://dl.huankong.top',
        icon: 'fa-download'
      },
      {
        text: '网盘',
        link: 'https://pan.huankong.top',
        icon: 'io-cloud'
      },
      {
        text: '接口',
        link: 'https://api.huankong.top',
        icon: 'bi-gear-wide-connected'
      },
      {
        text: '文件快递柜',
        link: 'https://temp.huankong.top',
        icon: 'md-cached'
      }
    ]
  }
]