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
