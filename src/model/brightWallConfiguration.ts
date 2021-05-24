import { BrightWallModelAction } from './baseAction';
import { BrightWallConfiguration, DeviceSetupScreen } from '../type';
import { cloneDeep } from 'lodash';

// ------------------------------------
// Constants
// ------------------------------------
export const SET_BRIGHTWALL_DEVICE_SETUP_ACTIVE_SCREEN = 'SET_BRIGHTWALL_DEVICE_SETUP_ACTIVE_SCREEN';
export const SET_IS_MASTER = 'SET_IS_MASTER';
export const SET_ROW_INDEX = 'SET_ROW_INDEX';
export const SET_COLUMN_INDEX = 'SET_COLUMN_INDEX';
export const SET_NUM_ROWS = 'SET_NUM_ROWS';
export const SET_NUM_COLUMNS = 'SET_NUM_COLUMNS';
export const SET_SCREEN_DIMENSIONS = 'SET_SCREEN_DIMENSIONS';

// ------------------------------------
// Actions
// ------------------------------------

export interface SetBrightWallDeviceSetupActiveScreenPayload {
  activeScreen: string;
}
type SetBrightWallDeviceSetupActiveScreenAction = BrightWallModelAction<SetBrightWallDeviceSetupActiveScreenPayload>;

export const setBrightWallDeviceSetupActiveScreen = (
  activeScreen: string,
): SetBrightWallDeviceSetupActiveScreenAction => {
  console.log('setBrightWallDeviceSetupActiveScreen');
  console.log(activeScreen);
  return {
    type: SET_BRIGHTWALL_DEVICE_SETUP_ACTIVE_SCREEN,
    payload: {
      activeScreen,
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


export interface SetNumRowsPayload {
  numRows: number;
}
type SetNumRowsAction = BrightWallModelAction<SetNumRowsPayload>;

export const setNumRows = (
  numRows: number,
): SetNumRowsAction => {
  return {
    type: SET_NUM_ROWS,
    payload: {
      numRows,
    },
  };
};

export interface SetNumColumnsPayload {
  numColumns: number;
}
type SetNumColumnsAction = BrightWallModelAction<SetNumColumnsPayload>;

export const setNumColumns = (
  numColumns: number,
): SetNumColumnsAction => {
  return {
    type: SET_NUM_COLUMNS,
    payload: {
      numColumns,
    },
  };
};

export interface SetScreenDimensionsPayload {
  width: number;
  height: number;
}
type SetScreenDimensionsAction = BrightWallModelAction<SetScreenDimensionsPayload>;

export const setScreenDimensions = (
  width: number,
  height: number,
): SetScreenDimensionsAction => {
  return {
    type: SET_SCREEN_DIMENSIONS,
    payload: {
      width,
      height,
    },
  };
};

// ------------------------------------
// Reducer
// ------------------------------------

const initialState: BrightWallConfiguration = {
  activeScreen: DeviceSetupScreen.ConfigureScreen,
  isMaster: false,
  rowIndex: -1,
  columnIndex: -1,
  numRows: -1,
  numColumns: -1,
  screenDimensions: {
    width: 1920,
    height: 1080,
  }
};


export const brightWallConfigurationReducer = (
  state: BrightWallConfiguration = initialState,
  action: SetBrightWallDeviceSetupActiveScreenAction
    & SetIsMasterAction
    & SetRowIndexAction
    & SetColumnIndexAction
    & SetNumRowsAction
    & SetNumColumnsAction
    & SetScreenDimensionsAction,
): BrightWallConfiguration => {
  switch (action.type) {
    case SET_BRIGHTWALL_DEVICE_SETUP_ACTIVE_SCREEN:
      console.log('SET_BRIGHTWALL_DEVICE_SETUP_ACTIVE_SCREEN');
      console.log(action.payload.activeScreen);
      return {
        ...state,
        activeScreen: action.payload.activeScreen,
      }
    case SET_IS_MASTER:
      return {
        ...state,
        isMaster: action.payload.isMaster,
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
    case SET_NUM_ROWS:
      return {
        ...state,
        numRows: action.payload.numRows,
      };
    case SET_NUM_COLUMNS:
      return {
        ...state,
        numColumns: action.payload.numColumns,
      };
    case SET_SCREEN_DIMENSIONS:
      const newState = cloneDeep(state);
      newState.screenDimensions.width = action.payload.width;
      newState.screenDimensions.height = action.payload.height;
      return newState;
    default:
      console.log('default');
      console.log(action.type);
      // console.log(action.payload.activeScreen);
      return state;
  }
};


