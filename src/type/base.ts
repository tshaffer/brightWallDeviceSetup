/** @module Types:base */

/** @internal */
/** @private */
export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export interface BrightSignState {
  appAttributes: AppAttributes;
  brightSignAttributes: BrightSignAttributes;
  brightWallConfiguration: BrightWallConfiguration;
}

export interface AppAttributes {
  platform: string;
}

export interface BrightSignAttributes {
  isBrightWall: boolean;
  activePresentationName: string;
  serialNumber: string;
  macAddress: string;
  ipAddress: string;
}

export interface BrightWallConfiguration {
  activeScreen: string;
  isMaster: boolean;
  rowIndex: number;
  columnIndex: number;
  numColumns: number;
  numRows: number;
  screenDimensions: {
    width: number,
    height: number,
  }
}

export enum DeviceSetupScreen {
  ConfigureScreen = 'ConfigureScreen',
  AlignScreen = 'AlignScreen',
}
