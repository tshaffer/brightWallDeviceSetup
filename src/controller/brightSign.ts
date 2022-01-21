// import os from 'os';
import * as os from 'os';
import {
  setActiveSetupScreen,
  setColumnIndex,
  setIpAddress,
  setIsBrightWall,
  setIsMaster,
  setMacAddress,
  setNumColumns,
  setNumRows,
  setRowIndex,
  setScreenDimensions,
  setSerialNumber
} from '../model';
import {
  tryConvertStringToNumber,
} from '../utility';

import Registry from '@brightsign/registry';
import { isArray, isString } from 'lodash';
import { NetworkInterfaceConfig } from '@brightsign/networkconfiguration';
import { DeviceSetupScreen } from '..';

// export let irReceiver: BSIRReceiver;

var VideoModeConfigurationClass = require("@brightsign/videomodeconfiguration");
var videoConfig = new VideoModeConfigurationClass();

const NetworkConfigClass = require("@brightsign/networkconfiguration");
const networkConfigEth = new NetworkConfigClass("eth0");

export const getBrightSignConfig = () => {
  return ((dispatch: any): any => {
    try {
      const networkInterfaces = os.networkInterfaces();
      for (const networkInterfaceId in networkInterfaces) {
        if (Object.prototype.hasOwnProperty.call(networkInterfaces, networkInterfaceId)) {
          const networkInterfaceInfo = networkInterfaces[networkInterfaceId];
          if (isArray(networkInterfaceInfo)) {
            for (const networkInterface of networkInterfaceInfo) {
              // TEDTODOBW - this code currently only supports an ethernet connection
              if (networkInterfaceId === 'eth0' && networkInterface.family === 'IPv4') {
                const deviceIpAddress = networkInterface.address;
                dispatch(setIpAddress(deviceIpAddress));
                dispatch(setMacAddress(networkInterface.mac));
              }
            }
          }
        }
      }

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

          dispatch(setActiveSetupScreen(registryValues[6] as string as DeviceSetupScreen));

          const mode: any = registryValues[7] as any;
          dispatch(setScreenDimensions(mode.width, mode.height));

          const networkConfig = registryValues[8] as NetworkInterfaceConfig;
          console.log('networkConfig');
          console.log(networkConfig);

        });

      console.log('BrightSign configuration retrieved');
    }
    catch (e) {
      console.log('BrightSign javascript call failed');
      console.log(e);
    }
  });
}