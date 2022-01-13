import * as React from 'react';
import { connect } from 'react-redux';

import { isString } from 'lodash';

import { getActivePresentationName } from '../selector';

import '../styles/deviceSetup.css';

import BrightWallGrid from './BrightWallGrid';

import DeviceInfo from './DeviceInfo';
import ScreenPosition from './ScreenPosition';

export interface BrightWallDeviceSetupProps {
  activePresentationName: string,
}


// -----------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------

const BrightWallDeviceSetup = (props: BrightWallDeviceSetupProps) => {

  const activePresentationName = isString(props.activePresentationName) ? props.activePresentationName : 'none';

  return (
    <div className='screenInfoContainer'>

      <div className='presentationName'>
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
    activePresentationName: getActivePresentationName(state),
  };
}

export default connect(mapStateToProps)(BrightWallDeviceSetup);
