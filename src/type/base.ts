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
  serialNumber: string;
}

export interface BrightWallConfiguration {
  isMaster: boolean;
  rowIndex: number;
  columnIndex: number;
  numColumns: number;
  numRows: number;
}
