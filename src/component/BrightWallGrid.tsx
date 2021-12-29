import * as React from 'react';
import { connect } from 'react-redux';

import { map } from 'lodash';

import '../styles/deviceSetup.css';
import {
  getColumnIndex,
  getNumColumns,
  getNumRows,
  getRowIndex
} from '../selector';
import { getDevicePositionLabel } from '../utility';

export interface BrightWallGridProps {
  numRows: number,
  numColumns: number,
  rowIndex: number;
  columnIndex: number;
}

// -----------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------

const BrightWallGrid = (props: BrightWallGridProps) => {

  const style = {
    gridTemplateColumns: `repeat(${props.numColumns}, 1fr)`
  };

  const getLabels = () => {
    const items: string[] = [];
    for (let rowIndex = 0; rowIndex < props.numRows; rowIndex++) {
      for (let columnIndex = 0; columnIndex < props.numColumns; columnIndex++) {
        items.push(getDevicePositionLabel(rowIndex, columnIndex));
      }
    }
    return items;
  }

  const labels: string[] = getLabels();
  const devicePosition: string = getDevicePositionLabel(props.rowIndex, props.columnIndex);

  return (
    <div className='screenGridContainer' style={style}>
      {map(labels, (item: string) => {

        console.log('item: ' + item);
        console.log('devicePosition: ' + devicePosition);
        if (devicePosition === item) {
          console.log('match');
        }
        else {
          console.log('no match');
        }
        let className = 'screenGridItemContainer';
        if (item === devicePosition) {
          className = 'selectedScreenGridItemContainer';
        }
        return (
          <div className={className} key={`position_${item}`}>
            <div className='indexContainer'>{item}</div>
          </div>
        );
      })}
    </div>
  );
};

function mapStateToProps(state: any): Partial<BrightWallGridProps> {
  return {
    numRows: getNumRows(state),
    numColumns: getNumColumns(state),
    rowIndex: getRowIndex(state),
    columnIndex: getColumnIndex(state),
  };
}

export default connect(mapStateToProps)(BrightWallGrid);


