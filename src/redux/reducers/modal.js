import {OPEN_MODAL, CLOSE_MODAL} from '../actions/types';

export default function(modal={open : false}, action){
    switch(action.type){
    case OPEN_MODAL:
        return action.modalState;
    case CLOSE_MODAL:
        return action.modalState;
    default: return modal;
    }
}
