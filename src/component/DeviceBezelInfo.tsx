import * as React from 'react';
import { connect } from 'react-redux';

import '../styles/deviceSetup.css';

import {
  getBezelWidth,
  getBezelHeight,
  getBezelScreenWidth,
  getBezelScreenHeight,
} from '../selector';

export interface DeviceInfoProps {
  bezelWidth: number,
  bezelHeight: number,
  bezelScreenWidth: number,
  bezelScreenHeight: number,
}

// -----------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------

const DeviceInfo = (props: DeviceInfoProps) => {

  return (
    <div className='deviceBezelInfoContainer'>
      <div className='deviceBezelInfoRow'>
        <div className='deviceBezelInfoLabel'>Bezel width:</div>
        <div className='deviceBezelInfoValue'>{props.bezelWidth.toString() + ' mm'}</div>
      </div>
      <div className='deviceBezelInfoRow'>
        <div className='deviceBezelInfoLabel'>Bezel height:</div>
        <div className='deviceBezelInfoValue'>{props.bezelHeight.toString() + ' mm'}</div>
      </div>
      <div className='deviceBezelInfoRow'>
        <div className='deviceBezelInfoLabel'>Screen width:</div>
        <div className='deviceBezelInfoValue'>{props.bezelScreenWidth.toString() + ' mm'}</div>
      </div>
      <div className='deviceBezelInfoRow'>
        <div className='deviceBezelInfoLabel'>Screen height:</div>
        <div className='deviceBezelInfoValue'>{props.bezelScreenHeight.toString() + ' mm'}</div>
      </div>
    </div>
  );
};

function mapStateToProps(state: any): Partial<DeviceInfoProps> {
  return {
    bezelWidth: getBezelWidth(state),
    bezelHeight: getBezelHeight(state),
    bezelScreenWidth: getBezelScreenWidth(state),
    bezelScreenHeight: getBezelScreenHeight(state),
  };
}

export default connect(mapStateToProps)(DeviceInfo);

