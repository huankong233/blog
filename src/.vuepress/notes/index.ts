import { definePlumeNotesConfig } from '@vuepress-plume/vuepress-theme-plume'
import kkbot from './kkbot'
import pinia from './pinia'
import rust from './rust'

export default definePlumeNotesConfig({
  dir: 'notes',
  link: '/note',
  notes: [kkbot, pinia, rust]
})
