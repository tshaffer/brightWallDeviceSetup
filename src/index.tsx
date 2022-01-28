import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import { brightWallModelReducer, setActivePresentationName, setColumnIndex, setIsBrightWallConfiguratorHost, setIsMaster, setRowIndex, updateBezelDimensions } from './model';

import App from './component/App';
import { isNil } from 'lodash';
import { isString } from 'lodash';
import {
  BrightSignInWall,
  NetworkConfig,
  NetworkInterface,
  NetworkInterfaceMap,
} from './type';
import { setBrightSignInWall } from './model/brightSignsInWall';

// const platform = getPlatform();
// console.log(platform);

var bsMessage = new BSMessagePort();
console.log('bsMessage');
console.log(bsMessage);

bsMessage.onbsmessage = (msg: any) => {

  console.log('onbsmessage invoked');
  console.log(msg);
  console.log(msg.data);
  for (const key in msg.data) {
    if (Object.prototype.hasOwnProperty.call(msg.data, key)) {
      const value = msg.data[key];
      console.log('key');
      console.log(key);
      console.log('value');
      console.log(value);
    }
  }

  if (!isNil(msg) && !isNil(msg.data) && !isNil(msg.data.command)) {
    switch (msg.data['command']) {
      case 'setBrightWallPosition':
        if (msg.data.hasOwnProperty('rowindex') && msg.data.hasOwnProperty('columnindex')) {
          const rowIndex: number = msg.data['rowindex'];
          console.log('rowIndex');
          console.log(rowIndex);
          const columnIndex: number = msg.data['columnindex'];
          console.log('columnIndex');
          console.log(columnIndex);

          store.dispatch(setRowIndex(rowIndex));
          store.dispatch(setColumnIndex(columnIndex));
        }
        break;
      case 'setBrightWallIsMaster':
        if (msg.data.hasOwnProperty('ismaster')) {
          const isMaster: boolean = msg.data['ismaster'];
          console.log('isMaster');
          console.log(isMaster);

          // TEDTODOBW
          let isMasterParam: boolean;
          if (isString(isMaster)) {
            isMasterParam = (isMaster as string).toLowerCase() === '1';
          } else {
            isMasterParam = isMaster;
          }
          store.dispatch(setIsMaster(isMasterParam));
        }
        break;
      case 'setActivePresentationName':
        if (msg.data.hasOwnProperty('data')) {
          const activePresentationName: string = msg.data['data'];
          console.log('activePresentationName');
          console.log(activePresentationName);
          store.dispatch(setActivePresentationName(activePresentationName));
        }
        break;
      case 'setIsBrightWallConfiguratorHost':
        if (msg.data.hasOwnProperty('data')) {
          const isBrightWallConfiguratorHost: boolean = msg.data['data'];
          console.log('isBrightWallConfiguratorHost');
          console.log(isBrightWallConfiguratorHost);
          store.dispatch(setIsBrightWallConfiguratorHost(isBrightWallConfiguratorHost));
        }
        break;
      case 'setBrightSignDevicesInWall':
        if (msg.data.hasOwnProperty('data')) {
          const brightSignDevicesInWallStr: string = msg.data['data'];
          const brightSignDevicesInWallO: any = JSON.parse(brightSignDevicesInWallStr);

          const brightSignDevicesInWall: any[] = brightSignDevicesInWallO.brightSignDevicesInWallList;
          for (const brightSignDeviceInWall of brightSignDevicesInWall) {

            const brightSignAttributes: any = brightSignDeviceInWall.brightSignAttributes;
            const { serialNumber, isMaster, rowIndex, columnIndex, bezelWidth, bezelHeight, bezelScreenWidth, bezelScreenHeight } = brightSignAttributes;
            const networkInterfaces: NetworkInterfaceMap = brightSignAttributes.networkInterfaces;

            // TEDTODOBW - hardcoded eth0
            const networkInterface: NetworkInterface = networkInterfaces['eth0'];
            const currentConfig: NetworkConfig = networkInterface.currentConfig;
            const ipAddress = currentConfig.ip4_address;

            const brightSignInWallAttributes: BrightSignInWall = {
              serialNumber,
              ipAddress,
              isMaster,
              rowIndex,
              columnIndex,
              bezelWidth,
              bezelHeight,
              bezelScreenWidth,
              bezelScreenHeight,
            }
            store.dispatch(setBrightSignInWall(serialNumber, brightSignInWallAttributes));
          }
        }
        break;
      case 'setBezelDimensions':
        if (msg.data.hasOwnProperty('data')) {
          const bezelDimensionsStr: string = msg.data['data'];
          const bezelDimensions: any = JSON.parse(bezelDimensionsStr);
          const bezelWidth = parseInt(bezelDimensions.bezelwidth, 10);
          const bezelHeight = parseInt(bezelDimensions.bezelheight, 10);
          const bezelScreenWidth = parseInt(bezelDimensions.bezelscreenwidth, 10);
          const bezelScreenHeight = parseInt(bezelDimensions.bezelscreenheight, 10);
          store.dispatch(updateBezelDimensions(bezelWidth, bezelHeight, bezelScreenWidth, bezelScreenHeight));
        }
        break;
      default:
        console.log('no command match');
        console.log(msg.data['command']);
        break;
    }
  }
}

const store = createStore(
  brightWallModelReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

const divStyle = {
  height: '1080px',
};

ReactDOM.render(
  <Provider store={store}>
    <div style={divStyle}>
      <App />
    </div>
  </Provider>,
  document.getElementById('content') as HTMLElement
);
