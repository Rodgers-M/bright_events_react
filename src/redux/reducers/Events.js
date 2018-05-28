import * as types from '../actions/types';
   
export default function events(state = [], action){
    switch(action.type){
    case types.EVENT_CREATED:
        return [
            ...state, action.createdEvent
        ];
    case types.EVENT_UPDATED:
        return state;
    case types.EVENT_DELETED:
        return state.filter(event => event.id !== action.eventId );
    case types.ALL_EVENTS_FETCHED:
        return action.events;
    case types.MY_EVENTS_FETCHED:
        return action.events;
    default:
        return state;
    }
}

