/* global React :true */
/* global shallow sinon :true */
/* global describe :true */
/* global it :true */
/* global expect :true */
/* eslint no-undef: "error" */

import { EventList } from '../../../../src/components/events/view/EventList';


function setup(events){
    const mockFetchEvents = sinon.spy();
    const  mockRsvp = sinon.spy();
    const mockDeleteRsvp = sinon.spy();
    const mockFlash = sinon.spy();
    const location = { pathname : '/events/myEvents' };

    return  shallow(<EventList
        allEvents={ events }
        location={ location }
        rsvp={ mockRsvp }
        deleteRsvp={ mockDeleteRsvp }
        fetchEvents={ mockFetchEvents }
        addFlashMessage={ mockFlash }
        username = 'testuser'
    />);
}

describe('EventList container', ()=> {
    describe('when events are available', ()=> {
        const events = [{
            name: 'testEvent',
            description: 'event description',
            category: 'testin',
            location: 'testPlace',
            event_date : 'Thu, 03 May 2018 00:00:00 GMT',
            orgarniser : 'tester'
        }];

        const wrapper = setup(events);
        it('it should have 2 divs : wrapper and events card wrapper', ()=> {
            expect(wrapper.find('div').length).toEqual(2);
        });

    });
    describe('when event list is empty', ()=> {
        const events = [];
        const wrapper = setup(events);
        it('should render only one div: wrapper with NoEventsMessage', ()=> {
            expect(wrapper.find('div').length).toEqual(1);
        });

    });
});
