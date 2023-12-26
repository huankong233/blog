import { definePlumeNotesItemConfig } from 'vuepress-theme-plume'

export default definePlumeNotesItemConfig({
  text: 'rust',
  dir: 'rust',
  link: '/rust',
  sidebar: [
    '',
    {
      text: '学习',
      dir: 'learn',
      items: [
        '变量',
        '数据类型',
        '函数',
        '控制',
        'Struct',
        '枚举',
        '集合',
        '字符串',
        'HashMap',
        '泛型',
        'Trait',
        '生命周期'
      ]
    }
  ]
})
