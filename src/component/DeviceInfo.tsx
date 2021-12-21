import * as React from 'react';

import '../styles/deviceSetup.css';

export interface DeviceInfoProps {
  ipAddress: string,
  macAddress: string,
  serialNumber: string,
  master?: string,
}

// -----------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------

const DeviceInfo = (props: DeviceInfoProps) => {
  return (
    <div className='deviceInfoContainer'>
        <div className='deviceInfoRow'>
            <div className='deviceInfoLabel'>IP Address:</div>
            <div className='deviceInfoValue'>{props.ipAddress}</div>
        </div>

        <div className='deviceInfoRow'>
            <div className='deviceInfoLabel'>Serial Number:</div>
            <div className='deviceInfoValue'>{props.serialNumber}</div>
        </div>

        <div className='deviceInfoRow'>
            <div className='deviceInfoLabel'>MAC Address:</div>
            <div className='deviceInfoValue'>{props.macAddress}</div>
        </div>

        <div className='deviceInfoRow'>
            <div className='deviceInfoLabel'>Master/Slave:</div>
            <div className='deviceInfoValue'>{props.master}</div>
        </div>
    </div>
);
};

export default DeviceInfo;

