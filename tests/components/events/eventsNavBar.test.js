import EventsNavBar from '../../../src/components/events/EventsNavBar';
 
Enzyme.configure({ adapter: new Adapter() });
 
const fakeLogout = sinon.spy();
 
function setup(){
    let props = {
        logout : fakeLogout,
        page : 'create',
        username : 'testUser'
    };
    return mount(
        <EventsNavBar {...props} />,
        options.get()
    );
};

describe('EventsNavBar component', ()=> {
    describe('nav nar content', ()=> {
        it('should have one div with class ui inverted menu ', ()=> {
            const wrapper = setup();
            expect(wrapper.find('div.ui.inverted.menu').length).toEqual(1);
        });
        it('should have one div with class right  menu ', ()=> {
            const wrapper = setup();
            expect(wrapper.find('div.right.menu').length).toEqual(1);
        });
    });
    describe('nav bar behaviour', ()=> {
        it('should have the create events list item  marked as active', ()=> {
            const wrapper = setup();
            expect(wrapper.find('li.item.active').childAt(0).text()).toBe('Create Event');
        });
        it('should call the logout action when logout link is clicked', ()=> {
            const wrapper = setup();
            const logoutLink = wrapper.find('a.logout');
            logoutLink.simulate('click');
            expect(fakeLogout.called).toBe(true);
        });
    });
});
