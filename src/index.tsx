import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import { brightWallModelReducer, setActivePresentationName, setColumnIndex, setIsBrightWallConfiguratorHost, setIsMaster, setRowIndex } from './model';

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

          console.log('brightSignDevicesInWallO keys:');
          console.log(Object.keys(brightSignDevicesInWallO));

          console.log('brightSignDevicesInWall');
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
      default:
        console.log('no command match');
        console.log(msg.data['command']);
        break;
    }
  }
}

/*  
"brightSignAttributes":{"activePresentationName":"bwResizeTest","autorunVersion":"L8J81R001023","bezelHeight":0,"bezelScreenHeight":336,"bezelScreenWidth":610,"bezelWidth":14,"columnIndex":1,"deviceFWVersion":"8.4.10","deviceFamily":"impala","deviceModel":"XT1143","isBrightWall":true,"isMaster":true,

"networkInterfaces":{"eth0":{"currentConfig":{"client_identifier":"BrightSign:L8J81R001023","configured_proxy":"","current_proxy":"","dhcp":true,"dns_servers":["192.168.86.1"],"domain":"lan","domains":["lan"],"ethernet_mac":"90:ac:3f:0f:75:21","hostname":"BrightSign-L8J81R001023","ip4_address":"192.168.86.35","ip4_broadcast":"192.168.86.255","ip4_gateway":"192.168.86.1","ip4_netmask":"255.255.255.0","link":true,"mdns_hostname":"BrightSign-L8J81R001023.local","metric":0,"proxy_bypass":"<none>","shape_inbound":0,"time_server":"http://time.brightsignnetwork.com/","type":"<...>
{ 2093.774} },"hostName":"BrightSign-L8J81R001023","id":"eth0"}},

"rowIndex":0,"serialNumber":"L8J81R001023","unitDescription":"","unitName":"tedSlave","unitNamingMethod":"appendUnitIDToUnitName"},

"brightWallAttributes":{"brightWallDeviceSetupActiveScreen":"ConfigureScreen","brightWallSetupScreenEnabled":true,"numColumns":2,"numRows":1}},{"brightSignAttributes":{"activePresentationName":"bwResizeTest","autorunVersion":"D7D834000029","bezelHeight":0,"bezelScreenHeight":336,"bezelScreenWidth":610,"bezelWidth":14,"columnIndex":0,"deviceFWVersion":"8.4.10","deviceFamily":"malibu","deviceModel":"XT1144","isBrightWall":true,"isMaster":true,

"networkInterfaces":{"eth0":{"currentConfig":{"client_identifier":"BrightSign:D7D834000029","configured_proxy":"","current_proxy":"","dhcp":true,"dns_servers":["192.168.86.1"],"domain":"lan","domains":["lan"],"ethernet_mac":"90:ac:3f:10:00:16","hostname":"BrightSign-D7D834000029","ip4_address":"192.168.86.20","ip4_broadcast":"192.168.86.255","ip4_gateway<...>
{ 2093.774} .168.86.1","ip4_netmask":"255.255.255.0","link":true,"mdns_hostname":"BrightSign-D7D834000029.local","metric":203,"proxy_bypass":"<none>","shape_inbound":0,"time_server":"ntp://time.brightsignnetwork.com","type":"wired"},"hostName":"BrightSign-D7D834000029","id":"eth0"}},

"rowIndex":0,"serialNumber":"D7D834000029","unitDescription":"tedMaster","unitName":"","unitNamingMethod":"appendUnitIDToUnitName"},

"brightWallAttributes":{"brightWallDeviceSetupActiveScreen":"ConfigureScreen","brightWallSetupScreenEnabled":true,"numColumns":2,"numRows":1}}]}"
*/

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
