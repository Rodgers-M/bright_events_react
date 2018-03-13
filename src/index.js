import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css';
import './stylesheets/index.css';
import App from './app';   
import registerServiceWorker from './registerServiceWorker'; 

ReactDOM.render(
    <Router>
        <App />        
    </Router>,             
    document.getElementById('root') 
);
registerServiceWorker();
