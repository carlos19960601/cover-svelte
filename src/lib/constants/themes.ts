import backgroundThemePlaceholder from "$lib/assets/images/background-theme-placeholder.webp";
import basicThemePlaceholder from "$lib/assets/images/basic-theme-placeholder.webp";
import mobileThemePlaceholder from "$lib/assets/images/mobile-theme-placeholder.webp";
import modernThemePlaceholder from "$lib/assets/images/modern-theme-placeholder.webp";
import outlineThemePlaceholder from "$lib/assets/images/outline-theme-placeholder.webp";
import previewThemePlaceholder from "$lib/assets/images/preview-theme-placeholder.webp";
import stylishThemePlaceholder from "$lib/assets/images/stylish-theme-placeholder.webp";

import type { Theme } from "$lib/types/settings";

export const THEMES: Theme[] = [
  {
    label: '简洁',
    value: 'outline',
    preview: outlineThemePlaceholder
  },
  {
    label: '现代',
    value: 'modern',
    preview: modernThemePlaceholder
  },
  {
    label: '经典',
    value: 'basic',
    preview: basicThemePlaceholder
  },
  {
    label: '背景',
    value: 'background',
    preview: backgroundThemePlaceholder
  },
  {
    label: '图文',
    value: 'stylish',
    preview: stylishThemePlaceholder,
    swapX: false
  },
  {
    label: '桌面',
    value: 'preview',
    preview: previewThemePlaceholder,
    stretchY: false
  },
  {
    label: '手机',
    value: 'mobile',
    preview: mobileThemePlaceholder,
    swapX: false,
    stretchY: false
  }
]
