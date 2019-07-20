import React from 'react';
import { render } from 'react-dom';
import Application from './Application';
import * as serviceWorker from './serviceWorker';

render(<Application />, document.getElementById('app'));
serviceWorker.unregister();
