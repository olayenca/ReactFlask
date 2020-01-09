import React from "react";
import { renderToString } from "react-dom/server";
import routes from "./routes";

export default function render() {
  let content_rendered = renderToString(React.createElement(routes));
  console.log(content_rendered)
  console.log(process)
  return {
    content
  };
}

//search for: react rendertostring from python
