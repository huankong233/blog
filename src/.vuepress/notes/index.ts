import { definePlumeNotesConfig } from '@vuepress-plume/vuepress-theme-plume'
import kkbot from './kkbot'
import pinia from './pinia'
import rust from './rust'
import algorithm from './algorithm'

export default definePlumeNotesConfig({
  dir: 'note',
  link: '/note',
  notes: [kkbot, pinia, rust, algorithm]
})
