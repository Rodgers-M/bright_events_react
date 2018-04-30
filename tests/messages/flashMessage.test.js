import '../helpers'
import FlashMessage from '../../src/components/messages/FlashMessage';
 
const deleteFlashMessage = sinon.spy();

const successMessage = {
    type : 'success',
    text : 'your action was successful, proceed'
}; 
const errorMessage = {
    type : 'error',
    text : 'your action failed, please try again later'
}; 

function setup(message){
    return mount(
        <FlashMessage message={message} deleteFlashMessage={deleteFlashMessage} />
    );
};
 
describe('Flash messages component', ()=> {
   it('should have one div', ()=> {
       const wrapper = setup(successMessage)
       expect(wrapper.find('div').length).toEqual(1);
   });
   it('should display the passed in message', ()=> {
       const wrapper = setup(successMessage)
       expect(wrapper.find('p').text()).toBe('your action was successful, proceed');
   });
   it('should call deleteFlashMessage when dismissed', ()=> {
       const wrapper = setup(successMessage)
       wrapper.find('i').simulate('click');
       expect(deleteFlashMessage.called).toBe(true);
   });
   it('should have a div with class error on error message', ()=> {
       const wrapper = setup(errorMessage)
       expect(wrapper.find('.error').length).toBe(1);
   });
});
