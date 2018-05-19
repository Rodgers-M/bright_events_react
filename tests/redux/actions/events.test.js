/* global describe :true */
/* global it :true */
/* global expect afterEach :true */
/* eslint no-undef: "error" */
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../../src/redux/actions/events';
import * as types from '../../../src/redux/actions/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);

describe('Events Actions', ()=> {
    describe('Event created action creator', ()=> {
        it('should return an event and action type', ()=> {
            const createdEvent = { eventInfo : 'some event information', testing : 'yes we are just testing'};
            const expectedAction = {
                type : types.EVENT_CREATED,
                createdEvent
            };
            expect(actions.eventCreated(createdEvent)).toEqual(expectedAction);
        });
    });
    describe('ALL_EVENTS_FETCHED action creator', ()=> {
        it('should return an action of type ALL_EVENTS_FETCHED and an array of events ', ()=> {
            const events = [{ eventInfo : 'some event information', testing : 'yes we are just testing'}];
            const expectedAction = {
                type : types.ALL_EVENTS_FETCHED,
                events 
            };
            expect(actions.eventsFetched(events)).toEqual(expectedAction);
        });
    });
    describe('MY_EVENTS_FETCHED action creator', ()=> {
        it('should return an action of type MY_EVENTS_FETCHED and an array of events', ()=> {
            const events = [{ eventInfo : 'some event information', testing : 'yes we are just testing'}];
            const expectedAction = {
                type : types.MY_EVENTS_FETCHED,
                events 
            };
            expect(actions.myEventsFetched(events)).toEqual(expectedAction);
        });
    });
    describe('Async actions', ()=> {
        afterEach(()=> {
            mock.reset();
        });
        it.skip('should dispacth ALL_EVENTS_FETCHED on success', ()=> {
            mock.onGet('/events/all').reply(200, [{name : 'my event'}]);
            const expectedAction = {type: actions.ALL_EVENTS_FETCHED, events: [{name: 'my event'}]}; 
            const store = mockStore({ events: [] });
            return store.dispatch(actions.fetchEvents()).then(()=> {
                expect(store.getActions()).toEqual(expectedAction);
            });
        });
    });
});
