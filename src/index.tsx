import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import { brightWallModelReducer } from './model';

import {
  getPlatform,
} from './config';

const platform = getPlatform();
console.log(platform);

const store = createStore(
  brightWallModelReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

const divStyle = {
  height: '1080px',
};

ReactDOM.render(
  <Provider store={store}>
    <div style={divStyle}>
      <p>A very long line of text that should show up even if the monitor is in overscan mode, line 0</p>
      <p>A very long line of text that should show up even if the monitor is in overscan mode, line 1</p>
      <p>A very long line of text that should show up even if the monitor is in overscan mode, line 2</p>
      <p>A very long line of text that should show up even if the monitor is in overscan mode, line 3</p>
      <p>A very long line of text that should show up even if the monitor is in overscan mode, line 4</p>
      <p>A very long line of text that should show up even if the monitor is in overscan mode, line 5</p>
      <p>A very long line of text that should show up even if the monitor is in overscan mode, line 6</p>
      <p>A very long line of text that should show up even if the monitor is in overscan mode, line 7</p>
      <p>A very long line of text that should show up even if the monitor is in overscan mode, line 8</p>
      <p>A very long line of text that should show up even if the monitor is in overscan mode, line 9</p>
      <p>A very long line of text that should show up even if the monitor is in overscan mode, line 10</p>
      <p>A very long line of text that should show up even if the monitor is in overscan mode, line 11</p>
      <p>A very long line of text that should show up even if the monitor is in overscan mode, line 12</p>
      <p>A very long line of text that should show up even if the monitor is in overscan mode, line 13</p>
      <p>A very long line of text that should show up even if the monitor is in overscan mode, line 14</p>
      <p>A very long line of text that should show up even if the monitor is in overscan mode, line 15</p>
      <p>A very long line of text that should show up even if the monitor is in overscan mode, line 16</p>
    </div>
  </Provider>,
  document.getElementById('content') as HTMLElement
);
