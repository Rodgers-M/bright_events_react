/* global React :true */
/* global shallow :true */
/* global describe :true */
/* global it :true */
/* global expect beforeEach:true */
/* eslint no-undef: "error" */

import configureMockStore from 'redux-mock-store';
import EventList from '../../../../src/components/events/view/EventList';

const mockStore = configureMockStore();

describe('EventList container', ()=> {
    let wrapper;
    let store;

    beforeEach(()=> {
        const location = {pathname : '/events/myEvents'};
        const initialSatate = {events : [{
            name: 'testEvent',
            description: 'event description',
            category: 'testin',
            location: 'testPlace',
            event_date : 'Thu, 03 May 2018 00:00:00 GMT',
            orgarniser : 'tester'
        },]};
        store = mockStore(initialSatate);
        wrapper = shallow(<EventList store={store} location={location}/>);
    });

    it('it should have one event in props', ()=> {
        console.log(wrapper.props());
        expect(wrapper.props().allEvents.length).toEqual(1);
    });
    it('it should have one test event', ()=> {
        expect(wrapper.props().allEvents[0].name).toBe('testEvent');
    });

});
