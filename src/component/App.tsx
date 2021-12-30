import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AlignmentScreen from './AlignmentScreen';

import '../styles/deviceSetup.css';

import { DeviceSetupScreen } from '../type';
import { getBrightSignConfig } from '../controller';
import { getActiveScreen } from '../selector';

import BrightWallDeviceSetup from './BrightWallDeviceSetup';

/** @internal */
/** @private */
export interface AppProps {
  activeScreen: string;
  onGetBrightSignConfig: () => any;
}

// -----------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------

const App = (props: AppProps) => {

  React.useEffect(props.onGetBrightSignConfig, []);

  console.log('render app');

  switch (props.activeScreen) {
    case DeviceSetupScreen.ConfigureScreen:
      return (
        <BrightWallDeviceSetup />
      );
    case DeviceSetupScreen.AlignScreen:
      return (
        <div>
          <AlignmentScreen />
        </div>
      );
    default:
      return null;
  }

};

function mapStateToProps(state: any): Partial<AppProps> {
  return {
    activeScreen: getActiveScreen(state),
  };
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    onGetBrightSignConfig: getBrightSignConfig,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

