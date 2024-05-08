import { definePlumeNotesItemConfig } from 'vuepress-theme-plume'

export default definePlumeNotesItemConfig({
  text: 'pinia',
  dir: 'pinia',
  link: '/notes/pinia/',
  sidebar: [{ dir: '学习', collapsed: false, items: ['创建', '读取', '修改', 'Action', 'Getters'] }]
})
