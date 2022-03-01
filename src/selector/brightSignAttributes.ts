import { BrightSignConfig } from "../type";

export const getSerialNumber = (state: BrightSignConfig): string => {
  return state.brightSignAttributes.serialNumber;
};

export const getActivePresentationName = (state: BrightSignConfig): string => {
  return state.brightSignAttributes.activePresentationName;
};

export const getIsBrightWall = (state: BrightSignConfig): boolean => {
  return state.brightSignAttributes.isBrightWall;
};

export const getMacAddress = (state: BrightSignConfig): string => {
  return state.brightSignAttributes.macAddress;
};

export const getIpAddress = (state: BrightSignConfig): string => {
  return state.brightSignAttributes.ipAddress;
};

export const getIsMaster = (state: BrightSignConfig): boolean => {
  return state.brightSignAttributes.isMaster;
};

export const getIsBrightWallConfiguratorHost = (state: BrightSignConfig): boolean => {
  return state.brightSignAttributes.isBrightWallConfiguratorHost;
};

export const getRowIndex = (state: BrightSignConfig): number => {
  return state.brightSignAttributes.rowIndex;
};

export const getColumnIndex = (state: BrightSignConfig): number => {
  return state.brightSignAttributes.columnIndex;
};

export const getBezelLeft = (state: BrightSignConfig): number => {
  return state.brightSignAttributes.bezelLeft;
};

export const getBezelRight = (state: BrightSignConfig): number => {
  return state.brightSignAttributes.bezelRight;
};

export const getBezelTop = (state: BrightSignConfig): number => {
  return state.brightSignAttributes.bezelTop;
};

export const getBezelBottom = (state: BrightSignConfig): number => {
  return state.brightSignAttributes.bezelBottom;
};

export const getBezelScreenWidth = (state: BrightSignConfig): number => {
  return state.brightSignAttributes.bezelScreenWidth;
};

export const getBezelScreenHeight = (state: BrightSignConfig): number => {
  return state.brightSignAttributes.bezelScreenHeight;
};
