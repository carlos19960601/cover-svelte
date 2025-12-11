import { DEFAULT_SETTING, DEFAULT_UNSPLASH_PARAM } from "$lib/constants/defaults";

class CoverState {
  coverSetting = $state(DEFAULT_SETTING);
  unsplashParam = $state(DEFAULT_UNSPLASH_PARAM);
}

export const coverState = new CoverState();