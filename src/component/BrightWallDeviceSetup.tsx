import * as React from 'react';
import { connect } from 'react-redux';

import { isString } from 'lodash';

import {
  getActivePresentationName,
  getIpAddress,
  getIsBrightWallConfiguratorHost,
} from '../selector';

import '../styles/deviceSetup.css';

import BrightWallGrid from './BrightWallGrid';

import DeviceInfo from './DeviceInfo';
import ScreenPosition from './ScreenPosition';

export interface BrightWallDeviceSetupProps {
  ipAddress: string,
  isBrightWallConfiguratorHost: boolean;
  activePresentationName: string,
}


// -----------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------

const BrightWallDeviceSetup = (props: BrightWallDeviceSetupProps) => {

  const activePresentationName = isString(props.activePresentationName) ? props.activePresentationName : 'none';

  const getNavigationInstructions = () => {

    if (props.ipAddress === '') {
      return (
        <p>Navigate to {props.ipAddress}:8088 in your browser to launch BrightWall Setup</p>
      );
    } else if (props.isBrightWallConfiguratorHost) {
      return (
        <p>The device at {props.ipAddress}:8088 is hosting BrightWall Setup</p>
      );
    }
    return null;
  }

  const navigationInstructions = getNavigationInstructions();

  return (
    <div className='screenInfoContainer'>

      <div className='presentationName'>
        {navigationInstructions}
        <p>Presentation Name: {activePresentationName}</p>
      </div>

      <BrightWallGrid />

      <div className='screenTopRightPaddingContainer'>
      </div>

      <DeviceInfo />

      <ScreenPosition />

    </div>
  );
};

function mapStateToProps(state: any): Partial<BrightWallDeviceSetupProps> {
  return {
    ipAddress: getIpAddress(state),
    isBrightWallConfiguratorHost: getIsBrightWallConfiguratorHost(state),
    activePresentationName: getActivePresentationName(state),
  };
}

export default connect(mapStateToProps)(BrightWallDeviceSetup);
