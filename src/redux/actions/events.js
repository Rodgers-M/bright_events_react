import {EVENT_CREATED, EVENTS_FETCHED} from './types';
import api from '../../api';


export const eventCreated = (createdEvent) => ({
    type : EVENT_CREATED,
    createdEvent  
});

export const eventsFetched = (events) => ({
    type : EVENTS_FETCHED,
    events  
});
 
export const create = details => (dispatch) => 
    api.events.create(details).then(event =>{
        dispatch(eventCreated(event));
    });

export const fetchEvents = () => (dispatch) => 
    api.events.fetch().then(events =>{
        dispatch(eventsFetched(events));
    });
