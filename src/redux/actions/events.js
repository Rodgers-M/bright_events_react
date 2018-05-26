import * as types from './types';
import {api} from '../../api';


export const eventCreated = (createdEvent) => ({
    type : types.EVENT_CREATED,
    createdEvent  
});

export const eventsFetched = (events) => ({
    type : types.ALL_EVENTS_FETCHED,
    events  
});
 
export const myEventsFetched = (events) => ({
    type : types.MY_EVENTS_FETCHED,
    events  
});

export const eventUpdated = (updatedEvent) => ({
    type : types.EVENT_UPDATED,
    updatedEvent
});

export const create = details => (dispatch) => 
    api.events.create(details).then(event =>{
        dispatch(eventCreated(event));
    });

export const fetchEvents = () => (dispatch) => 
    api.events.fetchAll().then(events =>{
        dispatch(eventsFetched(events));
    });

export const fetchMyEvents = () => (dispatch) => 
    api.events.fetchMyEvents().then(events =>{
        dispatch(myEventsFetched(events));
    });

export const updateEvent = (event, eventId)  => (dispatch ) =>
    api.events.updateEvent(event, eventId).then(updatedEvent => {
        dispatch(eventUpdated(updatedEvent));
    }).catch(err => console.log(err));
