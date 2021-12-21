import * as React from 'react';
import {defaultTo, map} from 'lodash';

import '../styles/deviceSetup.css';

export interface BrightWallGridProps {
  items: Array<string>,
  numCols?: number,
}

const BEZEL_GRID_DEFAULT_NUMBER_OF_COLUMNS: number = 8;

// -----------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------

const BrightWallGrid = (props: BrightWallGridProps) => {

  const items: Array<string> = defaultTo(props.items, []);
  const numCols: number = defaultTo(props.numCols, BEZEL_GRID_DEFAULT_NUMBER_OF_COLUMNS);

  const style = {
      gridTemplateColumns: `repeat(${numCols}, 1fr)`
  };

return (
    <div className='screenGridContainer' style={style}>
        {map(items, (item: string) => {
            return (
                <div className='screenGridItemContainer' key={`bezel_${item}`}>
                    <div className='indexContainer'>{item}</div>
                </div>
            );
        })}
    </div>
);
};

export default BrightWallGrid;

