import { BrightSignState } from "../type";

export const getActiveScreen = (state: BrightSignState): string => {
  return state.brightWallConfiguration.activeScreen;
};

export const getIsMaster = (state: BrightSignState): boolean => {
  return state.brightWallConfiguration.isMaster;
};

export const getRowIndex = (state: BrightSignState): number => {
  return state.brightWallConfiguration.rowIndex;
};

export const getColumnIndex = (state: BrightSignState): number => {
  return state.brightWallConfiguration.columnIndex;
};

export const getNumRows = (state: BrightSignState): number => {
  return state.brightWallConfiguration.numRows;
};

export const getNumColumns = (state: BrightSignState): number => {
  return state.brightWallConfiguration.numColumns;
};

export const getScreenWidth = (state: BrightSignState): number => {
  return state.brightWallConfiguration.screenDimensions.width;
}

export const getScreenHeight = (state: BrightSignState): number => {
  return state.brightWallConfiguration.screenDimensions.height;
}
