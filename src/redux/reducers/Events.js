import {EVENT_CREATED, ALL_EVENTS_FETCHED, MY_EVENTS_FETCHED} from '../actions/types';
   
export default function events(state = [], action){
    switch(action.type){
    case EVENT_CREATED:
        return [
            ...state, action.createdEvent
        ];
    case ALL_EVENTS_FETCHED:
        return action.events;
    case MY_EVENTS_FETCHED:
        return action.events;
    default:
        return state;
    }
}

