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

  const gridItems: Array<string> = [
    'A1',
    'B1',
    'C1',
    'D1',
    'E1',
    'F1',
    'G1',
    'H1',
    'A2',
    'B2',
    'C2',
    'D2',
    'E2',
    'F2',
    'G2',
    'H2',
  ]

  return (
    <div className='screenInfoContainer'>
      <div className='screenTopPaddingContainer'>
      </div>

      <div className='screenTopLeftPaddingContainer'>
      </div>

      <BrightWallGrid
        items={gridItems}
      />

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

