import { BrightWallModelAction } from './baseAction';
import { BrightSignAttributes } from '../type';
import { isString } from 'lodash';

// ------------------------------------
// Constants
// ------------------------------------
const SET_SERIAL_NUMBER = 'SET_SERIAL_NUMBER';
const SET_ACTIVE_PRESENTATION_NAME = 'SET_ACTIVE_PRESENTATION_NAME';
const SET_IS_BRIGHTWALL = 'SET_IS_BRIGHTWALL';
const SET_MAC_ADDRESS = 'SET_MAC_ADDRESS';
const SET_IP_ADDRESS = 'SET_IP_ADDRESS';
const SET_IS_MASTER = 'SET_IS_MASTER';
const SET_ROW_INDEX = 'SET_ROW_INDEX';
const SET_COLUMN_INDEX = 'SET_COLUMN_INDEX';
const SET_BEZEL_DIMENSIONS = 'SET_BEZEL_DIMENSIONS';
const SET_IS_BRIGHTWALL_CONFIGURATOR_HOST = 'SET_IS_BRIGHTWALL_CONFIGURATOR_HOST';

// ------------------------------------
// Actions
// ------------------------------------
export interface SetIsBrightWallPayload {
  isBrightWall: boolean;
}
type SetIsBrightWallAction = BrightWallModelAction<SetIsBrightWallPayload>;

export const setIsBrightWall = (
  isBrightWall: boolean,
): SetIsBrightWallAction => {
  return {
    type: SET_IS_BRIGHTWALL,
    payload: {
      isBrightWall,
    },
  };
};

export interface SetActivePresentationNamePayload {
  activePresentationName: string;
}
type SetActivePresentationNameAction = BrightWallModelAction<SetActivePresentationNamePayload>;

export const setActivePresentationName = (
  activePresentationName: string,
): SetActivePresentationNameAction => {
  return {
    type: SET_ACTIVE_PRESENTATION_NAME,
    payload: {
      activePresentationName,
    },
  };
};


export interface SetSerialNumberPayload {
  serialNumber: string;
}
type SetSerialNumberAction = BrightWallModelAction<SetSerialNumberPayload>;

export const setSerialNumber = (
  serialNumber: string,
): SetSerialNumberAction => {
  return {
    type: SET_SERIAL_NUMBER,
    payload: {
      serialNumber,
    },
  };
};

export interface SetMacAddressPayload {
  macAddress: string;
}
type SetMacAddressAction = BrightWallModelAction<SetMacAddressPayload>;

export const setMacAddress = (
  macAddress: string,
): SetMacAddressAction => {
  return {
    type: SET_MAC_ADDRESS,
    payload: {
      macAddress,
    },
  };
};

export interface SetIpAddressPayload {
  ipAddress: string;
}
type SetIpAddressAction = BrightWallModelAction<SetIpAddressPayload>;

export const setIpAddress = (
  ipAddress: string,
): SetIpAddressAction => {
  return {
    type: SET_IP_ADDRESS,
    payload: {
      ipAddress,
    },
  };
};

export interface SetIsMasterPayload {
  isMaster: boolean;
}
type SetIsMasterAction = BrightWallModelAction<SetIsMasterPayload>;

export const setIsMaster = (
  isMaster: boolean,
): SetIsMasterAction => {
  return {
    type: SET_IS_MASTER,
    payload: {
      isMaster,
    },
  };
};

export interface SetIsBrightWallConfiguratorHostPayload {
  isBrightWallConfiguratorHost: boolean;
}
type SetIsBrightWallConfiguratorHostAction = BrightWallModelAction<SetIsBrightWallConfiguratorHostPayload>;

export const setIsBrightWallConfiguratorHost = (
  isBrightWallConfiguratorHost: boolean,
): SetIsBrightWallConfiguratorHostAction => {

  // TEDTODOBW
  if (isString(isBrightWallConfiguratorHost)) {
    if ((isBrightWallConfiguratorHost as string).toLowerCase() === '0') {
      isBrightWallConfiguratorHost = false;
    }
  }
  return {
    type: SET_IS_BRIGHTWALL_CONFIGURATOR_HOST,
    payload: {
      isBrightWallConfiguratorHost,
    },
  };
};


