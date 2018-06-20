/* global React :true */
/* global shallow Enzyme Adapter :true */
/* global describe :true */
/* global it :true */
/* global sinon :true */
/* global expect :true */
/* eslint no-undef: "error" */

import { GetUserEmail } from '../../../src/components/users/resetPassword/GetUserEmail';

Enzyme.configure({ adapter: new Adapter() });

const mockSubmit = sinon.spy();
const mockChange = sinon.spy();

function setup(){
    const props = {
        state : {
            data : {
                email : '',
            },
            loading : false,
            errors : {}
        },
        onSubmit : mockSubmit,
        onChange : mockChange
    };
    return shallow(
        <GetUserEmail { ...props } />
    );
}

describe('GetUserEmail component', ()=> {
    describe('component content', ()=> {
        const wrapper = setup();
        it('should have one input field with email id ', ()=> {
            expect(wrapper.find('#email').length).toEqual(1);
        });
        it('should have an email label', () =>{
            expect(wrapper.find('label').text()).toBe('Email');
        });
    });
    describe('GetUserEmail component behaviour',()=> {
        const wrapper = setup();
        it('should call onchange when user types a value', ()=> {
            wrapper.find('#email').simulate('change');
            expect(mockChange.called).toBe(true);
        });
    });
});
