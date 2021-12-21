import * as React from 'react';

import '../styles/deviceSetup.css';

export interface ScreenPositionProps {
  position: string,
}

// -----------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------

const ScreenPosition = (props: ScreenPositionProps) => {
  return (
    <div className='screenPositionInfoContainer'>
        <div className='screenNameLabel'>Screen Position:</div>
        <div className='screenNameValue'>{props.position}</div>
    </div>
);
};

export default ScreenPosition;

