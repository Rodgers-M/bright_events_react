import '../helpers'
import FlashMessage from '../../src/components/messages/FlashMessage';
 
const deleteFlashMessage = sinon.spy();

const successMessage = {
    type : 'success',
    text : 'your action was successful, proceed'
}; 
const errorMessage = {
    type : 'error',
    text : 'your action was successful, proceed'
}; 

function setup(message){
    return mount(
        <FlashMessage message={message} deleteFlashMessage={deleteFlashMessage} />,
        options.get()
    );
};
 
describe('Flash messages component', ()=> {
   it('it should have one div', ()=> {
       const wrapper = setup(successMessage)
       expect(wrapper.find('div').length).toEqual(1);
   });

});
