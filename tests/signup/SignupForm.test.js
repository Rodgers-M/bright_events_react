import '../helpers'
import ReactRouterEnzymeContext from 'react-router-enzyme-context';
import SignupForm,{validate} from '../../src/components/signup/SignupForm';
    
 
Enzyme.configure({ adapter: new Adapter() });

function setup(){
    const options = new ReactRouterEnzymeContext();
    let props = {
        submit : () => {}
    };
    return mount(
        <SignupForm {...props} />,
        options.get()
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
 
describe('signup validate function',()=>{
    it('should return an error object when the input fields have no data', ()=>{
       const  data = {
            username :'',
            email :'',
            password :'',
            confirm_password :'',
        };
        let errors = validate(data)
        expect(errors.username).toBe('username can only contain letters and numbers');
        expect(errors.email).toBe('please provide a valid email');
        expect(errors.password).toBe(`password should not have spaces, must be more than 6 characters contain
             numbers and both lower and uppercase letters`);
    });
    it('should return an error when a valid email is not supplied', ()=>{
       const  data = {
            username :'rodger',
            email :'rodger',
            password :'',
            confirm_password :'',
        };
        let errors = validate(data)
        expect(errors.email).toBe('please provide a valid email');
    });
    it('should return an error when username is not only alphanumeric', ()=>{
       const  data = {
            username :'rod*',
            email :'',
            password :'',
            confirm_password :'',
        };
        let errors = validate(data)
        expect(errors.username).toBe('username can only contain letters and numbers');
    });
    it('should return an error when provided passwords do not match', ()=>{
       const  data = {
            username :'',
            email :'',
            password :'HeLloworldwar1',
            confirm_password :'HeLloworldwar2',
        };
        let errors = validate(data)
        expect(errors.username).toBe('username can only contain letters and numbers');
    });
 });
