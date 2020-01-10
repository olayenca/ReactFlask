import React from "react";
import { renderToString } from "react-dom/server";
import { Route, Switch, StaticRouter } from "react-router-dom";
import Landing from "./components/Landing";
import Home from "./components/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact strict path="/" component={Landing} />
      <Route exact strict path="/home" component={Home} />
    </Switch>
  );
};

const url = `/${process.argv[2].split("/")[2]}`;
const content = renderToString(
  <StaticRouter location={url}>
    <Routes />
  </StaticRouter>
);

console.log(content);
export default Routes;
