export interface BrightSignConfig {
  brightSignAttributes: BrightSignAttributes;
  brightWallAttributes: BrightWallAttributes;
}

export interface BrightSignAttributes {
  serialNumber: string;
  activePresentationName: string;
  isBrightWall: boolean;
  macAddress: string;
  ipAddress: string;
  isMaster: boolean;
  isBrightWallConfiguratorHost: boolean;
  rowIndex: number;
  columnIndex: number;
  bezelWidth: number;
  bezelHeight: number;
  bezelScreenWidth: number;
  bezelScreenHeight: number;
}

export interface BrightWallAttributes {
  numRows: number;
  numColumns: number;
  brightWallDeviceSetupActiveScreen: DeviceSetupScreen;
  screenDimensions: {
    width: number,
    height: number,
  }
}

// export interface BrightSignAttributes {
//   isBrightWall: boolean;
//   activePresentationName: string;
//   serialNumber: string;
//   macAddress: string;
//   ipAddress: string;
// }

// export interface BrightWallConfiguration {
//   activeScreen: string;
//   isMaster: boolean;
//   rowIndex: number;
//   columnIndex: number;
//   numColumns: number;
//   numRows: number;
//   screenDimensions: {
//     width: number,
//     height: number,
//   }
// }

export enum DeviceSetupScreen {
  ConfigureScreen = 'ConfigureScreen',
  AlignScreen = 'AlignScreen',
}

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};
