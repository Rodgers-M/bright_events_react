import  React, {Component} from 'react';
import  Validator from 'validator';
import {Form, Button, Message } from 'semantic-ui-react';
import  PropTypes from 'prop-types';
import InLineError from '../../messages/InLineError';

class CreateEventForm extends Component{
    state = {
        data: { 
            name: '',
            description: '',
            category: '',
            location: '',
            event_date: '' 
        },
        loading: false,
        errors: {}
    };

    onChange = e => this.setState({
        data : {...this.state.data, [e.target.name]: e.target.value}
        });

    onSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if(Object.keys(errors).length===0){
            this.setState({loading : true});
            this.props.submit(this.state.data)
            .catch(err=> this.setState({errors : err.response.data, loading : false }));
        }
    };

    validate=(data) => {
        const errors = {};
        if(Validator.isEmpty(data.name)) errors.name = 'name can\'t be blank';
        if(Validator.isEmpty(data.description)) errors.description = 'descriotion can\'t be blank';
        if(Validator.isEmpty(data.category)) errors.category = 'category can\'t be blank';
        if(Validator.isEmpty(data.location)) errors.location = 'location can\'t be blank';
        return errors;
    }

    render(){
        const { data, errors, loading } = this.state;
        return(
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
        );
    }
}

CreateEventForm.propTypes ={
    submit: PropTypes.func.isRequired
};

export default CreateEventForm;
