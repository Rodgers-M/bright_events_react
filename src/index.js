import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css';
import './stylesheets/index.css';
import routes from './components/routes'

ReactDOM.render(
   <Router>
    {routes}
   </Router>, 
    document.getElementById('root'));
