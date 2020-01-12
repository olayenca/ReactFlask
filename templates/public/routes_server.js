import React from "react";
import { renderToString } from "react-dom/server";
import {StaticRouter, Routes} from "./routes";

if (process.argv[2]) {
  const url = `/${process.argv[2].split("/")[2]}`;
  const content = renderToString(<StaticRouter location={url}><Routes /></StaticRouter>);
  console.log(content);
}

