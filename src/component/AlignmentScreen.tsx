import * as React from 'react';

import '../styles/deviceSetup.css';

const AlignmentScreen = () => {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 500 500"
      preserveAspectRatio='none'
      className='testAlignmentScreenContainer'
    >
      <line x1="0" y1="100" x2="100" y2="0" stroke="black" />
      <line x1="0" y1="200" x2="200" y2="0" stroke="black" />
      <line x1="0" y1="300" x2="300" y2="0" stroke="black" />
      <line x1="0" y1="400" x2="400" y2="0" stroke="black" />
      <line x1="0" y1="500" x2="500" y2="0" stroke="black" />

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

export default AlignmentScreen;