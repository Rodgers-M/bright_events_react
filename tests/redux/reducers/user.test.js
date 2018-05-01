import '../../helpers'
import * as actions from '../../../src/redux/actions/auth';
import userReducer from '../../../src/redux/reducers/user';

describe('user reducers', ()=> {
    it('should add a user when passed USER_LOGGED_IN', ()=> {
        const user = {email : 'test@test.com',  access_token : 'someLongSingedString'};
        const action = actions.userLoggedIn(user);

        const newState = userReducer({},action); 
 
        expect(Object.keys(newState).length).toEqual(2);
        expect(newState.email).toBe('test@test.com');
    });
    it('should remove a user when passed USER_LOGGED_OUT', ()=> {
        const initialState = {email : 'test@test.com',  access_token : 'someLongSingedString'};
        const action = actions.userLoggedOut();
 
        const newState = userReducer({},action); 
 
        expect(Object.keys(newState).length).toEqual(0);
        expect(newState.email).toBe(undefined);
    });
});
