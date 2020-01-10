import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing.tsx";
import Home from "./components/Home.tsx";

export default (<Landing/>
  /*<HashRouter>
    <div>
      <Switch>
        <Route exact strict path="/" component={Landing} />
        <Route exact strict path="/home" component={Home} />
      </Switch>
    </div>
  </HashRouter>*/
);
