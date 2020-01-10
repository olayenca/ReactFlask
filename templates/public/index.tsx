import React from 'react';
import {hydrate} from 'react-dom';
import Routes from './routes_server';

hydrate(<Routes/>, document.getElementById('root'));
