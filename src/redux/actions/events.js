import {EVENT_CREATED, ALL_EVENTS_FETCHED, MY_EVENTS_FETCHED} from './types';
import {api} from '../../api';


export const eventCreated = (createdEvent) => ({
    type : EVENT_CREATED,
    createdEvent  
});

export const eventsFetched = (events) => ({
    type : ALL_EVENTS_FETCHED,
    events  
});
 
export const myEventsFetched = (events) => ({
    type : MY_EVENTS_FETCHED,
    events  
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
