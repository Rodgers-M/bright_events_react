import 'jsdom-global/register';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import expect from 'expect';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, {mount, shallow} from 'enzyme';
import {Landing} from './landing';

Enzyme.configure({ adapter: new Adapter() });

function setup(isAuthenticated){
    let props = {
        isAuthenticated : isAuthenticated,
        logout : () => {}
    };
    return mount(
        <Router>
        <Landing {...props} />
        </Router>
    );
};

describe('Landing page component', () => {
    it('have a login button when isAuthenticated is false', () => {
        const wrapper = setup(false);
        expect(wrapper.find('i.sign.in').length).toEqual(1);
        expect(wrapper.find('i.sign.out').length).toEqual(0);
     });
    it('have a logout button when isAuthenticated is true', () => {
        const wrapper = setup(true);
        expect(wrapper.find('i.sign.in').length).toEqual(0);
        expect(wrapper.find('i.sign.out').length).toEqual(1);
     });
    it('should have one header', () => {
        const wrapper = setup(true);
        expect(wrapper.find('header').length).toEqual(1);
     });
    it('should have one button with a link and an icon', () => {
        const wrapper = setup(true);
        expect(wrapper.find('button').length).toEqual(1);
        expect(wrapper.find('button').children().length).toEqual(2);
     });
  });
