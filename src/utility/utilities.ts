import { isNumber } from "lodash";

export const tryConvertStringToNumber = (val: string, defaultValue: number): number => {
  const num: number = Number(val);
  if (!isNaN(num)) {
    return num;
  }
  return defaultValue;
}

export const tryConvertNumberStringToBool = (val: string, defaultValue: boolean): boolean => {
  const num: number = Number(val);
  if (!isNaN(num)) {
    if (num === 1) {
      return true;
    } else if (num === 0) {
      return false;
    } else {
      return defaultValue;
    }
  }
  return defaultValue;
}

export const getDevicePositionLabel = (rowIndex: number, columnIndex: number): string => {

  if (!isNumber(rowIndex)) {
    rowIndex = tryConvertStringToNumber(rowIndex, -1);
  }
  if (!isNumber(columnIndex)) {
    columnIndex = tryConvertStringToNumber(columnIndex, -1);
  }

  if (rowIndex < 0 || columnIndex < 0) {
    return 'Unassigned';
  } else {
    return String.fromCharCode(65 + columnIndex) + String.fromCharCode(49 + rowIndex);
  }
}