import { definePlumeNotesConfig } from 'vuepress-theme-plume'
import jsListLaravel from './94list-laravel'
import algorithm from './algorithm'
import c from './c'
import java from './java'
import kkbotJs from './kkbot-js'
import kkbotTs from './kkbot-ts'
import kotlin from './kotlin'
import pinia from './pinia'
import rust from './rust'

export default definePlumeNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [kkbotJs, kkbotTs, pinia, rust, algorithm, c, java, kotlin, jsListLaravel]
})
