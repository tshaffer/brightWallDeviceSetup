import * as React from 'react';

import '../styles/deviceSetup.css';

import BrightWallGrid from './BrightWallGrid';
import DeviceInfo from './DeviceInfo';
import ScreenPosition from './ScreenPosition';

// -----------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------

const BrightWallDeviceSetup = () => {

  return (
    <div className='screenInfoContainer'>
      <div className='screenTopPaddingContainer'>
      </div>

      <div className='screenTopLeftPaddingContainer'>
      </div>

      <BrightWallGrid />

      <div className='screenTopRightPaddingContainer'>
      </div>

      <DeviceInfo />

      <ScreenPosition />

    </div>
  );
};

export default BrightWallDeviceSetup;

