import * as React from 'react';
import { connect } from 'react-redux';

import '../styles/deviceSetup.css';

import {
  getSerialNumber,
  getMacAddress,
  getIsMaster,
  getIpAddress,
} from '../selector';

export interface DeviceInfoProps {
  ipAddress: string,
  macAddress: string,
  serialNumber: string,
  isMaster: boolean,
}

// -----------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------

const DeviceInfo = (props: DeviceInfoProps) => {

  const masterOrSlaveLabel = props.isMaster ? 'Master' : 'Slave';

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
        <div className='deviceInfoValue'>{masterOrSlaveLabel}</div>
      </div>
    </div>
  );
};

function mapStateToProps(state: any): Partial<DeviceInfoProps> {
  return {
    serialNumber: getSerialNumber(state),
    macAddress: getMacAddress(state),
    ipAddress: getIpAddress(state),
    isMaster: getIsMaster(state),
  };
}

export default connect(mapStateToProps)(DeviceInfo);

