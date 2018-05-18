/* global describe :true */
/* global it :true */
/* global expect :true */
/* eslint no-undef: "error" */
import * as actions from '../../../src/redux/actions/events';
import * as types from '../../../src/redux/actions/types';

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
});
