import React from 'react';
import {hydrate} from 'react-dom';
import '../static/css/index.css';
import * as serviceWorker from '../static/serviceWorker';
import routes from "./routes";

hydrate(routes, document.querySelector('#root'));
serviceWorker.unregister();
