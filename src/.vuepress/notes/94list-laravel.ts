import { definePlumeNotesItemConfig } from 'vuepress-theme-plume'

export default definePlumeNotesItemConfig({
  text: '94list-laravel',
  dir: '94list-laravel',
  link: '/docs/94list-laravel/',
  sidebar: [
    '',
    {
      dir: '使用',
      items: ['如何安装']
    },
    {
      dir: '接口定义',
      items: ['用户', '管理员']
    }
  ]
})
