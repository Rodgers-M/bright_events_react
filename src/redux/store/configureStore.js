import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from '../reducers/rootReducer';

export default function configureStore(initialState){
    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunk, logger))
    );
}
