import 'jsdom-global/register';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import expect from 'expect';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import {mount, shallow} from 'enzyme';
import SignupForm from '../../src/components/signup/SignupForm';
    
 
Enzyme.configure({ adapter: new Adapter() });

function setup(){
    let props = {
        submit : () => {}
    };
    return mount(
        <SignupForm {...props} />
    );
};

describe('SignupForm form component', () => {
    it('should have four input fields', ()=> {
        const wrapper = setup();
        expect(wrapper.find('input').length).toEqual(4);
    });
    it('should have one submit  button', ()=> {
        const wrapper = setup();
        expect(wrapper.find('button').length).toEqual(1);
    });
    it('should have no data in state', ()=> {
        const wrapper = setup()  
        const usernameInput = wrapper.find('#username');
        usernameInput.instance().value = "myname";
        usernameInput.simulate('change');
        expect(wrapper.instance().state.data.username).toEqual('myname')
    });
    it('should have a submit prop', ()=> {
        let wrapper = setup();
        expect(wrapper.prop('submit')).toBeDefined();
        });
});
