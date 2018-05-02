import {EVENT_CREATED} from '../types';
   
export default function createdEvents(state = [], action){
    switch(action.type){
        case EVENT_CREATED:
            return [
            ...state,
           action.eventCreated]  
        default:
            return state;
    }
}

