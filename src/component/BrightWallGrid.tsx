import * as React from 'react';
import { connect } from 'react-redux';

import _, { map } from 'lodash';

import '../styles/deviceSetup.css';
import {
  getColumnIndex,
  getNumColumns,
  getNumRows,
  getRowIndex
} from '../selector';

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

  const getLabel = (rowIndex: number, columnIndex: number) => {
    const positionLabel = String.fromCharCode(65 + columnIndex) + String.fromCharCode(49 + rowIndex);
    return positionLabel;
  }

  const getLabels = () => {
    const items: string[] = [];
    for (let rowIndex = 0; rowIndex < props.numRows; rowIndex++) {
      for (let columnIndex = 0; columnIndex < props.numColumns; columnIndex++) {
        items.push(getLabel(rowIndex, columnIndex));
      }
    }
    return items;
  }

  const labels: string[] = getLabels();
  // TEDTODOBW - device may have no position yet.
  const devicePosition: string = getLabel(props.rowIndex + 1, props.columnIndex + 1);

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

function mapStateToProps(state: any): Partial<any> {
  return {
    numRows: getNumRows(state),
    numColumns: getNumColumns(state),
    rowIndex: getRowIndex(state),
    columnIndex: getColumnIndex(state),
  };
}

export default connect(mapStateToProps)(BrightWallGrid);


