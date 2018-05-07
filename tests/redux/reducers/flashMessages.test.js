import * as actions from '../../../src/redux/actions/flashMessages';
import flashMessagesReducer from '../../../src/redux/reducers/flashMessages';

describe('flashMessages reducer', ()=> {
    it('should add a flash message when passed ADD_FLASH_MEASSAGE', ()=> {
        const message = {
            type : 'success',
            text : 'your action was successful, proceed'
        }; 
        const action = actions.addFlashMessage(message);
        const newState = flashMessagesReducer([], action);
        expect(newState.length).toEqual(1);
    });
    it('should delete a message when passed DELETE_FLASH_MESSAGE', ()=> {
        const initialState = [{
            id : 'u1b4eh',
            type : 'success',
            text : 'your action was successful, proceed'
        }]; 
        const id = 'u1b4eh'; 
        const action = actions.deleteFlashMessage(id);
        const newState = flashMessagesReducer(initialState, action);
        expect(newState.length).toEqual(0);
    });
});
