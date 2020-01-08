import React from 'react';
import { hydrate } from 'react-dom';
import '../static/css/index.css';
import routes from "./routes.js";

hydrate(routes, document.querySelector('#root'));