export interface SetRowIndexPayload {
  rowIndex: number;
}
type SetRowIndexAction = BrightWallModelAction<SetRowIndexPayload>;

export const setRowIndex = (
  rowIndex: number,
): SetRowIndexAction => {
  return {
    type: SET_ROW_INDEX,
    payload: {
      rowIndex,
    },
  };
};

export interface SetColumnIndexPayload {
  columnIndex: number;
}
type SetColumnIndexAction = BrightWallModelAction<SetColumnIndexPayload>;

export const setColumnIndex = (
  columnIndex: number,
): SetColumnIndexAction => {
  return {
    type: SET_COLUMN_INDEX,
    payload: {
      columnIndex,
    },
  };
};

export interface SetBezelDimensionsPayload {
  bezelLeft: number;
  bezelRight: number;
  bezelTop: number;
  bezelBottom: number;
  screenWidth: number;
  screenHeight: number;
}
type SetBezelDimensionsAction = BrightWallModelAction<SetBezelDimensionsPayload>;

export const updateBezelDimensions = (
  bezelLeft: number,
  bezelRight: number,
  bezelTop: number,
  bezelBottom: number,
  screenWidth: number,
  screenHeight: number,
): SetBezelDimensionsAction => {
  return {
    type: SET_BEZEL_DIMENSIONS,
    payload: {
      bezelLeft,
      bezelRight,
      bezelTop,
      bezelBottom,
      screenWidth,
      screenHeight,
    },
  };
};

// ------------------------------------
// Reducer
// ------------------------------------

const initialState: BrightSignAttributes = {
  isBrightWall: false,
  macAddress: '',
  serialNumber: '',
  ipAddress: '',
  activePresentationName: '',
  isMaster: false,
  isBrightWallConfiguratorHost: false,
  rowIndex: -1,
  columnIndex: -1,
  bezelLeft: 0,
  bezelRight: 0,
  bezelTop: 0,
  bezelBottom: 0,
  bezelScreenWidth: 0,
  bezelScreenHeight: 0,
};


export const brightSignAttributesReducer = (
  state: BrightSignAttributes = initialState,
  action: SetSerialNumberAction & SetActivePresentationNameAction & SetIsBrightWallAction & SetMacAddressAction & SetIpAddressAction & SetIsMasterAction & SetIsBrightWallConfiguratorHostAction & SetBezelDimensionsAction & SetRowIndexAction & SetColumnIndexAction
): BrightSignAttributes => {
  switch (action.type) {
    case SET_SERIAL_NUMBER:
      return {
        ...state,
        serialNumber: action.payload.serialNumber,
      };
    case SET_ACTIVE_PRESENTATION_NAME:
      return {
        ...state,
        activePresentationName: action.payload.activePresentationName,
      }
    case SET_IS_BRIGHTWALL:
      return {
        ...state,
        isBrightWall: action.payload.isBrightWall,
      };
    case SET_MAC_ADDRESS:
      return {
        ...state,
        macAddress: action.payload.macAddress,
      };
    case SET_IP_ADDRESS:
      return {
        ...state,
        ipAddress: action.payload.ipAddress,
      };
    case SET_BEZEL_DIMENSIONS:
      return {
        ...state,
        bezelLeft: action.payload.bezelLeft,
        bezelRight: action.payload.bezelRight,
        bezelTop: action.payload.bezelTop,
        bezelBottom: action.payload.bezelBottom,
        bezelScreenWidth: action.payload.screenWidth,
        bezelScreenHeight: action.payload.screenHeight,
      }
    case SET_IS_MASTER:
      return {
        ...state,
        isMaster: action.payload.isMaster,
      };
    case SET_IS_BRIGHTWALL_CONFIGURATOR_HOST:
      return {
        ...state,
        isBrightWallConfiguratorHost: action.payload.isBrightWallConfiguratorHost,
      };
    case SET_ROW_INDEX:
      return {
        ...state,
        rowIndex: action.payload.rowIndex,
      };
    case SET_COLUMN_INDEX:
      return {
        ...state,
        columnIndex: action.payload.columnIndex,
      };
    default:
      return state;
  }
};
