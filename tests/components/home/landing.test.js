/* global React :true */
/* global mount :true */
/* global describe :true */
/* global Enzyme Adapter options :true */
/* global it :true */
/* global expect :true */
/* eslint no-undef: "error" */

import {Landing} from '../../../src/components/home/landing';

Enzyme.configure({ adapter: new Adapter() });

function setup(isAuthenticated){
    const props = {
        isAuthenticated,
        logout : () => {}
    };
    return mount(
        <Landing {...props} />,
        options.get()
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
    it('should have a get started button that points to signup', () => {
        const wrapper = setup(true);
        expect(wrapper.find('Link').last().props().to).toEqual('/auth/signup');
    });
});
