export interface BrightSignConfig {
  brightSignAttributes: BrightSignAttributes;
  brightWallAttributes: BrightWallAttributes;
  brightSignsInWall: BrightSignInWallMap;
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

export interface BrightSignInWallMap {
  [key: string]: BrightSignInWall;  // key is serialNumber
}

// TEDTODOBW - reuse BrightSignAttributes above??
export interface BrightSignInWall {
  serialNumber: string;
  ipAddress: string;
  isMaster: boolean;
  rowIndex: number;
  columnIndex: number;
  bezelWidth: number;
  bezelHeight: number;
  bezelScreenWidth: number;
  bezelScreenHeight: number;
}

export interface NetworkConfig {
  client_identifier: string;
  configured_proxy: string;
  current_proxy: string;
  dhcp: boolean;
  dns_servers: string[];
  domain: string;
  ethernet_mac: string;
  hostname: string;
  ip4_address: string;
  ip4_broadcast: string;
  ip4_gateway: string;
  ip4_netmask: string;
  link: boolean;
  mdns_hostname: string;
  metric: number;
  proxy_bypass: string;
  shape_inbound: number;
  time_server: string;
  type: string;
}

export interface NetworkInterface {
  id: string;
  hostName: string;
  currentConfig: NetworkConfig;
}

export interface NetworkInterfaceMap {
  [key: string]: NetworkInterface;
}

export enum DeviceSetupScreen {
  ConfigureScreen = 'ConfigureScreen',
  AlignScreen = 'AlignScreen',
}

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};
