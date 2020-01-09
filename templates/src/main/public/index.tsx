import React from 'react';
import {hydrate} from 'react-dom';
import '../static/css/index.css';
import * as serviceWorker from '../static/serviceWorker';
import routes from "./routes";

console.log(process)
hydrate(routes, document.getElementById('root'));
serviceWorker.unregister();
