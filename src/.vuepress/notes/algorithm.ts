import { definePlumeNotesItemConfig } from 'vuepress-theme-plume'

export default definePlumeNotesItemConfig({
  text: 'algorithm',
  dir: 'algorithm',
  link: '/notes/algorithm/',
  sidebar: [
    '',
    {
      dir: '介绍',
      items: ['常见数据结构和算法']
    },
    {
      dir: '数据结构',
      items: [
        '数组',
        '栈',
        '队列结构',
        '优先级队列',
        '单向链表',
        '双向链表',
        '集合',
        '字典',
        '哈希表',
        '树',
        '二叉树',
        '二叉搜索树',
        '红黑树'
      ]
    }
  ]
})
