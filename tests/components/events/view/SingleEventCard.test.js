/* global React sinon :true */
/* global mount options :true */
/* global describe :true */
/* global it :true */
/* global expect :true */
/* eslint no-undef: "error" */

import SingleEventCard from '../../../../src/components/events/view/SingleEventCard';

const mockRsvp = sinon.spy();
const mockDeleteRsvp = sinon.spy();
function setup(path){
    const pathName = path;
    const event = {
        id: 1,
        name: 'testEvent',
        description: 'event description',
        category: 'testin',
        location: 'testPlace',
        event_date : 'Thu, 03 May 2018 00:00:00 GMT',
        orgarniser : 'tester',
        rsvp_list : ['user1', 'user2']
    };
    return mount(
        <SingleEventCard
            event={ event } pathName={ pathName }
            username='username' rsvp={ mockRsvp }
            deleteRsvp={ mockDeleteRsvp }
        />,
        options.get()
    );
}

describe('SingleEventCard component', ()=> {
    it('Should display the passed event in appropriate fields',()=> {
        const wrapper = setup('/events/myEvents');
        expect(wrapper.find('div.description').text()).toBe('event description');
    });
    it('should show Edit and delete buttons when on myevents page',()=> {
        const wrapper = setup('/events/myEvents');
        expect(wrapper.find('button.ui.basic.red.button').text()).toBe('Delete');
        expect(wrapper.find('button.ui.teal.basic.button').text()).toBe('Edit');
    });
    it('should show rsvp button when in all events page',()=> {
        const wrapper = setup('/events');
        expect(wrapper.find('#rsvp').find('button').text()).toBe('RSVP');
    });
    it('should call mockRsvp when rsvp button is clicked', ()=> {
        const wrapper = setup('/events');
        expect(wrapper.find('#rsvp').find('button').simulate('click'));
        expect(mockRsvp.called).toBe(true);
    });
});
