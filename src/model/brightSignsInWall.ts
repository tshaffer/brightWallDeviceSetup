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

// export const setBsiwSerialNumber = (
//   serialNumber: string,
// ): SetSerialNumberAction => {
//   return {
//     type: SET_BSIW_SERIAL_NUMBER,
//     payload: {
//       serialNumber,
//     },
//   };
// };

// interface SetSerialNumberPayload {
//   serialNumber: string;
// }
// type SetSerialNumberAction = BrightWallModelAction<SetSerialNumberPayload>;

// export const setBsiwSerialNumber = (
//   serialNumber: string,
// ): SetSerialNumberAction => {
//   return {
//     type: SET_BSIW_SERIAL_NUMBER,
//     payload: {
//       serialNumber,
//     },
//   };
// };

// interface SetIpAddressPayload {
//   ipAddress: string;
// }
// type SetIpAddressAction = BrightWallModelAction<SetIpAddressPayload>;

// export const setBsiwIpAddress = (
//   ipAddress: string,
// ): SetIpAddressAction => {
//   return {
//     type: SET_BSIW_IP_ADDRESS,
//     payload: {
//       ipAddress,
//     },
//   };
// };

// interface SetIsMasterPayload {
//   isMaster: boolean;
// }
// type SetIsMasterAction = BrightWallModelAction<SetIsMasterPayload>;

// export const setBsiwIsMaster = (
//   isMaster: boolean,
// ): SetIsMasterAction => {
//   return {
//     type: SET_BSIW_IS_MASTER,
//     payload: {
//       isMaster,
//     },
//   };
// };

// interface SetRowIndexPayload {
//   rowIndex: number;
// }
// type SetRowIndexAction = BrightWallModelAction<SetRowIndexPayload>;

// export const setBsiwRowIndex = (
//   rowIndex: number,
// ): SetRowIndexAction => {
//   return {
//     type: SET_BSIW_ROW_INDEX,
//     payload: {
//       rowIndex,
//     },
//   };
// };

// interface SetColumnIndexPayload {
//   columnIndex: number;
// }
// type SetColumnIndexAction = BrightWallModelAction<SetColumnIndexPayload>;

// export const setBsiwColumnIndex = (
//   columnIndex: number,
// ): SetColumnIndexAction => {
//   return {
//     type: SET_BSIW_COLUMN_INDEX,
//     payload: {
//       columnIndex,
//     },
//   };
// };

// interface SetBezelWidthPayload {
//   serialNumber: string;
//   bezelWidth: number;
// }
// type SetBezelWidthAction = BrightWallModelAction<SetBezelWidthPayload>;

// export const updateBezelWidth = (
//   serialNumber: string,
//   bezelWidth: number,
// ): SetBezelWidthAction => {
//   return {
//     type: SET_BSIW_BEZEL_WIDTH,
//     payload: {
//       serialNumber,
//       bezelWidth,
//     },
//   };
// };

// interface SetBezelHeightPayload {
//   serialNumber: string;
//   bezelHeight: number;
// }
// type SetBezelHeightAction = BrightWallModelAction<SetBezelHeightPayload>;

// export const updateBezelHeight = (
//   serialNumber: string,
//   bezelHeight: number,
// ): SetBezelHeightAction => {
//   return {
//     type: SET_BSIW_BEZEL_HEIGHT,
//     payload: {
//       serialNumber,
//       bezelHeight,
//     },
//   };
// };

// interface SetBezelScreenWidthPayload {
//   serialNumber: string;
//   bezelScreenWidth: number;
// }
// type SetBezelScreenWidthAction = BrightWallModelAction<SetBezelScreenWidthPayload>;

// export const updateBezelScreenWidth = (
//   serialNumber: string,
//   bezelScreenWidth: number,
// ): SetBezelScreenWidthAction => {
//   return {
//     type: SET_BSIW_BEZEL_SCREEN_WIDTH,
//     payload: {
//       serialNumber,
//       bezelScreenWidth,
//     },
//   };
// };

// interface SetBezelScreenHeightPayload {
//   serialNumber: string;
//   bezelScreenHeight: number;
// }
// type SetBezelScreenHeightAction = BrightWallModelAction<SetBezelScreenHeightPayload>;

// export const updateBezelScreenHeight = (
//   serialNumber: string,
//   bezelScreenHeight: number,
// ): SetBezelScreenHeightAction => {
//   return {
//     type: SET_BSIW_BEZEL_SCREEN_HEIGHT,
//     payload: {
//       serialNumber,
//       bezelScreenHeight,
//     },
//   };
// };

// // ------------------------------------
// // Reducer
// // ------------------------------------

// const initialState: BrightSignInWallMap = {};

// export const brightSignsInWallReducer = (
//   state: BrightSignInWallMap = initialState,
//   action: SetSerialNumberAction & SetIpAddressAction & SetIsMasterAction & SetRowIndexAction & SetColumnIndexAction & SetBezelWidthAction & SetBezelHeightAction & SetBezelScreenWidthAction & SetBezelScreenHeightAction
// ): BrightSignInWallMap => {
//   switch (action.type) {
//     case SET_BSIW_SERIAL_NUMBER:
//       return {
//         ...state,
//         [action.payload.serialNumber]: {
//           ...state[action.payload.serialNumber],
//           serialNumber: action.payload.serialNumber,
//         }
//       };
//     case SET_BSIW_IP_ADDRESS:
//       return {
//         ...state,
//         [action.payload.serialNumber]: {
//           ...state[action.payload.serialNumber],
//           ipAddress: action.payload.ipAddress,
//         }
//       };
//     case SET_BSIW_IS_MASTER:
//       return {
//         ...state,
//         [action.payload.serialNumber]: {
//           ...state[action.payload.serialNumber],
//           isMaster: action.payload.isMaster,
//         }
//       };
//     case SET_BSIW_ROW_INDEX:
//       return {
//         ...state,
//         [action.payload.serialNumber]: {
//           ...state[action.payload.serialNumber],
//           rowIndex: action.payload.rowIndex,
//         }
//       };
//     case SET_BSIW_COLUMN_INDEX:
//       return {
//         ...state,
//         [action.payload.serialNumber]: {
//           ...state[action.payload.serialNumber],
//           rowIndex: action.payload.columnIndex,
//         }
//       };
//     case SET_BSIW_BEZEL_WIDTH:
//       return {
//         ...state,
//         [action.payload.serialNumber]: {
//           ...state[action.payload.serialNumber],
//           bezelWidth: action.payload.bezelWidth,
//         }
//       };
//     case SET_BSIW_BEZEL_HEIGHT:
//       return {
//         ...state,
//         [action.payload.serialNumber]: {
//           ...state[action.payload.serialNumber],
//           bezelHeight: action.payload.bezelHeight,
//         }
//       };
//     case SET_BSIW_BEZEL_SCREEN_WIDTH:
//       return {
//         ...state,
//         [action.payload.serialNumber]: {
//           ...state[action.payload.serialNumber],
//           bezelScreenWidth: action.payload.bezelScreenWidth,
//         }
//       };
//     case SET_BSIW_BEZEL_SCREEN_HEIGHT:
//       return {
//         ...state,
//         [action.payload.serialNumber]: {
//           ...state[action.payload.serialNumber],
//           bezelScreenHeight: action.payload.bezelScreenHeight,
//         }
//       };
//     default:
//       return state;
//   }
// };
