import { definePlumeNotesConfig } from 'vuepress-theme-plume'
import kkbotJs from './kkbot-js'
import kkbotTs from './kkbot-ts'
import pinia from './pinia'
import rust from './rust'
import algorithm from './algorithm'
import c from './c'
import java from './java'
import kotlin from './kotlin'

export default definePlumeNotesConfig({
  dir: 'note',
  link: '/note',
  notes: [kkbotJs, kkbotTs, pinia, rust, algorithm, c, java, kotlin]
})
