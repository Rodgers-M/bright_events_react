/* global React :true */
/* global mount :true */
/* global describe :true */
/* global Enzyme Adapter options :true */
/* global it :true */
/* global expect :true */
/* eslint no-undef: "error" */
import NoEventsMessage from '../../../../src/components/events/common/NoEventsMessage';

Enzyme.configure({ adapter: new Adapter() });

function setup(){
    const props = {
        username : 'sample',
        pathName : '/events/myEvents'
    };
    return mount(
        <NoEventsMessage { ...props } />,
        options.get()
    );
}

describe('NoEventsMessage component', ()=> {
    it('should have 4 div elements', ()=>{
        const wrapper = setup();
        expect(wrapper.find('div').length).toEqual(4);
    });
    it('should have only one p element at a time', ()=>{
        const wrapper = setup();
        expect(wrapper.find('p').length).toEqual(1);
    });
});
