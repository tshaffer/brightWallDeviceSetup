import {
  setBrightWallDeviceSetupActiveScreen,
  setColumnIndex,
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
import { isString } from 'lodash';

// export let irReceiver: BSIRReceiver;

var VideoModeConfigurationClass = require("@brightsign/videomodeconfiguration");
var videoConfig = new VideoModeConfigurationClass();

export const getBrightSignConfig = () => {
  return ((dispatch: any): any => {
    try {

      console.log('getBrightSignConfig invoked');

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