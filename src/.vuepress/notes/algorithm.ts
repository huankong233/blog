import { definePlumeNotesItemConfig } from '@vuepress-plume/vuepress-theme-plume'

export default definePlumeNotesItemConfig({
  text: 'algorithm',
  dir: 'algorithm',
  link: '/algorithm',
  sidebar: [
    '',
    {
      text: '介绍',
      dir: '1.介绍',
      items: ['常见数据结构和算法']
    },
    {
      text: '排序算法',
      dir: '2.排序算法',
      items: ['选择排序', '插入排序']
    }
  ]
})
