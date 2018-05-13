/* global describe :true */
/* global it :true */
/* global expect :true */
/* eslint no-undef: "error" */

import * as actions from '../../../src/redux/actions/auth';
import * as types from '../../../src/redux/actions/types';

describe ('user actions', ()=> {
    describe('userLoggedIn  action creator', ()=> {
        it('should create an action to login a user', ()=> {
            const user = {
                access_token : 'someLongSingedString'
            };
            const expectedAction = {
                type : types.USER_LOGGED_IN,
                user
            };
            expect(actions.userLoggedIn(user)).toEqual(expectedAction);
        });
    });
    describe('userLoggedOut   action creator', ()=> {
        it('should create an action to logout a user', ()=> {
            const expectedAction = {
                type : types.USER_LOGGED_OUT
            };
            expect(actions.userLoggedOut()).toEqual(expectedAction);
        });
    });
});
