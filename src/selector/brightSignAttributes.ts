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

export const getBezelWidth = (state: BrightSignConfig): number => {
  return state.brightSignAttributes.bezelWidth;
};

export const getBezelHeight = (state: BrightSignConfig): number => {
  return state.brightSignAttributes.bezelHeight;
};

export const getBezelScreenWidth = (state: BrightSignConfig): number => {
  return state.brightSignAttributes.bezelScreenWidth;
};

export const getBezelScreenHeight = (state: BrightSignConfig): number => {
  return state.brightSignAttributes.bezelScreenHeight;
};
