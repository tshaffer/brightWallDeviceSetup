// import os from 'os';
import * as os from 'os';
import {
  setBrightWallDeviceSetupActiveScreen,
  setColumnIndex,
  setIpAddress,
  setIsBrightWall,
  setIsMaster,
  setNumColumns,
  setNumRows,
  setRowIndex,
  setScreenDimensions,
  setSerialNumber
} from '../model';
import { setPlatform } from '../model/appAttributes';
import {
  tryConvertStringToNumber,
  tryConvertNumberStringToBool,
} from '../utility';

import Registry from '@brightsign/registry';
import { isArray, isString } from 'lodash';
import { NetworkInterfaceConfig } from '@brightsign/networkconfiguration';

// export let irReceiver: BSIRReceiver;

var VideoModeConfigurationClass = require("@brightsign/videomodeconfiguration");
var videoConfig = new VideoModeConfigurationClass();

const NetworkConfigClass = require("@brightsign/networkconfiguration");
const networkConfigEth = new NetworkConfigClass("eth0");

export const getBrightSignConfig = () => {
  return ((dispatch: any): any => {
    try {

      console.log('getBrightSignConfig invoked');

      /*
{ 1225.581} [INFO]   [source file:///pool1:/brightWallDeviceSetupSite/build/bundle.js:61657]: getBrightSignConfig invoked
{ 1225.652} [INFO]   [source file:///pool1:/brightWallDeviceSetupSite/build/bundle.js:61662]: networkInterfaceId
{ 1225.652} [INFO]   [source file:///pool1:/brightWallDeviceSetupSite/build/bundle.js:61663]: lo
{ 1225.652} [INFO]   [source file:///pool1:/brightWallDeviceSetupSite/build/bundle.js:61665]: networkInterfaceInfo.length
{ 1225.652} [INFO]   [source file:///pool1:/brightWallDeviceSetupSite/build/bundle.js:61666]: 2
{ 1225.652} [INFO]   [source file:///pool1:/brightWallDeviceSetupSite/build/bundle.js:61669]: networkInterface
{ 1225.652} [INFO]   [source file:///pool1:/brightWallDeviceSetupSite/build/bundle.js:61670]: 127.0.0.1
{ 1225.652} [INFO]   [source file:///pool1:/brightWallDeviceSetupSite/build/bundle.js:61671]: IPv4
{ 1225.652} [INFO]   [source file:///pool1:/brightWallDeviceSetupSite/build/bundle.js:61669]: networkInterface
{ 1225.653} [INFO]   [source file:///pool1:/brightWallDeviceSetupSite/build/bundle.js:61670]: ::1
{ 1225.653} [INFO]   [source file:///pool1:/brightWallDeviceSetupSite/build/bundle.js:61671]: IPv6
{ 1225.653} [INFO]   [source file:///pool1:/brightWallDeviceSetupSite/build/bundle.js:61662]: networkInterfaceId
{ 1225.653} [INFO]   [source file:///pool1:/brightWallDeviceSetupSite/build/bundle.js:61663]: eth0
{ 1225.653} [INFO]   [source file:///pool1:/brightWallDeviceSetupSite/build/bundle.js:61665]: networkInterfaceInfo.length
{ 1225.653} [INFO]   [source file:///pool1:/brightWallDeviceSetupSite/build/bundle.js:61666]: 2
{ 1225.653} [INFO]   [source file:///pool1:/brightWallDeviceSetupSite/build/bundle.js:61669]: networkInterface
{ 1225.653} [INFO]   [source file:///pool1:/brightWallDeviceSetupSite/build/bundle.js:61670]: 192.168.86.37
{ 1225.653} [INFO]   [source file:///pool1:/brightWallDeviceSetupSite/build/bundle.js:61671]: IPv4
{ 1225.653} [INFO]   [source file:///pool1:/brightWallDeviceSetupSite/build/bundle.js:61669]: networkInterface
{ 1225.653} [INFO]   [source file:///pool1:/brightWallDeviceSetupSite/build/bundle.js:61670]: fe80::92ac:3fff:fe10:16
{ 1225.653} [INFO]   [source file:///pool1:/brightWallDeviceSetupSite/build/bundle.js:61671]: IPv6
      */

      const networkInterfaces = os.networkInterfaces();
      for (const networkInterfaceId in networkInterfaces) {
        if (Object.prototype.hasOwnProperty.call(networkInterfaces, networkInterfaceId)) {
          const networkInterfaceInfo = networkInterfaces[networkInterfaceId];
          console.log('networkInterfaceId');
          console.log(networkInterfaceId);
          if (isArray(networkInterfaceInfo)) {
            console.log('networkInterfaceInfo.length');
            console.log(networkInterfaceInfo.length);
            for (const networkInterface of networkInterfaceInfo) {
              console.log('networkInterface');
              console.log(networkInterface.address);
              console.log(networkInterface.family);
              // TEDTODO - this code currently only support an ethernet connection
              if (networkInterfaceId === 'eth0' && networkInterface.family === 'IPv4') {
                const deviceIpAddress = networkInterface.address;
                dispatch(setIpAddress(deviceIpAddress));
              }
            }
          }
        }
      }
      // const vmPromise = videoConfig.getActiveMode();
      // vmPromise.then( (mode: any) => {
      //   console.log('mode');
      //   console.log(mode);
      //   console.log(mode.modeName);
      //   console.log(mode.width);
      //   console.log(mode.height);
      //   console.log(mode.graphicsPlaneWidth);
      //   console.log(mode.graphicsPlaneHeight);
      // })
  
      // irReceiver = new BSIRReceiver('IR-in', 'NEC');
      const BSDeviceInfo = require('BSDeviceInfo');
      const deviceInfo = new BSDeviceInfo();
      dispatch(setSerialNumber(deviceInfo.deviceUniqueId));

      const VideoOutputClass = require('@brightsign/videooutput');
      const videoOutputHDMI = new VideoOutputClass('hdmi');
      videoOutputHDMI.setBackgroundColor(0xffffff);

      const registry = new Registry();

      // const registryClass = require('@brightsign/registry');
      // const registry = new registryClass();

      const promises: Promise<string | object>[] = [];
      promises.push(registry.read('networking', 'isBrightWall'));
      promises.push(registry.read('networking', 'brightWallNumColumns'));
      promises.push(registry.read('networking', 'brightWallNumRows'));
      promises.push(registry.read('networking', 'brightWallRowIndex'));
      promises.push(registry.read('networking', 'brightWallColumnIndex'));
      promises.push(registry.read('networking', 'sync_master'));
      promises.push(registry.read('networking', 'brightWallDeviceSetupActiveScreen'));
      promises.push(videoConfig.getActiveMode());
      promises.push(networkConfigEth.getConfig());
      Promise.all(promises)
        .then((registryValues) => {
          console.log('registryValues retrieved');
          console.log(registryValues);
          if ((registryValues[0] as string).toLowerCase() === 'true') {
            dispatch(setIsBrightWall(true));
          }
          dispatch(setNumColumns(tryConvertStringToNumber((registryValues[1] as string), -1)));
          dispatch(setNumRows(tryConvertStringToNumber((registryValues[2] as string), -1)));
          dispatch(setRowIndex(tryConvertStringToNumber((registryValues[3] as string), -1)));
          dispatch(setColumnIndex(tryConvertStringToNumber((registryValues[4] as string), -1)));

          const isMasterStr: string = registryValues[5] as string;
          let isMaster: boolean = false;
          if (isString(isMasterStr) && isMasterStr.toLowerCase() === 'true') {
            isMaster = true;
          }
          dispatch(setIsMaster(isMaster));

          dispatch(setBrightWallDeviceSetupActiveScreen(registryValues[6] as string));

          const mode: any = registryValues[7] as any;
          dispatch(setScreenDimensions(mode.width, mode.height));

          const networkConfig = registryValues[8] as NetworkInterfaceConfig;
          console.log('networkConfig');
          console.log(networkConfig);

        });

      console.log('BrightSign configuration retrieved');
      dispatch(setPlatform('BrightSign'));
    }
    catch (e) {
      console.log('BrightSign javascript call failed');
      console.log(e);
      dispatch(setPlatform('Desktop'));
    }
  });
}