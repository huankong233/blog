import { definePlumeNotesItemConfig } from '@vuepress-plume/vuepress-theme-plume'

export default definePlumeNotesItemConfig({
  text: 'rust',
  dir: 'rust',
  link: '/rust',
  sidebar: [
    '',
    {
      text: '学习',
      dir: 'learn',
      items: ['变量', '数据类型', '函数', '控制', 'struct', '枚举']
    }
  ]
})
