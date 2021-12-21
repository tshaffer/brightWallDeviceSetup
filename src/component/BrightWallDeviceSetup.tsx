import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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

      <ScreenPosition
        position='B2'
      />

    </div>
  );
};

function mapStateToProps(state: any, ownProps: any): Partial<any> {
  return {
  };
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BrightWallDeviceSetup);

