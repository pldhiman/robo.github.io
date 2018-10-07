import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './containers/app.js';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {searchRobots} from './reducers.js'

const store=createStore(searchRobots);
ReactDOM.render(<App store={store}/>, document.getElementById('root'));

registerServiceWorker();
