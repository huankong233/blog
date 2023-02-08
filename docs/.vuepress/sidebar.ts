import type { SidebarConfig } from '@huan_kong/vuepress-theme-gungnir'

export default <SidebarConfig>{
  '/docs/kkbot': [
    {
      text: 'kkbot文档',
      children: [
        '/docs/kkbot/1.介绍.md',
        '/docs/kkbot/2.安装.md',
        '/docs/kkbot/3.配置.md',
        '/docs/kkbot/4.支持库.md',
        {
          text: '自带的支持库',
          link: '/docs/kkbot/src/bot.md',
          children: [
            '/docs/kkbot/src/bot.md',
            '/docs/kkbot/src/fetch.md',
            '/docs/kkbot/src/format.md',
            '/docs/kkbot/src/getDirname.md',
            '/docs/kkbot/src/global.md',
            '/docs/kkbot/src/load.md',
            '/docs/kkbot/src/logger.md',
            '/docs/kkbot/src/random.md',
            '/docs/kkbot/src/RegEvent.md',
            '/docs/kkbot/src/reply.md',
            '/docs/kkbot/src/time.md',
            '/docs/kkbot/src/url.md'
          ]
        },
        '/docs/kkbot/5.插件.md',
        '/docs/kkbot/6.资源文件.md'
      ]
    }
  ]
}
