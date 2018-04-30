import '../helpers'
import * as actions from '../../src/redux/actions/flashMessages';
import * as types from '../../src/redux/actions/types';

describe('flashMessages', ()=> {
    describe('add flash Message creator',()=> {
        it('should create an action to add a flash message', ()=> {
            const message = {
                type : 'success',
                text : 'your action was successful, proceed'
            }; 
            const expectedAction = {
                type : types.ADD_FLASH_MEASSAGE,
                message
            }; 
            expect(actions.addFlashMessage(message)).toEqual(expectedAction);
        });
    });
    describe('delete flash Message creator',()=> {
        it('should create an action to delete a flash message', ()=> {
            const id = 'ub123e' 
            const expectedAction = {
                type : types.DELETE_FLASH_MESSAGE,
                id
            }; 
            expect(actions.deleteFlashMessage(id)).toEqual(expectedAction);
        });
    });
});
