import { definePlumeNotesItemConfig } from 'vuepress-theme-plume'

export default definePlumeNotesItemConfig({
  text: 'kkbot-ts',
  dir: 'kkbot-ts',
  link: '/docs/kkbot-ts/',
  sidebar: [
    '',
    { dir: '使用', items: ['安装', '插件', '支持库'] },
    { dir: '开发', items: ['插件', '配置', '支持库'] },
    {
      dir: '支持库',
      items: [
        'Api',
        'array',
        'axios',
        'eventReg',
        'fs',
        'getDirname',
        'globalReg',
        'handleUrl',
        'humanNum',
        'loadConfig',
        'loadPlugin',
        'loadVersion',
        'logger',
        'parseJSON',
        'random',
        'retry',
        'sendMsg',
        'sleep',
        'time'
      ]
    }
  ]
})
