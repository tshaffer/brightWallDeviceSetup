import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AlignmentPattern from './AlignmentPattern';

console.log('before import');
import '../styles/deviceSetup.css';
console.log('after import');

// import {
//   serialNumber,
//   videoWallRowIndex,
//   videoWallColumnIndex,
// } from '../config/config';
import { getBrightSignConfig } from '../controller';
import {
  getIsBrightWall,
  getSerialNumber,
  getMacAddress,
  getIsMaster,
  getRowIndex,
  getColumnIndex,
  getActiveScreen,
  getIpAddress,
} from '../selector';
import { DeviceSetupScreen } from '../type';
import BrightWallDeviceSetup from './BrightWallDeviceSetup';

/** @internal */
/** @private */
export interface AppProps {
  isBrightWall: boolean;
  serialNumber: string;
  macAddress: string;
  ipAddress: string;
  activeScreen: string;
  isMaster: boolean;
  rowIndex: number;
  columnIndex: number;
  onGetBrightSignConfig: () => any;
}

// -----------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------

const App = (props: AppProps) => {

  // const [_setupScreen, _setSetupScreen] = React.useState('configureScreen');


  // Equivalent to old componentDidMount
  React.useEffect(props.onGetBrightSignConfig, []);

  console.log('render app');

  const masterOrSlaveLabel = props.isMaster ? 'Master' : 'Slave';

  let positionLabel;
  if (props.rowIndex < 0 || props.columnIndex < 0) {
    positionLabel = 'Position in wall: unassigned';
  } else {
    positionLabel = 'Position in wall: row ' + props.rowIndex.toString() + ', column ' + props.columnIndex.toString();
    positionLabel = String.fromCharCode(65 + props.columnIndex) + String.fromCharCode(49 + props.rowIndex);
  }

  console.log('brightWallDeviceSetup');
  console.log(props.activeScreen);

  console.log('take 1');

  switch (props.activeScreen) {
    case DeviceSetupScreen.ConfigureScreen:
      return (
        <BrightWallDeviceSetup />
      );
    case DeviceSetupScreen.AlignScreen:
      return (
        <div>
          <AlignmentPattern />
        </div>
      );
    default:
      return null;
  }

  // switch (props.activeScreen) {
  //   case DeviceSetupScreen.ConfigureScreen:
  //     return (
  //       <div className='App'>
  //         <div className='bodyDiv'>
  //           Wall Config Visual goes here - update
  //         </div>
  //         <div className='bodyDiv'>

  //           <span className='bold'>IP Address:</span>
  //           <span>{' ' + props.ipAddress}:8088</span>
  //           <br />

  //           <span className='bold'>Serial Number:</span>
  //           <span>&nbsp;&nbsp;{props.serialNumber}</span>
  //           <br />

  //           <span className='bold'>MAC Address:</span>
  //           <span>&nbsp;&nbsp;{props.macAddress}</span>
  //           <br />

  //           <span className='bold'>Master/Slave:</span>
  //           <span>&nbsp;&nbsp;{masterOrSlaveLabel}</span>
  //           <br />

  //           <div>
  //             <span className='bold'>Screen Position:</span>
  //             <span>&nbsp;&nbsp;{positionLabel}</span>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   case DeviceSetupScreen.AlignScreen:
  //     return (
  //       <div>
  //         <AlignmentPattern />
  //       </div>
  //     );
  //   default:
  //     return null;
  // }

};

function mapStateToProps(state: any, ownProps: any): Partial<any> {
  return {
    isBrightWall: getIsBrightWall(state),
    serialNumber: getSerialNumber(state),
    macAddress: getMacAddress(state),
    ipAddress: getIpAddress(state),
    activeScreen: getActiveScreen(state),
    isMaster: getIsMaster(state),
    rowIndex: getRowIndex(state),
    columnIndex: getColumnIndex(state),
  };
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    onGetBrightSignConfig: getBrightSignConfig,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

