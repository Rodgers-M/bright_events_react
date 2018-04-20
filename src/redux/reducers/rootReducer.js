import {combineReducers} from 'redux';
import user from './user';
import flashMessages from './flashMessages';

export default combineReducers({
    user,
    flashMessages
});
