import React from 'react';
import  PropTypes from 'prop-types';
import {Form, Button, Message } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import InLineError from '../messages/InLineError';
 
const formInputStyle = {
    color : 'white',
    fontSize : '15px',
    letterSpacing : '1px'
};
 

const SignupForm = (props) =>{
    const { data, errors, loading} = props.state;
    return(
        <div id='backgroundimg'>
            <div className='ui  grid'>
                <div className="five wide column" />
                <div className="six wide column formBackground">
                    <h1>Signup Page </h1>
                    <Form onSubmit={ props.onSubmit } loading={ loading }>
                        {errors.message && <Message negative>
                            <Message.Header> Something went wrong </Message.Header>
                            <p> {errors.message} </p>
                        </Message>}
                        <Form.Field error={ !!errors.username } >
                            <label htmlFor='username' style={ formInputStyle }> username 
                                <input type='text' name='username' id='username'
                                    placeholder='username'
                                    value={ data.username }
                                    onChange={ props.onChange }
                                />
                            </label>
                            { errors.username && <InLineError message={ errors.username } />  }
                        </Form.Field>
                        <Form.Field error={ !!errors.email } >
                            <label htmlFor='email' style={ formInputStyle }> Email 
                                <input type='email' name='email' id='email'
                                    placeholder='example@example.com'
                                    value={ data.email }
                                    onChange={ props.onChange }
                                />
                            </label>
                            { errors.email && <InLineError message={ errors.email } /> }
                        </Form.Field>
                        <Form.Field error={ !!errors.password } >
                            <label htmlFor='password' style={ formInputStyle }> password 
                                <input type='password' name='password' id='password'
                                    placeholder='Password'
                                    value={ data.password }
                                    onChange={ props.onChange }
                                />
                            </label>
                            { errors.password && <InLineError message={ errors.password } /> }
                        </Form.Field>
                        <Form.Field error={ !!errors.password }>
                            <label htmlFor='cnfpassword' style={ formInputStyle }> confirm password 
                                <input type='password' name='confirm_password' id='cnfpassword'
                                    placeholder='Password'
                                    value={ data.cnfpassword }
                                    onChange={ props.onChange }
                                />
                            </label>
                        </Form.Field>
                        <Button primary> Signup </Button>
                        <p style={ formInputStyle }>
                         Already registered?
                            <Link className='auth' to='/auth/login'>Login </Link>
                        </p>
                    </Form>
                </div>
            </div>
        </div>
    );
};

SignupForm.propTypes ={
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    state : PropTypes.shape({}).isRequired
};

export default SignupForm;
