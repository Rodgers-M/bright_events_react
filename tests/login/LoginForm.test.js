import 'jsdom-global/register';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import expect from 'expect';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import {mount, shallow} from 'enzyme';
import LoginForm from './LoginForm';
    
 
Enzyme.configure({ adapter: new Adapter() });

function setup(){
    let props = {
        submit : () => {}
    };
    return mount(
        <LoginForm {...props} />
    );
};

describe('Login form component', () => {
    it('should have two input fields', ()=> {
        const wrapper = setup();
        expect(wrapper.find('input').length).toEqual(2);
    });
    it('should have one button', ()=> {
        const wrapper = setup();
        expect(wrapper.find('button').length).toEqual(1);
    });
    it('should have no data in state', ()=> {
        let wrapper = setup();
        const wrap = wrapper.instance();
        expect(wrap.state.data.username).toBe('');
        expect(wrap.state.data.password).toBe('');
    });
    it('change state when user types values', ()=> {
        const wrapper = setup()  
        const usernameInput = wrapper.find('#username');
        usernameInput.instance().value = "myname";
        usernameInput.simulate('change');
        expect(wrapper.instance().state.data.username).toEqual('myname')
    }) ;
    it('should have a submit prop', ()=> {
        let wrapper = setup();
        expect(wrapper.prop('submit')).toBeDefined();
        });
    it('should call validate on submit', ()=> {
        let props = {
            submit : () => {}
        };
        const wrapper = shallow(<LoginForm {...props} />);
        const validateMock = () => {};
        wrapper.instance().validate = validateMock;
        wrapper.simulate('submit')
        });
});
