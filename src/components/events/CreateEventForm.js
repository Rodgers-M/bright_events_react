import  React, {Component} from 'react';
import  Validator from 'validator';
import {Form, Button, Message } from 'semantic-ui-react';
import  PropTypes from 'prop-types';
import InLineError from '../../messages/InLineError';

const CreateEventForm = (props)=> {

        const { data, errors, loading } = props.state;
        return(
            <div>
                <div className='ui  grid'>
                  <div className="six wide column"></div>
                  <div className="four wide column"><h1>Create Event</h1></div>
                </div>
                <div className='ui  grid'>
                  <div className="five wide column"></div>
                  <div className="six wide column">
                    <Form onSubmit={this.onSubmit}loading={loading}>
                        {errors.message && <Message negative>
                            <Message.Header> Something went wrong </Message.Header>
                            <p> {errors.message} </p>
                        </Message>}
                        <Form.Field error={!!errors.name}>
                            <label htmlFor='name' > name </label>
                            <input type='text' name='name' id='name'
                              placeholder='name'
                                value={data.name}
                                onChange={this.onChange}
                            />
                        {errors.name && <InLineError message={errors.name} /> }
                        </Form.Field>
                        <Form.Field error={!!errors.name}>
                            <label htmlFor='description' > Description </label>
                            <textarea name='description' id='description' 
                                value={data.description}
                                onChange={this.onChange}
                             >
                            </textarea>
                        {errors.description && <InLineError message={errors.description} /> }
                        </Form.Field>
                        <Form.Field error={!!errors.category}>
                            <label htmlFor='category' > category </label>
                            <input type='text' name='category' id='category'
                              placeholder='category'
                                value={data.category}
                                onChange={this.onChange}
                            />
                        {errors.category && <InLineError message={errors.category} /> }
                        </Form.Field>
                         <Form.Field error={!!errors.location}>
                            <label htmlFor='location' > location </label>
                            <input type='text' name='location' id='location'
                              placeholder='location'
                                value={data.location}
                                onChange={this.onChange}
                            />
                        {errors.location && <InLineError message={errors.location} /> }
                        </Form.Field>
                        <Form.Field error={!!errors.date}>
                            <label htmlFor='date' > date </label>
                            <input type='date' date='date' id='date'
                                value={data.date}
                                onChange={this.onChange}
                            />
                        {errors.date && <InLineError message={errors.date} /> }
                        </Form.Field>
                    <Button primary>Create</Button>
                    </Form>
                  </div>
                </div>
            </div>
        );
}

CreateEventForm.propTypes ={
    submit: PropTypes.func.isRequired
};

export default CreateEventForm;
