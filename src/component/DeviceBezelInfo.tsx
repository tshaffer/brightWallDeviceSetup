import * as React from 'react';
import { connect } from 'react-redux';

import '../styles/deviceSetup.css';

import {
  getBezelLeft,
  getBezelRight,
  getBezelTop,
  getBezelBottom,
  getBezelScreenWidth,
  getBezelScreenHeight,
} from '../selector';

export interface DeviceInfoProps {
  bezelLeft: number,
  bezelRight: number,
  bezelTop: number,
  bezelBottom: number,
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
        <div className='deviceBezelInfoLabel'>Left bezel:</div>
        <div className='deviceBezelInfoValue'>{props.bezelLeft.toString() + ' mm'}</div>
      </div>
      <div className='deviceBezelInfoRow'>
        <div className='deviceBezelInfoLabel'>Right bezel:</div>
        <div className='deviceBezelInfoValue'>{props.bezelRight.toString() + ' mm'}</div>
      </div>
      <div className='deviceBezelInfoRow'>
        <div className='deviceBezelInfoLabel'>Top bezel:</div>
        <div className='deviceBezelInfoValue'>{props.bezelTop.toString() + ' mm'}</div>
      </div>
      <div className='deviceBezelInfoRow'>
        <div className='deviceBezelInfoLabel'>Bottom bezel:</div>
        <div className='deviceBezelInfoValue'>{props.bezelBottom.toString() + ' mm'}</div>
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
    bezelLeft: getBezelLeft(state),
    bezelRight: getBezelRight(state),
    bezelTop: getBezelTop(state),
    bezelBottom: getBezelBottom(state),
    bezelScreenWidth: getBezelScreenWidth(state),
    bezelScreenHeight: getBezelScreenHeight(state),
  };
}

export default connect(mapStateToProps)(DeviceInfo);

