import { BrightSignConfig } from "../type";

export const getBrightWallDeviceSetupActiveScreen = (state: BrightSignConfig): string => {
  return state.brightWallAttributes.brightWallDeviceSetupActiveScreen;
};

export const getNumRows = (state: BrightSignConfig): number => {
  return state.brightWallAttributes.numRows;
};

export const getNumColumns = (state: BrightSignConfig): number => {
  return state.brightWallAttributes.numColumns;
};

export const getScreenWidth = (state: BrightSignConfig): number => {
  return state.brightWallAttributes.screenDimensions.width;
}

export const getScreenHeight = (state: BrightSignConfig): number => {
  return state.brightWallAttributes.screenDimensions.height;
}
