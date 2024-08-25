import { defineNotesConfig } from 'vuepress-theme-plume'
import algorithm from './notes/algorithm'
import c from './notes/c'
import java from './notes/java'
import kkbotJs from './notes/kkbot-js'
import kkbotTs from './notes/kkbot-ts'
import kotlin from './notes/kotlin'
import nodeNapcatTs from './notes/node-napcat-ts'
import pinia from './notes/pinia'
import rust from './notes/rust'

export default defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [kkbotJs, kkbotTs, pinia, rust, algorithm, c, java, kotlin, nodeNapcatTs]
})
