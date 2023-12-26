import { definePlumeNotesItemConfig } from 'vuepress-theme-plume'

export default definePlumeNotesItemConfig({
  text: 'pinia',
  dir: 'pinia',
  link: '/pinia',
  sidebar: [
    '',
    {
      text: '学习',
      dir: 'learn',
      items: ['使用', '解构访问', '数据修改', 'action', 'getters']
    }
  ]
})
