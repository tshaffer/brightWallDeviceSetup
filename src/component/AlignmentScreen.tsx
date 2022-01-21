import * as React from 'react';
import { connect } from 'react-redux';
import { getBezelHeight, getBezelScreenHeight, getBezelScreenWidth, getBezelWidth } from '../selector';

import '../styles/deviceSetup.css';

export interface AlignmentScreenProps {
  bezelWidth: number;
  bezelHeight: number;
  bezelScreenWidth: number;
  bezelScreenHeight: number;
}
// -----------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------

const AlignmentScreen = (props: AlignmentScreenProps) => {

  let viewBoxSpec = '0 0 500 500';

  if (props.bezelScreenWidth > 0 && props.bezelScreenHeight > 0) {
    const monitorWidth = props.bezelScreenWidth + props.bezelWidth * 2;
    const xStart = props.bezelWidth / monitorWidth * 500;
    const xEnd = (monitorWidth - props.bezelWidth) / monitorWidth * 500;
  
    const monitorHeight = props.bezelScreenHeight + props.bezelHeight * 2;
    const yStart = props.bezelHeight / monitorHeight * 500;
    const yEnd = (monitorHeight - props.bezelHeight) / monitorHeight * 500;
  
    viewBoxSpec = xStart.toString() + ' ' + yStart.toString() + ' ' + xEnd.toString() + ' ' + yEnd.toString();
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox={viewBoxSpec}
      preserveAspectRatio='none'
      className='testAlignmentScreenContainer'
    >
      <line x1="0" y1="100" x2={'100'} y2="0" stroke="black" />
      <line x1="0" y1="200" x2={'200'} y2="0" stroke="black" />
      <line x1="0" y1="300" x2={'300'} y2="0" stroke="black" />
      <line x1="0" y1="400" x2={'400'} y2="0" stroke="black" />
      <line x1="0" y1="500" x2={'500'} y2="0" stroke="black" />

      <line x1="100" y1="500" x2="500" y2="100" stroke="black" />
      <line x1="200" y1="500" x2="500" y2="200" stroke="black" />
      <line x1="300" y1="500" x2="500" y2="300" stroke="black" />
      <line x1="400" y1="500" x2="500" y2="400" stroke="black" />
      <line x1="500" y1="500" x2="500" y2="500" stroke="black" />

      <line x1="500" y1="100" x2="400" y2="0" stroke="black" />
      <line x1="500" y1="200" x2="300" y2="0" stroke="black" />
      <line x1="500" y1="300" x2="200" y2="0" stroke="black" />
      <line x1="500" y1="400" x2="100" y2="0" stroke="black" />
      <line x1="500" y1="500" x2="0" y2="0" stroke="black" />

      <line x1="400" y1="500" x2="0" y2="100" stroke="black" />
      <line x1="300" y1="500" x2="0" y2="200" stroke="black" />
      <line x1="200" y1="500" x2="0" y2="300" stroke="black" />
      <line x1="100" y1="500" x2="0" y2="400" stroke="black" />
      <line x1="0" y1="500" x2="0" y2="500" stroke="black" />
    </svg>
  );
};

function mapStateToProps(state: any): Partial<AlignmentScreenProps> {
  return {
    bezelWidth: getBezelWidth(state),
    bezelHeight: getBezelHeight(state),
    bezelScreenWidth: getBezelScreenWidth(state),
    bezelScreenHeight: getBezelScreenHeight(state),
  };
}

export default connect(mapStateToProps)(AlignmentScreen);


