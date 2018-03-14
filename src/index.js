import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import 'semantic-ui-css/semantic.min.css';
import './stylesheets/index.css';
import App from './app';   
import rootReducer from './rootReducer';
import registerServiceWorker from './registerServiceWorker'; 

const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App />        
        </Provider>
    </Router>,             
    document.getElementById('root') 
);
registerServiceWorker();
