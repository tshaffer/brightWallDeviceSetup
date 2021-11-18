import { BrightSignState } from "../type";

export const getIsBrightWall = (state: BrightSignState): boolean => {
  return state.brightSignAttributes.isBrightWall;
};

export const getSerialNumber = (state: BrightSignState): string => {
  return state.brightSignAttributes.serialNumber;
};

export const getMacAddress = (state: BrightSignState): string => {
  return state.brightSignAttributes.macAddress;
};

export const getIpAddress = (state: BrightSignState): string => {
  return state.brightSignAttributes.ipAddress;
};

