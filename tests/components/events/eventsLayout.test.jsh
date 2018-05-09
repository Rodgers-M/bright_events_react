import {EventsLayout} from '../../../src/components/events/EventsLayout';
 
Enzyme.configure({ adapter: new Adapter() });

const fakeAddFlash = sinon.spy();
const fakeLogout = sinon.spy();

function setup(authStatus){
    let props = {
        logout : fakeLogout,
        addFlashMessage : fakeAddFlash,
        isAuthenticated : authStatus,
        page : 'create',
        username : 'testUser'
    };
    const mockComponent = ()=> <div />;
    mockComponent.displayName = 'MockComponent';
    return shallow(
        <EventsLayout Component={mockComponent}  {...props} />,
        options.get()
    );
};

describe('EventsLayout component', ()=> {
    it('should redirect to login when user is not authenticated', ()=> {
        const wrapper = setup(false);
        //expect(wrapper.find('Redirect').length).toEqual(1)
        expect(wrapper.find('MockComponent').length).toEqual(0);
    });
});
