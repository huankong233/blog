import { definePlumeNotesItemConfig } from 'vuepress-theme-plume'

export default definePlumeNotesItemConfig({
  text: 'kkbot-ts',
  dir: 'kkbot-ts',
  link: '/kkbot-ts',
  sidebar: [
    '',
    {
      text: '使用',
      dir: 'use',
      items: ['安装', '插件', '支持库']
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
        'sendMsg',
        'sleep',
        'time'
      ]
    }
  ]
})
