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
        expect(wrapper.find('input').length).toEqual(2)
    });
});
