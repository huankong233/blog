import { defineNotesConfig } from 'vuepress-theme-plume'
import algorithm from './notes/algorithm'
import c from './notes/c'
import java from './notes/java'
import kotlin from './notes/kotlin'
import pinia from './notes/pinia'
import rust from './notes/rust'

export default defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [pinia, rust, algorithm, c, java, kotlin],
})
