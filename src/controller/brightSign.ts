import { setColumnIndex, setIsBrightWall, setIsMaster, setNumColumns, setNumRows, setRowIndex, setSerialNumber } from '../model';
import { setPlatform } from '../model/appAttributes';
import { 
  tryConvertStringToNumber,
  tryConvertNumberStringToBool,
 } from '../utility';

import Registry from '@brightsign/registry';

// export let irReceiver: BSIRReceiver;

export const getBrightSignConfig = () => {
  return ((dispatch: any): any => {
    try {

      console.log('getBrightSignConfig invoked');

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
      promises.push(registry.read('networking', 'isVideoWall'));
      promises.push(registry.read('networking', 'videoWallNumColumns'));
      promises.push(registry.read('networking', 'videoWallNumRows'));
      promises.push(registry.read('networking', 'videoWallRowIndex'));
      promises.push(registry.read('networking', 'videoWallColumnIndex'));
      promises.push(registry.read('networking', 'sync_master'));
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
          dispatch(setIsMaster(tryConvertNumberStringToBool(registryValues[5] as string, false)));
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