import {EVENT_CREATED} from '../types';
import api from '../api';


export const eventCreated = (createdEvent) => ({
    type : EVENT_CREATED,
    createdEvent  
});
 
export const create = details => (dispatch) => 
    api.event.create(details).then(event =>{
        console.log(event)
        dispatch(eventCreated(event))});
