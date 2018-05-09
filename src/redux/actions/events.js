import {EVENT_CREATED} from './types';
import api from '../../api';


export const eventCreated = (createdEvent) => ({
    type : EVENT_CREATED,
    createdEvent  
});
 
export const create = details => (dispatch) => 
    api.events.create(details).then(event =>{
        console.log('this is the event from backend', event);
        dispatch(eventCreated(event));
    });
