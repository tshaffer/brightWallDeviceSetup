import { BrightWallModelAction } from './baseAction';
import { BrightWallConfiguration } from '../type';

// ------------------------------------
// Constants
// ------------------------------------
export const SET_IS_MASTER = 'SET_IS_MASTER';

// ------------------------------------
// Actions
// ------------------------------------
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

// ------------------------------------
// Reducer
// ------------------------------------

const initialState: BrightWallConfiguration = {
  isMaster: false,
};


export const brightWallConfigurationReducer = (
  state: BrightWallConfiguration = initialState,
  action: SetIsMasterAction
): BrightWallConfiguration => {
  switch (action.type) {
    default:
      return state;
  }
};


