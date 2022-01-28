import { BrightWallModelAction } from './baseAction';
import { BrightSignAttributes, BrightSignInWall, BrightSignInWallMap } from '../type';

// ------------------------------------
// Constants
// ------------------------------------
const SET_BRIGHTSIGN_IN_WALL = 'SET_BRIGHTSIGN_IN_WALL';
// const SET_BSIW_SERIAL_NUMBER = 'SET_BSIW_SERIAL_NUMBER';
// const SET_BSIW_IP_ADDRESS = 'SET_BSIW_IP_ADDRESS';
// const SET_BSIW_IS_MASTER = 'SET_BSIW_IS_MASTER';
// const SET_BSIW_ROW_INDEX = 'SET_BSIW_ROW_INDEX';
// const SET_BSIW_COLUMN_INDEX = 'SET_BSIW_COLUMN_INDEX';
// const SET_BSIW_BEZEL_WIDTH = 'SET_BSIW_BEZEL_WIDTH';
// const SET_BSIW_BEZEL_HEIGHT = 'SET_BSIW_BEZEL_HEIGHT';
// const SET_BSIW_BEZEL_SCREEN_WIDTH = 'SET_BSIW_BEZEL_SCREEN_WIDTH';
// const SET_BSIW_BEZEL_SCREEN_HEIGHT = 'SET_BSIW_BEZEL_SCREEN_HEIGHT';

// ------------------------------------
// Actions
// ------------------------------------

interface SetBrightSignInWallPayload {
  serialNumber: string;
  brightSignInWall: BrightSignInWall;
}

type SetBrightSignInWallAction = BrightWallModelAction<SetBrightSignInWallPayload>;

export const setBrightSignInWall = (
  serialNumber: string,
  brightSignInWall: BrightSignInWall,
): SetBrightSignInWallAction => {
  return {
    type: SET_BRIGHTSIGN_IN_WALL,
    payload: {
      serialNumber,
      brightSignInWall,
    },
  };
};

// ------------------------------------
// Reducer
// ------------------------------------

const initialState: BrightSignInWallMap = {};

export const brightSignsInWallReducer = (
  state: BrightSignInWallMap = initialState,
  action: SetBrightSignInWallAction,
): BrightSignInWallMap => {
  switch (action.type) {
    case SET_BRIGHTSIGN_IN_WALL:
      return {
        ...state,
        [action.payload.serialNumber]: action.payload.brightSignInWall,
      };
    default:
      return state;
  };
}
