/* global React :true */
/* global mount options :true */
/* global describe :true */
/* global it :true */
/* global expect :true */
/* eslint no-undef: "error" */

import SingleEventCard from '../../../../src/components/events/view/SingleEventCard';

function setup(path){
    const pathName = path;
    const event = {
        name: 'testEvent',
        description: 'event description',
        category: 'testin',
        location: 'testPlace',
        event_date : 'Thu, 03 May 2018 00:00:00 GMT',
        orgarniser : 'tester'
    };
    return mount(
        <SingleEventCard event={event} pathName={pathName} />,
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
        expect(wrapper.find('div.ui.basic.red.button').text()).toBe('Delete');
        expect(wrapper.find('div.ui.teal.basic.button').text()).toBe('Edit');
    });
    it('should show rsvp button when in all events page',()=> {
        const wrapper = setup('/events/all');
        expect(wrapper.find('#rsvp').find('button').text()).toBe('RSVP');
    });
});
