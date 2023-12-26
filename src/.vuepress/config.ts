import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { fs, getDirname, path } from '@vuepress/utils'
import { defineUserConfig } from 'vuepress'

// import { pwaPlugin } from '@vuepress/plugin-pwa'
import theme from './theme'

const __dirname = getDirname(import.meta.url)

const robotsContent = `
User-agent: *
Allow: /
Sitemap: https://blog.huankong.top/sitemap.xml
`

export default defineUserConfig({
  pagePatterns: ['**/*.md', '!.vuepress', '!node_modules', '!**/.~*.md'],
  port: 8081,
  lang: 'zh-CN',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '幻空博客',
      description: '幸运的人一生都被童年治愈，不幸的人一生都在治愈童年。'
    }
  },
  dest: path.resolve(__dirname, '../../docs'),
  public: path.resolve(__dirname, '../../public'),
  temp: path.resolve(__dirname, '.temp'),
  cache: path.resolve(__dirname, '.cache'),
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: 'https://img.huankong.top/i/2022/11/29/6385ef8c7a675.ico'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: 'https://img.huankong.top/i/2022/11/29/6385ef8c7a675.ico'
      }
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: 'https://img.huankong.top/i/2022/11/29/6385ef8c7a675.ico'
      }
    ],
    [
      'link',
      {
        rel: 'mask-icon',
        href: 'https://img.huankong.top/i/2022/11/29/6385ef8c7a675.ico',
        color: '#5bbad5'
      }
    ],
    // ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    [
      'meta',
      {
        name: 'keywords',
        content: '幻空,前端,huan_kong,huankong233,front-end'
      }
    ],
    ['meta', { 'http-equiv': 'X-UA-Compatible', content: 'id=edg' }],
    ['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }]
  ],
  shouldPrefetch: false,
  plugins: [
    googleAnalyticsPlugin({ id: 'G-4C0FRDPERW' })
    // pwaPlugin({ skipWaiting: true, })
  ],
  onGenerated: app => {
    const filepath = app.dir.dest('robots.txt')
    setTimeout(() => {
      fs.writeFileSync(filepath, robotsContent, 'utf-8')
    }, 500)
  },
  theme: theme
})
