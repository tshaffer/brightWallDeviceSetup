/** @module Types:base */

/** @internal */
/** @private */
export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export interface BrightSignState {
  brightSignAttributes: BrightSignAttributes;
  brightWallConfiguration: BrightWallConfiguration;
}

export interface BrightSignAttributes {
  serialNumber: string;
}

export interface BrightWallConfiguration {
  isMaster: boolean;
}
