import  React from 'react';
import {Form, Button, Message } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import  PropTypes from 'prop-types';
import InLineError from '../messages/InLineError';

const EventForm = (props)=> {
    
    const { data, errors, loading } = props.state;
    return(
        <div className="ui grid">
            <div className="ten twelve wide centered column">
            <Form onSubmit={props.onSubmit}loading={loading} >
                {errors.message && <Message negative>
                    <Message.Header> Something went wrong </Message.Header>
                    <p> {errors.message} </p>
                </Message>}
                <Form.Field error={!!errors.name}>
                    <label htmlFor='name' > name </label>
                    <input type='text' name='name' id='name'
                      placeholder='name'
                        value={data.name}
                        onChange={props.onChange}
                    />
                {errors.name && <InLineError message={errors.name} /> }
                </Form.Field>
                <Form.Field error={!!errors.name}>
                    <label htmlFor='description' > Description </label>
                    <textarea name='description' id='description' 
                        value={data.description}
                        onChange={props.onChange}
                     >
                    </textarea>
                {errors.description && <InLineError message={errors.description} /> }
                </Form.Field>
                <Form.Field error={!!errors.category}>
                    <label htmlFor='category' > category </label>
                    <input type='text' name='category' id='category'
                      placeholder='category'
                        value={data.category}
                        onChange={props.onChange}
                    />
                {errors.category && <InLineError message={errors.category} /> }
                </Form.Field>
                 <Form.Field error={!!errors.location}>
                    <label htmlFor='location' > location </label>
                    <input type='text' name='location' id='location'
                      placeholder='location'
                        value={data.location}
                        onChange={props.onChange}
                    />
                {errors.location && <InLineError message={errors.location} /> }
                </Form.Field>
                <Form.Field error={!!errors.date}>
                    <label htmlFor='date' > date </label>
                    <DatePicker  name='date' id='date'
                        dateFormat="YYYY/MM/DD"
                        selected ={data.event_date}
                        onChange={props.handleDate}
                        minDate={data.event_date}
                        showYearDropdown
                        scrollableYearDropdown
                        yearDropdownItemNumber={15}
                        showMonthDropdown
                    />
                {errors.date && <InLineError message={errors.date} /> }
                </Form.Field>
            <Button primary>{props.buttonText}</Button>
            </Form>
        </div>
        </div>
    );
}

EventForm.propTypes ={
    onSubmit: PropTypes.func.isRequired,
    buttonText : PropTypes.string.isRequired
};

export default EventForm;
