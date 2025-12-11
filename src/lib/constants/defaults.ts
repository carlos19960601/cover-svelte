import type { IconOption, Setting, UnsplashParam } from "$lib/types/settings"
import { BACKGROUNDS_RANDOM } from "./colors-random"
import { FONTS } from "./fonts"
import { PATTERNS } from "./patterns"
import { SIZES } from "./sizes"
import { THEMES } from "./themes"

export const DEFAULT_ICON: IconOption = { label: 'xiaohongshu', value: 'simple-icons:xiaohongshu' }

export const DEFAULT_UNSPLASH_PARAM: UnsplashParam = {
  query: 'beautiful background',
  page: 1,
  per_page: 12
}


export const DEFAULT_SETTING: Setting = {
  title: '免费、漂亮的封面生成器',
  author: '唯知笔记',
  download: 'png',
  scale: 2,
  icon: DEFAULT_ICON,
  customIcon: '',
  theme: THEMES[0],
  font: FONTS[0],
  bg: { ...BACKGROUNDS_RANDOM[0] },
  pattern: PATTERNS[0],
  size: SIZES[0]
}