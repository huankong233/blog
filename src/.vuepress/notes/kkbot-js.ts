import { definePlumeNotesItemConfig } from 'vuepress-theme-plume'

export default definePlumeNotesItemConfig({
  text: 'kkbot-js',
  dir: 'kkbot-js',
  link: '/docs/kkbot-js',
  sidebar: [
    '',
    { dir: '使用', items: ['安装', '插件', '支持库'] },
    { dir: '开发', items: ['插件', '配置', '支持库'] },
    {
      dir: '支持库',
      items: [
        'Api',
        'eventReg',
        'fetch',
        'fs',
        'getDirname',
        'globalReg',
        'handleUrl',
        'loadConfig',
        'loadPlugin',
        'loadVersion',
        'logger',
        'random',
        'sendMsg',
        'sleep',
        'time'
      ]
    }
  ]
})
