import React, {Component} from 'react';
import  PropTypes from 'prop-types';
import  Validator from 'validator';
import {Form, Button, Message } from 'semantic-ui-react';
import InLineError from '../messages/InLineError';
import passwordValidator from 'password-validator';

const validpassword = new passwordValidator();
validpassword.is().min(6)
.is().max(20)
.has().uppercase()
.has().lowercase()
.has().digits()
.has().not().spaces()

export const validate=(data) => {
        const errors = {};
        if(data.username.length < 3) errors.username = 'username must be at least 3 characters';
        if(Validator.isNumeric(data.username)) errors.username = 'username can\'t be numbers';
        if(!Validator.isAlphanumeric(data.username)) errors.username =
            'username can only contain letters and numbers';
        if(!Validator.isEmail(data.email) || Validator.isEmpty(data.email)) errors.email
            = 'please provide a valid email';
        if(Validator.isEmpty(data.password)) errors.password = 'Password can\'t be blank';
        if(!validpassword.validate(data.password)) errors.password = 
            `password should not have spaces, must be more than 6 characters contain
             numbers and both lower and uppercase letters`;
        if(!Validator.equals(data.password , data.confirm_password)) errors.password
            = 'passwords do not match'
        return errors;
    }
 
class SignupForm extends Component {
    state = {
        data : {
            username : '',
            email : '',
            password : '',
            confirm_password : '',
        },
        loading : false,
        errors : {}
    }

    onChange = e => this.setState({
        data : {...this.state.data, [e.target.name]: e.target.value}
        });

    onSubmit = () => {
        const errors = validate(this.state.data);
        this.setState({ errors });
        if(Object.keys(errors).length===0){
            this.setState({loading : true});
            this.props.submit(this.state.data)
            .catch(err=> {
                if (err.request.status === 500){ 
                    this.setState({errors: {message: "Service is unavailable, please try again later"},loading : false})
                }else {
                this.setState({errors: err.response.data, loading : false})
            }
        });
        }
    };


    render(){
        const { data, errors, loading} = this.state;
        return(
            <div >
                <div className='ui  grid'>
                  <div className="six wide column"></div>
                  <div className="four wide column"><h1>Signup Page </h1></div>
                </div>
                <div className='ui  grid'>
                  <div className="five wide column"></div>
                  <div className="six wide column">
                    <Form onSubmit={this.onSubmit} loading={loading}>
                        {errors.message && <Message negative>
                            <Message.Header> Something went wrong </Message.Header>
                            <p> {errors.message} </p>
                        </Message>}
                        <Form.Field error={!!errors.username} >
                            <label htmlFor='username' > username </label>
                            <input type='text' name='username' id='username'
                                placeholder='username'
                                value={data.username}
                                onChange={this.onChange}
                            />
                        {errors.username && <InLineError message={errors.username} /> }
                        </Form.Field>
                        <Form.Field error={!!errors.email} >
                            <label htmlFor='email' > Email </label>
                            <input type='email' name='email' id='email'
                                placeholder='example@example.com'
                                value={data.email}
                                onChange={this.onChange}
                            />
                        {errors.email && <InLineError message={errors.email} /> }
                        </Form.Field>
                        <Form.Field error={!!errors.password} >
                            <label htmlFor='password' > password </label>
                            <input type='password' name='password' id='password'
                                placeholder='Password'
                                value={data.password}
                                onChange={this.onChange}
                            />
                        {errors.password && <InLineError message={errors.password} /> }
                        </Form.Field>
                        <Form.Field error={!!errors.password}>
                            <label htmlFor='cnfpassword' > confirm password </label>
                            <input type='password' name='confirm_password' id='cnfpassword'
                                placeholder='Password'
                                value={data.cnfpassword}
                                onChange={this.onChange}
                            /> 
                        </Form.Field>
                    <Button primary> Signup </Button>
                    </Form>
                  </div>
                </div>
            </div>
        );
    }
}

SignupForm.propTypes ={
    submit: PropTypes.func.isRequired
};

export default SignupForm;
