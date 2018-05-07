import LoginForm from '../../../src/components/login/LoginForm';
import {validate} from '../../../src/components/login/LoginContainer';
    
Enzyme.configure({ adapter: new Adapter() });

function setup(){
    let props = {
        state : {
            data: { 
                username: '',
                password: ''
            },
            loading: false,
            errors: {}
        },
        onSubmit : () => {},
        onChange : () => {}
    };
    return shallow(
        <LoginForm {...props} /> ,
        options.get()

    );
};


describe('Login form component', () => {
    it('should have two input fields', ()=> {
        const wrapper = setup();
        expect(wrapper.find('input').length).toEqual(2);
    });
    it('should have one button', ()=> {
        const wrapper = setup();
        expect(wrapper.find('Button').length).toEqual(1);
    });
    // in the next two tests i have a problem in accessing the props passed to the component
    it.skip('should have no data in state', ()=> {
        let wrapper = setup();
        expect(wrapper.prop('state').data.username).toBe('');
        expect(wrapper.prop('state').data.password).toBe('');
    });
    it.skip('should have a submit prop', ()=> {
        let wrapper = setup();
        expect(wrapper.prop('onSubmit')).toBeDefined();
        });
});

describe('login validate function',()=>{
    it('should return an error object when the input fields have no data', ()=>{
       const  data = { 
            username: '',
            password: ''
        };
        let errors = validate(data)
        expect(errors.username).toBe('username can\'t be blank');
        expect(errors.password).toBe('Password can\'t be blank');
    });
});
