import { definePlumeNotesItemConfig } from '@vuepress-plume/vuepress-theme-plume'

export default definePlumeNotesItemConfig({
  text: 'kkbot',
  dir: 'kkbot',
  link: '/kkbot',
  sidebar: [
    '',
    {
      text: '使用',
      dir: 'use',
      items: ['安装', '插件', '配置', '支持库']
    },
    {
      text: '编写',
      dir: 'write',
      items: ['插件', '配置', '支持库']
    },
    {
      text: '自带的支持库',
      dir: 'libs',
      items: [
        'api',
        'eventReg',
        'fetch',
        'fs',
        'getDirname',
        'globalReg',
        'handleUrl',
        'loadConfig',
        'loadPlugin',
        'loadVersion',
        'log',
        'logger',
        'random',
        'sendMsg',
        'sleep',
        'time'
      ]
    }
  ]
})
