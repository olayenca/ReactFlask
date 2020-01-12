import React from 'react';
import {hydrate} from 'react-dom';
import {Routes, BrowserRouter} from "./routes";
import "../static/main.bundle";
import { rehydrateMarks } from 'react-imported-component';

//rehydrateMarks().then(() => {
hydrate(<BrowserRouter><Routes /></BrowserRouter>, document.getElementById('root'));
//});