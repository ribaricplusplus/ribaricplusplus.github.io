import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'
import {BrowserRouter as Router } from 'react-router-dom'
import 'core-js/stable';
import 'regenerator-runtime/runtime';


ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));