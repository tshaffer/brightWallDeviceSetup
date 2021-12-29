import * as React from 'react';
import { connect } from 'react-redux';

import '../styles/deviceSetup.css';

import {
  getColumnIndex,
  getRowIndex
} from '../selector';

import { getDevicePositionLabel } from '../utility';

export interface ScreenPositionProps {
  rowIndex: number;
  columnIndex: number;
}

// -----------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------

const ScreenPosition = (props: ScreenPositionProps) => {

  const devicePosition: string = getDevicePositionLabel(props.rowIndex, props.columnIndex);

  return (
    <div className='screenPositionInfoContainer'>
      <div className='screenNameLabel'>Screen Position:</div>
      <div className='screenNameValue'>{devicePosition}</div>
    </div>
  );
};

function mapStateToProps(state: any): Partial<ScreenPositionProps> {
  return {
    rowIndex: getRowIndex(state),
    columnIndex: getColumnIndex(state),
  };
}

export default connect(mapStateToProps)(ScreenPosition);

