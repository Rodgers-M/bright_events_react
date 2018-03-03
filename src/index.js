import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap3/dist/css/bootstrap.css'
import './stylesheets/index.css';
import routes from './components/routes'

ReactDOM.render(
   <Router>
    {routes}
   </Router>, 
    document.getElementById('root'));
