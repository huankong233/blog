import { definePlumeNotesConfig } from '@vuepress-plume/vuepress-theme-plume'
import kkbotJs from './kkbot-js'
import kkbotTs from './kkbot-ts'
import pinia from './pinia'
import rust from './rust'
import algorithm from './algorithm'

export default definePlumeNotesConfig({
  dir: 'note',
  link: '/note',
  notes: [kkbotJs, kkbotTs, pinia, rust, algorithm]
})
