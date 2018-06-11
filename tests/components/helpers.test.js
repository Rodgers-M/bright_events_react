/* global describe :true */
/* global it :true */
/* global expect :true */
/* eslint no-undef: "error" */
import {formatDate, validateEventData} from '../../src/components/helpers/helpers';


describe('Helper functions', ()=> {
    describe('formatDate function', ()=> {
        it('should return YYY-MM-DD when passed a date', ()=> {
            const formatedDate = formatDate('"Thu, 03 May 2018 00:00:00 GMT"');
            expect(formatedDate).toEqual('2018-5-3');
        });
    });
    describe('validateEventData', ()=> {
        const data = {
            name : '',
            description : 'some description',
            location : 'testing',
            category : ''
        };
        const errors = validateEventData(data);
        it('should return errors if the data is not valid', ()=> {
            expect(Object.keys(errors).length).toEqual(2);
        });
        it('should return an error meassage for the  errored field', ()=> {
            expect(errors.name).toBe('name can\'t be blank');
        });
    });
});
