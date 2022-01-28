import { BrightSignConfig, BrightSignInWallMap } from '../type';

export const getBrightSignsInWall = (state: BrightSignConfig): BrightSignInWallMap => {
  return state.brightSignsInWall;
}
