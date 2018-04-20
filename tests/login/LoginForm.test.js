import '../helpers'
import LoginForm, {validate} from '../../src/components/login/LoginForm';
    
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
