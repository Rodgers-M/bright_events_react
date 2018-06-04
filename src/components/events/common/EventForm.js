import React from 'react';
import {Form, Button, Message } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import  PropTypes from 'prop-types';
import InLineError from '../../messages/InLineError';

const EventForm = (props)=> {
    
    const { data, errors, loading } = props.state;
    const minDate = moment();
    return(
        <div className="ui grid">
            <div className="ten twelve wide centered column">
                <Form onSubmit={props.onSubmit}loading={loading} >
                    {errors.message && <Message negative onDismiss={props.handleDismiss}>
                        <Message.Header> Something went wrong </Message.Header>
                        <p> {errors.message} </p>
                    </Message>}
                    <Form.Field error={!!errors.name}>
                        <label htmlFor='name' > name 
                            <input type='text' name='name' id='name'
                                placeholder='name'
                                value={data.name}
                                onChange={props.onChange}
                            />
                        </label>
                        {errors.name && <InLineError message={errors.name} /> }
                    </Form.Field>
                    <Form.Field error={!!errors.name}>
                        <label htmlFor='description' > Description 
                            <textarea name='description' id='description' 
                                value={data.description}
                                onChange={props.onChange}
                            />
                        </label>
                        {errors.description && <InLineError message={errors.description} /> }
                    </Form.Field>
                    <Form.Field error={!!errors.category}>
                        <label htmlFor='category' > category 
                            <input type='text' name='category' id='category'
                                placeholder='category'
                                value={data.category}
                                onChange={props.onChange}
                            />
                        </label>
                        {errors.category && <InLineError message={errors.category} /> }
                    </Form.Field>
                    <Form.Field error={!!errors.location}>
                        <label htmlFor='location' > location 
                            <input type='text' name='location' id='location'
                                placeholder='location'
                                value={data.location}
                                onChange={props.onChange}
                            />
                        </label>
                        {errors.location && <InLineError message={errors.location} /> }
                    </Form.Field>
                    <Form.Field error={!!errors.date}>
                        <label htmlFor='date' > date 
                            <DatePicker  name='date' id='date'
                                dateFormat="YYYY/MM/DD"
                                selected ={data.event_date}
                                onChange={props.handleDate}
                                minDate= {minDate}
                                showYearDropdown
                                scrollableYearDropdown
                                yearDropdownItemNumber={15}
                                showMonthDropdown
                            />
                        </label>
                        {errors.date && <InLineError message={errors.date} /> }
                    </Form.Field>
                    <Button primary>{props.buttonText}</Button>
                </Form>
            </div>
        </div>
    );
};

EventForm.propTypes ={
    onSubmit: PropTypes.func.isRequired,
    handleDismiss: PropTypes.func.isRequired,
    handleDate: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    buttonText : PropTypes.string.isRequired,
    state : PropTypes.shape({}).isRequired
};

export default EventForm;
