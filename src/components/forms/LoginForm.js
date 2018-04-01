import  React, {Component} from 'react';
import  Validator from 'validator';
import {Form, Button, Message } from 'semantic-ui-react';
import  PropTypes from 'prop-types';
import InLineError from '../messages/InLineError';

class LoginForm extends Component{
    state = {
        data: { 
            username: '',
            password: ''
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
            this.props.submit(this.state.data)
            .catch(err=> this.setState({errors : err.response.data}));
        }
    };

    validate=(data) => {
        const errors = {};
        if(Validator.isEmpty(data.username)) errors.username = 'username can\'t be blank';
        if(Validator.isEmpty(data.password)) errors.password = 'Password can\'t be blank';
        return errors;
    }

    render(){
        const { data, errors } = this.state;
        return(
            <Form onSubmit={this.onSubmit}>
                {errors.message && <Message negative>
                    <Message.Header> Something went wrong </Message.Header>
                    <p> {errors.message} </p>
                </Message>}
                <Form.Field error={!!errors.username}>
                    <label htmlFor='username' > username </label>
                    <input type='username' name='username' id='username'
                        placeholder='username'
                        value={data.username}
                        onChange={this.onChange}
                    />
                {errors.email && <InLineError message={errors.email} /> }
                </Form.Field>
                <Form.Field error={!!errors.password}>
                    <label htmlFor='password' > password </label>
                    <input type='password' name='password' id='password'
                        placeholder='Password'
                        value={data.password}
                        onChange={this.onChange}
                    />
                {errors.password && <InLineError message={errors.password} /> }
                </Form.Field>
            <Button primary> Login </Button>
            </Form>
        );
    }
}

LoginForm.propTypes ={
    submit: PropTypes.func.isRequired
};

export default LoginForm;
