// import VideoMode from '@brightsign/videomodeconfiguration';
// import VideoOutput from '@brightsign/videooutput';
// import Registry from '@brightsign/registry';

export let platform: string;
export let irReceiver: BSIRReceiver;

export const getPlatform = (): string => {

  try {
    // const gpio = new BSControlPort('BrightSign');
    // console.log('create controlPort: ');
    // console.log(gpio);
    irReceiver = new BSIRReceiver('IR-in', 'NEC');
    console.log('create irReceiver: ')
    console.log(irReceiver);

    // videoOutput = new VideoOutput('hdmi');
    // videoOutput.setBackgroundColor(0xffffff);
    var VideoOutputClass = require("@brightsign/videooutput");
    var videoOutputHDMI = new VideoOutputClass("hdmi");
    videoOutputHDMI.setBackgroundColor(0xffffff);

    // const altRegistry: Registry = new Registry();
    // altRegistry.read('networking', 'unm').then ((registryValue: any) => {
    //   console.log('registryValue');
    //   console.log(registryValue);
    // });
    
    console.log('require registry');
    var registryClass = require("@brightsign/registry");
    console.log('instantiate registryClass');
    var registry = new registryClass();
    console.log('registry object');
    console.log(registry);

    // Promise<String> read(String sectionName, String key)
    registry.read('networking', 'un').then ((registryValue: any) => {
      console.log('registryValue');
      console.log(registryValue);
    });

    platform = 'BrightSign';
  }
  catch (e) {
    platform = 'Desktop';
    console.log('failed to create controlPort: ');
  }
  console.log('Set platform to: ' + platform);
  return platform;
};
