/* global React :true */
/* global mount :true */
/* global describe :true */
/* global Enzyme Adapter sinon options :true */
/* global it :true */
/* global expect :true */
/* eslint no-undef: "error" */

import { LoginContainer } from '../../../src/components/users/login/LoginContainer';
import configureStore from '../../../src/redux/store/configureStore';

Enzyme.configure({ adapter: new Adapter() });

const login = sinon.spy();
const store = configureStore();

function setup(){
    return mount(
        <Provider store={store}>
            <LoginContainer login={login} />
        <Provider />,
        options.get()
    );
}

describe('loginContainer component', ()=> {
    it('should render a login form', ()=> {
        const wrapper = setup();  
        expect(wrapper.find('form').length).toEqual(1);
    });
    it('should set username in state onchange', ()=> {
        const wrapper = setup();
        console.log(wrapper.props().children('type'));
        const usernameInput =  wrapper.find('#username');
        usernameInput.value = 'rodger';
    });
   
});

