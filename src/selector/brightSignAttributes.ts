import { BrightSignState } from "../type";

export const getIsBrightWall = (state: BrightSignState): boolean => {
  return state.brightSignAttributes.isBrightWall;
};

export const getSerialNumber = (state: BrightSignState): string => {
  return state.brightSignAttributes.serialNumber;
};

export const getIpAddress = (state: BrightSignState): string => {
  return state.brightSignAttributes.ipAddress;
};

