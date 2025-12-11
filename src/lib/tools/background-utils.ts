import type { Background } from "$lib/types/settings";

/**
 * 获取统一的背景样式
 */
export const getBackgroundStyle = (bg: Background): string => {
  switch (bg.type) {
    case "unsplash":
      break;
    default:
      return `background-color: ${bg.color};`
  }
}


/**
 * 检查是否有背景图片
 */
export const hasBackgroundImage = (bg: Background): boolean => {
  return (bg.type === 'unsplash' && !!bg.unsplashUrl) ||
    (bg.type === 'local' && !!bg.image)
}


/**
 * 检查是否应该显示纹理
 * 只有纯色背景或渐变背景时才显示纹理
 */
export const shouldShowPattern = (bg: Background): boolean => {
  return bg.type === 'color' || (bg.type === 'gradient' && !!bg.gradient)
}