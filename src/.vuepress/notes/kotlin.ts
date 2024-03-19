import { definePlumeNotesItemConfig } from 'vuepress-theme-plume'

export default definePlumeNotesItemConfig({
  text: 'kotlin',
  dir: 'kotlin',
  link: '/notes/kotlin/',
  sidebar: ['', { dir: '学习', items: ['定义变量', '数据类型'] }]
})
