import { defineClientConfig } from '@vuepress/client'
import { addIcons } from 'oh-vue-icons'
import {
  CoGit,
  FaFortAwesome,
  FaSatelliteDish,
  FaTag,
  OiGitCompare,
  OiRocket,
  RiBilibiliLine,
  RiBook2Fill,
  RiGithubLine,
  RiSailboatLine,
  RiVuejsLine,
  RiNeteaseCloudMusicFill,
  BiGenderTrans,
  BiImages,
  HiSolidLink,
  IoGameControllerSharp,
  IoCloud,
  BiGearWideConnected
} from 'oh-vue-icons/icons'

addIcons(
  RiBilibiliLine,
  FaFortAwesome,
  FaTag,
  FaSatelliteDish,
  RiBook2Fill,
  RiVuejsLine,
  CoGit,
  RiGithubLine,
  OiGitCompare,
  OiRocket,
  RiSailboatLine,
  RiNeteaseCloudMusicFill,
  BiGenderTrans,
  BiImages,
  HiSolidLink,
  IoGameControllerSharp,
  IoCloud,
  BiGearWideConnected
)

export default defineClientConfig({})
