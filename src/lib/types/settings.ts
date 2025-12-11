export interface SelectOption {
  label: string
  value: string
}

export interface Theme extends SelectOption {
  // 预览图像
  preview: string
  // 图文左右交换位置
  swapX?: boolean
  // 图片上下拉伸
  stretchY?: boolean
}

export interface Background {
  color: string
  image?: string
  type: 'color' | 'local' | 'unsplash' | 'gradient'
  unsplashUrl?: string
  gradient?: string
}

export interface Font extends SelectOption {
  url: string
  type: string
  typeName: string
  lineHeight?: string
}

export interface Pattern extends SelectOption {
  type: string
  typeName: string
  isOpacity?: boolean
}

export type Size = SelectOption

export type IconOption = SelectOption

export interface UnsplashParam {
  query: string
  page: number
  per_page: number
}

export interface UnsplashImage {
  searchText: string
  url: string
  downloadLink: string
}

type DownloadType = 'png' | 'jpg' | 'webp'

export interface Setting {
  title: string
  author: string
  download: DownloadType
  scale: number
  icon: IconOption
  customIcon: string
  theme: Theme
  font: Font
  bg: Background
  pattern: Pattern
  size: Size
}
