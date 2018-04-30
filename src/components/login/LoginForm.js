import  React  from 'react';
import {Form, Button, Message } from 'semantic-ui-react';
import  PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import InLineError from '../messages/InLineError';
import FlashMessagesList from '../messages/FlashMessagesList';

var formInputStyle = {
    color : 'white',
    fontSize : '15px',
    letterSpacing : '1px'
};

const LoginForm = (props) =>{

        const { data, errors, loading } = props.state;
        return(
            <div id='backgroundimg'>
                <div className='ui  grid'>
                  <div className="five wide column"></div>
                  <div className="six wide column formBackground" >
                        <h1>Login Page</h1>
                    <FlashMessagesList />
                    <Form onSubmit={props.onSubmit} loading={loading} >
                        {errors.message && <Message negative>
                            <Message.Header> Something went wrong </Message.Header>
                            <p> {errors.message} </p>
                        </Message>}
                        <Form.Field error={!!errors.username}>
                            <label htmlFor='username' style={formInputStyle}> username </label>
                            <input type='text' name='username' id='username'
                                placeholder='username'
                                value={data.username}
                                onChange={props.onChange}
                            />
                        {errors.username && <InLineError message={errors.username} /> }
                        </Form.Field>
                        <Form.Field error={!!errors.password} >
                            <label htmlFor='password' style={formInputStyle}> password </label>
                            <input type='password' name='password' id='password'
                                placeholder='Password'
                                value={data.password}
                                onChange={props.onChange}
                            />
                        {errors.password && <InLineError message={errors.password} /> }
                        </Form.Field>
                    <Button type="submit" primary> Login </Button>
                    <p style={formInputStyle}>Don't have an account? <Link className='auth'  to='/auth/signup'>Register here </Link></p>
                    </Form>
                  </div>
                </div>
            </div>
        );
    }

LoginForm.propTypes ={
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    state : PropTypes.object.isRequired
};

export default LoginForm;
