import {EVENT_CREATED, EVENTS_FETCHED} from '../actions/types';
   
export default function events(state = [], action){
    switch(action.type){
    case EVENT_CREATED:
        return [
            ...state, action.createdEvent
        ];
    case EVENTS_FETCHED:
        return action.events;
    default:
        return state;
    }
}

