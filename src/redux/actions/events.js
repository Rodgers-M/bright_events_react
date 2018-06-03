import * as types from './types';
import {api} from '../../api';
import { addFlashMessage } from './flashMessages';
import { closeModal } from './modals';

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

export const eventDeleted = (eventId) => ({
    type : types.EVENT_DELETED,
    eventId
});

export const create = details => (dispatch) => 
    api.events.create(details).then(event =>{
        dispatch(eventCreated(event));
    });

export const fetchEvents = () => (dispatch) => 
    api.events.fetchAll().then(data =>{
        dispatch(eventsFetched(data.event_list));
    });

export const fetchMyEvents = () => (dispatch) => 
    api.events.fetchMyEvents().then(data =>{
        dispatch(myEventsFetched(data.event_list));
    });

export const updateEvent = (event, eventId)  => (dispatch ) =>
    api.events.updateEvent(event, eventId).then(data => {
        dispatch(eventUpdated(data.event));
        dispatch(closeModal());
        return data.message;
    }).catch(err => console.log(err));

export const onDelete = eventId => (dispatch) =>
    api.events.deleteEvent(eventId).then(message => {
        dispatch(eventDeleted(eventId));
        dispatch(closeModal());
        dispatch(addFlashMessage({ type : 'success', text : message}));
    });

export const rsvp = eventId => (dispatch) =>
    api.events.rsvp(eventId).then(data => {
        console.log(data.event);
        dispatch(eventUpdated(data.event));
        dispatch(addFlashMessage({type: 'success', text: data.message}));
    });
