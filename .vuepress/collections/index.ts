import { defineCollections } from 'vuepress-theme-plume'
import algorithm from './algorithm.js'
import c from './c.js'
import java from './java.js'
import kotlin from './kotlin.js'
import pinia from './pinia.js'
import rust from './rust.js'

export default defineCollections([
  { type: 'post', title: '博客', dir: '/blog', linkPrefix: '/article/' },
  algorithm,
  c,
  java,
  kotlin,
  pinia,
  rust,
])
