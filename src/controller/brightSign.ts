import { setColumnIndex, setIsBrightWall, setNumColumns, setNumRows, setRowIndex, setSerialNumber } from "../model";
import { setPlatform } from "../model/appAttributes";
import { tryConvertStringToNumber } from "../utility";

export let irReceiver: BSIRReceiver;

export const getBrightSignConfig = () => {
  return ((dispatch: any): any => {
    try {
      irReceiver = new BSIRReceiver('IR-in', 'NEC');
  
      const BSDeviceInfo = require('BSDeviceInfo');
      const deviceInfo = new BSDeviceInfo();
      dispatch(setSerialNumber(deviceInfo.deviceUniqueId));

      const VideoOutputClass = require("@brightsign/videooutput");
      const videoOutputHDMI = new VideoOutputClass("hdmi");
      videoOutputHDMI.setBackgroundColor(0xffffff);
  
      const registryClass = require("@brightsign/registry");
      const registry = new registryClass();
  
      const promises: Promise<string>[] = [];
      promises.push(registry.read('networking', 'isVideoWall'));
      promises.push(registry.read('networking', 'videoWallNumColumns'));
      promises.push(registry.read('networking', 'videoWallNumRows'));
      promises.push(registry.read('networking', 'videoWallRowIndex'));
      promises.push(registry.read('networking', 'videoWallColumnIndex'));
      Promise.all(promises)
      .then ((registryValues) => {
        if (registryValues[0].toLowerCase() === 'true') {
          dispatch(setIsBrightWall(true));
        }
        dispatch(setNumColumns(tryConvertStringToNumber(registryValues[1], -1)));
        dispatch(setNumRows(tryConvertStringToNumber(registryValues[2], -1)));
        dispatch(setRowIndex(tryConvertStringToNumber(registryValues[3], -1)));
        dispatch(setColumnIndex(tryConvertStringToNumber(registryValues[4], -1)));
  
        console.log('registry read complete');
        // write to redux?
      });
  
      dispatch(setPlatform('BrightSign'));
    }
    catch (e) {
      dispatch(setPlatform('Desktop'));
      console.log('failed to create controlPort: ');
    }
  });
}