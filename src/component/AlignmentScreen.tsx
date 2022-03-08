import * as React from 'react';
import { connect } from 'react-redux';
import { getBezelTop, getBezelBottom, getBezelScreenHeight, getBezelScreenWidth, getBezelLeft, getBezelRight } from '../selector';

import '../styles/deviceSetup.css';

export interface AlignmentScreenProps {
  bezelLeft: number;
  bezelRight: number;
  bezelTop: number;
  bezelBottom: number;
  bezelScreenWidth: number;
  bezelScreenHeight: number;
}
// -----------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------

const AlignmentScreen = (props: AlignmentScreenProps) => {

  let viewBoxSpec = '0 0 500 500';

  if (props.bezelScreenWidth > 0 && props.bezelScreenHeight > 0) {
    const monitorWidth = props.bezelScreenWidth + props.bezelLeft + props.bezelRight;
    const xStart = props.bezelLeft / monitorWidth * 500;
    const xEnd = (monitorWidth - props.bezelRight) / monitorWidth * 500;
    const width = xEnd - xStart;

    const monitorHeight = props.bezelScreenHeight + props.bezelTop + props.bezelBottom;
    const yStart = props.bezelTop / monitorHeight * 500;
    const yEnd = (monitorHeight - props.bezelBottom) / monitorHeight * 500;
    const height = yEnd - yStart;

    viewBoxSpec = xStart.toString() + ' ' + yStart.toString() + ' ' + width.toString() + ' ' + height.toString();
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

  // return (
  //   <svg
  //     xmlns="http://www.w3.org/2000/svg"
  //     version="1.1"
  //     viewBox={viewBoxSpec}
  //     preserveAspectRatio='none'
  //     className='testAlignmentScreenContainer'
  //   >
  //     <line x1="50" y1="0" x2="50" y2="500" stroke="black" />
  //     <line x1="100" y1="0" x2="100" y2="500" stroke="black" />
  //     <line x1="150" y1="0" x2="150" y2="500" stroke="black" />
  //     <line x1="200" y1="0" x2="200" y2="500" stroke="black" />
  //     <line x1="250" y1="0" x2="250" y2="500" stroke="black" />
  //     <line x1="300" y1="0" x2="300" y2="500" stroke="black" />
  //     <line x1="350" y1="0" x2="350" y2="500" stroke="black" />
  //     <line x1="400" y1="0" x2="400" y2="500" stroke="black" />
  //     <line x1="450" y1="0" x2="450" y2="500" stroke="black" />

  //     <line x1="0" y1="50" x2="500" y2="50" stroke="black" />
  //     <line x1="0" y1="100" x2="500" y2="100" stroke="black" />
  //     <line x1="0" y1="150" x2="500" y2="150" stroke="black" />
  //     <line x1="0" y1="200" x2="500" y2="200" stroke="black" />
  //     <line x1="0" y1="250" x2="500" y2="250" stroke="black" />
  //     <line x1="0" y1="300" x2="500" y2="300" stroke="black" />
  //     <line x1="0" y1="350" x2="500" y2="350" stroke="black" />
  //     <line x1="0" y1="400" x2="500" y2="400" stroke="black" />
  //     <line x1="0" y1="450" x2="500" y2="450" stroke="black" />
  //   </svg>
  // );



};

function mapStateToProps(state: any): Partial<AlignmentScreenProps> {
  return {
    bezelLeft: getBezelLeft(state),
    bezelRight: getBezelRight(state),
    bezelTop: getBezelTop(state),
    bezelBottom: getBezelBottom(state),
    bezelScreenWidth: getBezelScreenWidth(state),
    bezelScreenHeight: getBezelScreenHeight(state),
  };
}

export default connect(mapStateToProps)(AlignmentScreen);


