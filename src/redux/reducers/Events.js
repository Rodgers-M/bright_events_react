import {EVENT_CREATED} from '../actions/types';
   
export default function events(state = [], action){
    switch(action.type){
        case EVENT_CREATED:
            return [
            ...state, action.createdEvent
            ]  
        default:
            return state;
    }
}

