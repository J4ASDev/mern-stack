import React from 'react';
import { render } from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';

import Application from './Application';
import * as serviceWorker from './serviceWorker';

const store = createStore(
  reducers,
  {},
  composeWithDevTools(
    applyMiddleware(
      logger,
      thunk
    )
  )
);

render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('app')
);
serviceWorker.unregister();
