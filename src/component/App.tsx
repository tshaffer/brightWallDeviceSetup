import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AlignmentPattern from './AlignmentPattern';

import { makeStyles } from '@material-ui/core/styles';
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

const useStyles = makeStyles({
  parentDiv: {
    position: 'relative',
    // height: '1080px',
    height: '100%',
  },
  App: {
    // background: linear - gradient(90deg, #753CD9, #290D5B),
    background: 'lightBlue',
    minHeight: '100vh',
    color: 'white',
    fontFamily: "PTSans",
    textAlign: 'center',
  },
  AppHeader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
  },
  logoContainerStyle: {
    height: '346px',
    width: '1603px',
    margin: '100px 10px 5px 10px',
    position: 'absolute',
    // background: url('BrightSign_logo_white.png') no-repeat 50% 80%',
    backgroundSize: '400px',
  },
  vl: {
    borderLeft: '6px solid green',
    height: '500px',
    position: 'absolute',
    left: '50%',
    marginLeft: '-3px',
    top: '0',
  },
  bodyDiv: {
    marginTop: '22%'
  },
  bold: {
    fontWeight: 'bold',
  }
});

const App = (props: AppProps) => {

  // const [_setupScreen, _setSetupScreen] = React.useState('configureScreen');

  const classes = useStyles();

  // Equivalent to old componentDidMount
  React.useEffect(props.onGetBrightSignConfig, []);

  console.log('render app');

  const masterOrSlaveLabel = props.isMaster ? 'Master' : 'Slave';

  let positionLabel;
  if (props.rowIndex < 0 || props.columnIndex < 0) {
    positionLabel = 'Position in wall: unassigned';
  } else {
    positionLabel = 'Position in wall: row ' + props.rowIndex.toString() + ', column ' + props.columnIndex.toString();
  }

  console.log('brightWallDeviceSetup');
  console.log(props.activeScreen);

  console.log('take 1');

  //             <p>{positionLabel}</p>

  switch (props.activeScreen) {
    case DeviceSetupScreen.ConfigureScreen:
      return (
        <div className={classes.App}>
          <header className={classes.AppHeader}>
            <div className={classes.logoContainerStyle} />
          </header>
          <div className={classes.bodyDiv}>
            
            <span className={classes.bold}>IP Address:</span>
            <span>{' ' + props.ipAddress}:8088</span>
            <br/>

            <span className={classes.bold}>Serial Number:</span>
            <span>&nbsp;&nbsp;{props.serialNumber}</span>
            <br/>

            <span className={classes.bold}>MAC Address:</span>
            <span>&nbsp;&nbsp;{props.macAddress}</span>
            <br/>

            <span className={classes.bold}>Master/Slave:</span>
            <span>&nbsp;&nbsp;{masterOrSlaveLabel}</span>
            <br/>
          </div>
        </div>
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

