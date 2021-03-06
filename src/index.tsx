import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import { brightWallModelReducer, setColumnIndex, setRowIndex } from './model';

import {
  getPlatform,
} from './config';
import App from './component/App';
import { isNil } from 'lodash';

// const platform = getPlatform();
// console.log(platform);

var bsMessage = new BSMessagePort();
console.log('bsMessage');
console.log(bsMessage);

bsMessage.onbsmessage = (msg: any) => {

  console.log('onbsmessage invoked');
  console.log(msg);
  console.log(msg.data);
  for (const key in msg.data) {
    if (Object.prototype.hasOwnProperty.call(msg.data, key)) {
      const value = msg.data[key];
      console.log('key');
      console.log(key);
      console.log('value');
      console.log(value);
    }
  }

  if (!isNil(msg) && !isNil(msg.data) && !isNil(msg.data.command)) {
    switch (msg.data['command']) {
      case 'setBrightWallPosition':
        if (msg.data.hasOwnProperty('rowindex') && msg.data.hasOwnProperty('columnindex')) {
          const rowIndex: number = msg.data['rowindex'];
          console.log('rowIndex');
          console.log(rowIndex);
          const columnIndex: number = msg.data['columnindex'];
          console.log('columnIndex');
          console.log(columnIndex);
          
          store.dispatch(setRowIndex(rowIndex));
          store.dispatch(setColumnIndex(columnIndex));
        }
        break;
      default:
        console.log('no command match');
        console.log(msg.data['command']);
        break;
    }
  }
  // for(name in msg.data)
  // {
  //     console.log('### ' + name + ': ' + msg.data[name]);
  // }
}


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
      <App />
    </div>
  </Provider>,
  document.getElementById('content') as HTMLElement
);
