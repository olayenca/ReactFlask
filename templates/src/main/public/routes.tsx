import React from 'react';
import {BrowserRouter as Router, HashRouter, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing';
import Home from './components/Home';

export default (
  <HashRouter>
    <div>
      <Switch>
        <Route exact strict path='/' component={Landing} />
        <Route exact strict path='/home' component={Home} />
      </Switch>
    </div>
  </HashRouter>
)
