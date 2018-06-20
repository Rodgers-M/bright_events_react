
/* global React :true */
/* global shallow Enzyme Adapter :true */
/* global describe :true */
/* global it :true */
/* global sinon :true */
/* global expect :true */
/* eslint no-undef: "error" */

import { GetNewPassword } from '../../../src/components/users/resetPassword/GetNewPassword';

Enzyme.configure({ adapter: new Adapter() });

const mockSubmit = sinon.spy();
const mockChange = sinon.spy();

function setup(){
    const props = {
        state : {
            data : {
                password : '',
                confirm_password : '',
            },
            loading : false,
            errors : {}
        },
        onSubmit : mockSubmit,
        onChange : mockChange
    };
    return shallow(
        <GetNewPassword { ...props } />
    );
}

describe('GetNewPassword component', ()=> {
    describe('Component content',()=> {
        const wrapper = setup();
        it('should have two password input fields', ()=> {
            expect(wrapper.find('input').length).toEqual(2);
        });
        it('should have one submit button', ()=> {
            expect(wrapper.find('Button').length).toBe(1);
        });
    });
    describe('Component behaviour', ()=> {
        it('should call onsubmit when form is submitted', ()=>{
            const wrapper = setup();
            wrapper.find('Form').simulate('submit');
            expect(mockSubmit.called).toBe(true);
        });
    });
});
