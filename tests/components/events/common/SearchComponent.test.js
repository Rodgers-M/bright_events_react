/* global sinon :true */
/* global React :true */
/* global mount :true */
/* global describe :true */
/* global Enzyme Adapter :true */
/* global it :true */
/* global expect :true */
/* eslint no-undef: "error" */
import SearchComponent from '../../../../src/components/events/common/SearchComponent';

Enzyme.configure({ adapter: new Adapter() });

const mockOnchange = sinon.spy();

function setup(){
    const props = {
        onChange : mockOnchange
    };
    return mount(
        <SearchComponent {...props} />
    );
}

describe('Search component', ()=> {
    it('should have 3 div elements', ()=>{
        const wrapper = setup();
        expect(wrapper.find('div').length).toEqual(3);
    });
    it('should have one input element', ()=> {
        const wrapper = setup();
        expect(wrapper.find('input').length).toEqual(1);
    });
});
