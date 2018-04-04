import React, {Component} from 'react';
import  PropTypes from 'prop-types';
import  Validator from 'validator';
import {Form, Button } from 'semantic-ui-react';
import InLineError from '../messages/InLineError';

class SignupForm extends Component {
    state = {
        data : {
            username : '',
            email : '',
            password : '',
            cnfpassword : '',
            loading : false
        }
    }

    onChange = e => this.setState({
        data : {...this.state.data, [e.target.name]: e.target.value}
        });

    onSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        this.setState({loading : true});
        if(Object.keys(errors).length===0){
            this.props.submit(this.state.data)
            .catch(err=> this.setState({errors : err.response.data, loading : false }));
        }
    };

    validate=(data) => {
        const errors = {};
        if(Validator.isEmpty(data.username)) errors.username = 'username can\'t be blank';
        if(!Validator.isEmail(data.email) || Validator.isEmpty(data.email)) errors.email = 'please provide a valid email';
        if(Validator.isEmpty(data.password)) errors.password = 'Password can\'t be blank';
        return errors;
    }

    render(){
        const { data} = this.state;
        return(
            <Form onSubmit={this.onSubmit}>
                <Form.Field >
                    <label htmlFor='username' > username </label>
                    <input type='text' name='username' id='username'
                        placeholder='username'
                        value={data.username}
                        onChange={this.onChange}
                    />
                </Form.Field>
                <Form.Field >
                    <label htmlFor='email' > Email </label>
                    <input type='email' name='email' id='email'
                        placeholder='example@example.com'
                        value={data.email}
                        onChange={this.onChange}
                    />
                </Form.Field>
                <Form.Field >
                    <label htmlFor='password' > password </label>
                    <input type='password' name='password' id='password'
                        placeholder='Password'
                        value={data.password}
                        onChange={this.onChange}
                    />
                </Form.Field>
                <Form.Field >
                    <label htmlFor='cnfpassword' > confirm password </label>
                    <input type='password' name='cnfpassword' id='cnfpassword'
                        placeholder='Password'
                        value={data.cnfpassword}
                        onChange={this.onChange}
                    />
                </Form.Field>
            <Button primary> Signup </Button>
            </Form>
        );
    }
}

SignupForm.propTypes ={
    submit: PropTypes.func.isRequired
};

export default SignupForm;
