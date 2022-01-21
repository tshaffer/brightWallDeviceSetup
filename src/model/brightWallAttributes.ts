import { BrightWallModelAction } from './baseAction';
import { BrightWallAttributes, DeviceSetupScreen } from '../type';
import { cloneDeep } from 'lodash';

// ------------------------------------
// Constants
// ------------------------------------
export const SET_NUM_ROWS = 'SET_NUM_ROWS';
export const SET_NUM_COLUMNS = 'SET_NUM_COLUMNS';
export const SET_ACTIVE_SETUP_SCREEN = 'SET_ACTIVE_SETUP_SCREEN';
export const SET_SCREEN_DIMENSIONS = 'SET_SCREEN_DIMENSIONS';

// ------------------------------------
// Actions
// ------------------------------------

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

export interface SetActiveSetupScreenPayload {
  activeSetupScreen: DeviceSetupScreen;
}
type SetActiveSetupScreenAction = BrightWallModelAction<SetActiveSetupScreenPayload>;

export const setActiveSetupScreen = (
  activeSetupScreen: DeviceSetupScreen,
): SetActiveSetupScreenAction => {
  return {
    type: SET_ACTIVE_SETUP_SCREEN,
    payload: {
      activeSetupScreen,
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

const initialState: BrightWallAttributes = {
  brightWallDeviceSetupActiveScreen: DeviceSetupScreen.ConfigureScreen,
  numRows: -1,
  numColumns: -1,
  screenDimensions: {
    width: 1920,
    height: 1080,
  }
};


export const brightWallAttributesReducer = (
  state: BrightWallAttributes = initialState,
  action:
    SetNumRowsAction
    & SetNumColumnsAction
    & SetActiveSetupScreenAction
    & SetScreenDimensionsAction,
): BrightWallAttributes => {
  switch (action.type) {
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
    case SET_ACTIVE_SETUP_SCREEN:
      return {
        ...state,
        brightWallDeviceSetupActiveScreen: action.payload.activeSetupScreen,
      };
    case SET_SCREEN_DIMENSIONS:
      const newState = cloneDeep(state);
      newState.screenDimensions.width = action.payload.width;
      newState.screenDimensions.height = action.payload.height;
      return newState;
    default:
      return state;
  }
};


