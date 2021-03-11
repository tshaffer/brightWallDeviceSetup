// import VideoMode from '@brightsign/videomodeconfiguration';
// import VideoOutput from '@brightsign/videooutput';
// import Registry from '@brightsign/registry';

export let platform: string;
export let irReceiver: BSIRReceiver;
export let serialNumber: string;

export let isVideoWall: boolean = false;
export let videoWallNumColumns: number = -1;
export let videoWallNumRows: number = -1;
export let videoWallRowIndex: number = -1;
export let videoWallColumnIndex: number = -1;

export const getPlatform = (): string => {

  try {
    // const gpio = new BSControlPort('BrightSign');
    // console.log('create controlPort: ');
    // console.log(gpio);
    irReceiver = new BSIRReceiver('IR-in', 'NEC');
    console.log('create irReceiver: ')
    console.log(irReceiver);

    const BSDeviceInfo = require('BSDeviceInfo');
    const deviceInfo = new BSDeviceInfo();
    serialNumber = deviceInfo.deviceUniqueId;
  
    // videoOutput = new VideoOutput('hdmi');
    // videoOutput.setBackgroundColor(0xffffff);
    const VideoOutputClass = require("@brightsign/videooutput");
    const videoOutputHDMI = new VideoOutputClass("hdmi");
    videoOutputHDMI.setBackgroundColor(0xffffff);

    // const altRegistry: Registry = new Registry();
    // altRegistry.read('networking', 'unm').then ((registryValue: any) => {
    //   console.log('registryValue');
    //   console.log(registryValue);
    // });
    
    console.log('require registry');
    const registryClass = require("@brightsign/registry");
    console.log('instantiate registryClass');
    const registry = new registryClass();
    console.log('registry object');
    console.log(registry);

    const promises: Promise<string>[] = [];
    promises.push(registry.read('networking', 'isVideoWall'));
    promises.push(registry.read('networking', 'videoWallNumColumns'));
    promises.push(registry.read('networking', 'videoWallNumRows'));
    promises.push(registry.read('networking', 'videoWallRowIndex'));
    promises.push(registry.read('networking', 'videoWallColumnIndex'));
    Promise.all(promises)
    .then ((registryValues) => {
      if (registryValues[0].toLowerCase() === 'true') {
        isVideoWall = true;
      }
      videoWallNumColumns = tryConvertStringToNumber(registryValues[1], -1);
      videoWallNumRows = tryConvertStringToNumber(registryValues[2], -1);
      videoWallRowIndex = tryConvertStringToNumber(registryValues[3], -1);
      videoWallColumnIndex = tryConvertStringToNumber(registryValues[4], -1);

      console.log('registry read complete');
      // write to redux?
    });

    // registry.read('networking', 'un').then ((registryValue: any) => {
    //   console.log('registryValue');
    //   console.log(registryValue);
    // });

    platform = 'BrightSign';
  }
  catch (e) {
    platform = 'Desktop';
    console.log('failed to create controlPort: ');
  }
  console.log('Set platform to: ' + platform);
  return platform;
};

const tryConvertStringToNumber = (val: string, defaultValue: number): number => {
  const num: number = Number(val);
  if (!isNaN(num)) {
    return num;
  }
  return defaultValue;
}