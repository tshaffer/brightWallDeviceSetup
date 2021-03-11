import { BrightWallModelAction } from './baseAction';
import { BrightSignAttributes } from '../type';

// ------------------------------------
// Constants
// ------------------------------------
export const SET_SERIAL_NUMBER = 'SET_SERIAL_NUMBER';

// ------------------------------------
// Actions
// ------------------------------------
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

// ------------------------------------
// Reducer
// ------------------------------------

const initialState: BrightSignAttributes = {
  serialNumber: '',
};


export const brightSignAttributesReducer = (
  state: BrightSignAttributes = initialState,
  action: SetSerialNumberAction
): BrightSignAttributes => {
  switch (action.type) {
    default:
      return state;
  }
};


