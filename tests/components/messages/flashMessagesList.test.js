/* global React :true */
/* global mount :true */
/* global describe :true */
/* global it :true */
/* global sinon :true */
/* global expect :true */
/* eslint no-undef: "error" */

import {FlashMessagesList} from '../../../src/components/messages/FlashMessagesList';

const messages = [
    {id : '1', type : 'error', text : 'your action failed, please try again later'},
    {id : '2', type : 'sucess', text : 'your action was successful, proceed'},
    {id : '3', type : 'error', text : 'your action failed, please try again later'},
]; 
 
const deleteFlashMessage = sinon.spy();

function setup(){
    return mount(
        <FlashMessagesList messages={messages} deleteFlashMessage={deleteFlashMessage} />
    );
};

describe('FlashMessagesList component', ()=> {
    it('should have four  div elements when displaying 3 messages', ()=> {
        const wrapper = setup();
        expect(wrapper.find('div').length).toEqual(4);
    });
    it('should have two  div elements with error class', ()=> {
        const wrapper = setup();
        expect(wrapper.find('.error').length).toEqual(2);
    });
});

