
import React from "react";
import { Route, Switch, StaticRouter, BrowserRouter } from "react-router-dom";
import Landing from "./components/Landing";
import Home from "./components/Home";

function Routes () {
    return (
      <Switch>
        <Route exact strict path="/" component={Landing} />
        <Route exact strict path="/home" component={Home} />
      </Switch>
    );
  };
  export {Routes, BrowserRouter, StaticRouter};