import {combineReducers} from 'redux';
import user from './user';
import flashMessages from './flashMessages';
import events from './Events';
import modal from './modal';

export default combineReducers({
    user,
    events,
    flashMessages,
    modal
});
