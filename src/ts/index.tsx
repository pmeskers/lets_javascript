import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { colorPicker } from './reducers';
import { App } from 'components/app';

let store = createStore(colorPicker);

function run() {
  ReactDOM.render(
    <Provider store={store}>
      <App></App>
    </Provider>,
    document.getElementById('app')
  );
}

if (document.readyState !== 'loading') {
  run();
} else {
  document.addEventListener('DOMContentLoaded', run);
}
