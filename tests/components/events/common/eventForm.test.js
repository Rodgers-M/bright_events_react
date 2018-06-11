/* global sinon :true */
/* global React :true */
/* global mount :true */
/* global describe :true */
/* global it :true */
/* global expect :true */
/* eslint no-undef: "error" */

import moment from 'moment';
import EventForm from '../../../../src/components/events/common/EventForm';
 
const fakeSubmit = sinon.spy();
const fakeHandleDate = sinon.spy();
const fakeOnChange = sinon.spy();
const fakeDismiss = sinon.spy();

const emptyErrorObject = {};
const ErrorObject = {
    'message' : 'server unavailabe',
    'name' : 'name error',
    'description' : 'description error',
    'category' : 'category error',
    'location' : 'location error',
    'date' : 'date'
};

function setup(errors){
    const  props = {
        state : {
            data: { 
                name: '',
                description: '',
                category: '',
                location: '',
                event_date: moment() 
            },
            loading : false,
            errors 
        },
        onSubmit : fakeSubmit,
        onChange : fakeOnChange,
        handleDismiss : fakeDismiss,
        handleDate : fakeHandleDate,
        buttonText : 'Create'
    };
    return mount(
        <EventForm { ...props } />
    );
}

describe('Event form component', ()=> {
    describe('form content', ()=> {
        it('should have one form element', ()=> {
            const wrapper = setup(emptyErrorObject);
            expect(wrapper.find('form').length).toEqual(1);
        });
        it('should have one div with a class ui grid', ()=> {
            const wrapper = setup(emptyErrorObject);
            expect(wrapper.find('div.ui.grid').length).toEqual(1);
        });
        it('should have one button with text create', ()=> {
            const wrapper = setup(emptyErrorObject);
            expect(wrapper.find('button').length).toEqual(1);
            expect(wrapper.find('button').text()).toBe('Create');
        });
    });
    describe('form behaviour', ()=> {
        it('should have an error message component when an error occurs', ()=> {
            const wrapper = setup(ErrorObject);
            expect(wrapper.find('div.ui.negative.message').length).toEqual(1);
        });
        it('should have span elements on each input with  an error', ()=> {
            const wrapper = setup(ErrorObject);
            expect(wrapper.find('span').length).toEqual(5);
        });
    });
});
