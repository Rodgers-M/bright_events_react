/* global describe :true */
/* global it :true */
/* global expect :true */
/* eslint no-undef: "error" */

import * as actions from '../../../src/redux/actions/events';
import eventsReducer from '../../../src/redux/reducers/Events';

describe('eventsReducer', ()=> {
    it('should add an event to the events array when EVENT_CREATED is fired', ()=> {
        const initialState = [{name : 'some name'}];
        const event = {name : 'another name'};
        const action = actions.eventCreated(event);
        const newState = eventsReducer(initialState, action);
        expect(newState.length).toEqual(2);
    });
    it('should add all events to the store when ALL_EVENTS_FETCHED is fired', ()=> {
        const initialState = [];
        const events = [{name : 'some name'}, {name : 'another name'}];
        const action = actions.eventsFetched(events);
        const newState = eventsReducer(initialState, action);
        expect(newState[0].name).toBe('some name');
    });
});
