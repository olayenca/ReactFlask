import React from 'react';
import {hydrate} from 'react-dom';
import {Routes, BrowserRouter} from "./routes";
import "../static/main.bundle";

hydrate(<BrowserRouter><Routes /></BrowserRouter>, document.getElementById('root'));