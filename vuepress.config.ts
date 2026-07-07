import process from 'node:process'
import { viteBundler } from '@vuepress/bundler-vite'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import dotenv from 'dotenv'
import { defineUserConfig } from 'vuepress'
import { fs, getDirname, path, tinyglobby } from 'vuepress/utils'
import theme from './.vuepress/theme.js'

const __dirname = getDirname(import.meta.url)
const resolve = (...dirs: string[]) => path.resolve(__dirname, ...dirs)

const isProd = process.env.NODE_ENV === 'production'

if (!process.env.CI) {
  dotenv.config({ path: '.env.local' })
}

export default defineUserConfig({
  lang: 'zh-CN',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '幻空博客',
      description: '幸运的人一生都被童年治愈，不幸的人一生都在治愈童年。',
    },
  },
  dest: 'docs',
  public: resolve('public'),
  temp: resolve('.vuepress/.temp'),
  cache: resolve('.vuepress/.cache'),
  shouldPrefetch: false,
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: 'https://img.huankong.top/i/2022/11/29/6385ef8c7a675.ico',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: 'https://img.huankong.top/i/2022/11/29/6385ef8c7a675.ico',
      },
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: 'https://img.huankong.top/i/2022/11/29/6385ef8c7a675.ico',
      },
    ],
    [
      'link',
      {
        rel: 'mask-icon',
        href: 'https://img.huankong.top/i/2022/11/29/6385ef8c7a675.ico',
        color: '#5bbad5',
      },
    ],
    [
      'meta',
      {
        name: 'keywords',
        content: '幻空,前端,huan_kong,huankong233,front-end',
      },
    ],
    ['meta', { 'http-equiv': 'X-UA-Compatible', 'content': 'id=edg' }],
    ['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
  ],
  plugins: [isProd ? googleAnalyticsPlugin({ id: 'G-4C0FRDPERW' }) : []],

  alias: {
    '~theme': resolve('./.vuepress/theme'),
  },

  define: {
    __VUEPRESS_GAODE_MAP_KEY__: process.env.VUEPRESS_GAODE_MAP_KEY,
    // debug hydration mismatch
    // __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'true',
  },

  bundler: viteBundler(),

  theme,

  onGenerated: async (app) => {
    const names = ['Ma-Shan-Zheng', 'Londrina-Sketch']
    const dest = app.dir.dest('assets')
    const indexPath = app.dir.dest('index.html')
    const assets = tinyglobby.globSync('*.ttf', { cwd: dest }) || []
    const fonts = assets.filter(asset =>
      names.some(name => asset.includes(name)),
    )
    let links = ''
    fonts.forEach((font) => {
      links += `<link rel="preload" href="/assets/${font}" as="font" type="font/ttf" crossorigin="anonymous">`
    })
    const content = fs.readFileSync(indexPath, 'utf-8')
    fs.writeFileSync(indexPath, content.replace('<head>', `<head>${links}`))

    await fs.writeFile(
      app.dir.dest('robots.txt'),
      `
User-agent: *
Allow: /
Sitemap: https://huankong.top/sitemap.xml
`,
    )
  },
})
