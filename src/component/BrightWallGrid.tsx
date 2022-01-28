import * as React from 'react';
import { connect } from 'react-redux';

import { map } from 'lodash';

import '../styles/deviceSetup.css';
import {
  getBrightSignsInWall,
  getColumnIndex,
  getNumColumns,
  getNumRows,
  getRowIndex
} from '../selector';
import { getDevicePositionLabel } from '../utility';
import { BrightSignInWall, BrightSignInWallMap } from '../type';

export interface BrightWallGridProps {
  numRows: number,
  numColumns: number,
  rowIndex: number;
  columnIndex: number;
  brightSignsInWall: BrightSignInWallMap,
}

// -----------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------

const BrightWallGrid = (props: BrightWallGridProps) => {

  const style = {
    gridTemplateColumns: `repeat(${props.numColumns}, 1fr)`
  };

  const getDeviceInformation = (): any[] => {
    const deviceInfoItems: any[] = [];
    for (let rowIndex = 0; rowIndex < props.numRows; rowIndex++) {
      for (let columnIndex = 0; columnIndex < props.numColumns; columnIndex++) {

        const devicePositionLabel: string = getDevicePositionLabel(rowIndex, columnIndex);
        const deviceInfoItem: any = {
          positionLabel: devicePositionLabel,
          serialNumber: '',
          ipAddress: '',
        };

        for (const serialNumber in props.brightSignsInWall) {
          if (Object.prototype.hasOwnProperty.call(props.brightSignsInWall, serialNumber)) {
            const brightSignInWall: BrightSignInWall = props.brightSignsInWall[serialNumber];
            if (rowIndex === brightSignInWall.rowIndex && columnIndex === brightSignInWall.columnIndex) {
              const { serialNumber, ipAddress, isMaster } = brightSignInWall;
              deviceInfoItem.serialNumber = serialNumber;
              deviceInfoItem.ipAddress = ipAddress;
              deviceInfoItem.isMaster = isMaster;
            }
          }
        }

        deviceInfoItems.push(deviceInfoItem);
      }
    }
    return deviceInfoItems;
  }

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
  const deviceInfoItems: any[] = getDeviceInformation();
  
  const devicePosition: string = getDevicePositionLabel(props.rowIndex, props.columnIndex);

  return (
    <div className='screenGridContainer' style={style}>
      {map(deviceInfoItems, (deviceInfoItem: any, index: number) => {
        let className = 'screenGridItemContainer';
        if (deviceInfoItem.positionLabel === devicePosition) {
          className = 'selectedScreenGridItemContainer';
        }

        console.log('index: ' + index.toString());
        console.log('deviceInfoItem');
        console.log(deviceInfoItems[index].serialNumber);
        console.log(deviceInfoItems[index].ipAddress);
        console.log(deviceInfoItems[index].isMaster);

        return (
          <div className={className} key={`position_${deviceInfoItem.positionLabel}`}>
            <div className='indexContainer'>
              <p>{deviceInfoItem.positionLabel}</p>
              <p>{deviceInfoItem.serialNumber}</p>
              <p>{deviceInfoItem.ipAddress}</p>
            </div>
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
    brightSignsInWall: getBrightSignsInWall(state),
  };
}

export default connect(mapStateToProps)(BrightWallGrid);


