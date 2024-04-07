import { definePlumeNotesItemConfig } from 'vuepress-theme-plume'

export default definePlumeNotesItemConfig({
  text: 'c',
  dir: 'c',
  link: '/notes/c/',
  sidebar: [
    '',
    {
      dir: '初级部分',
      items: ['数据类型', '变量定义', '打印变量', '类型转换', '数组', '字符串', '输入输出函数']
    },
    {
      dir: '高级部分',
      items: ['函数', '局部变量', '指针']
    }
  ]
})
