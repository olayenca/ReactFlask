import React from 'react';
import { renderToString } from 'react-dom/server';
import routes from "./routes";

export default function render()  {
  let content = renderToString(routes);
  return {
    content
  };
};