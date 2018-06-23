import  React  from 'react';
import { Form, Button, Message } from 'semantic-ui-react';
import  PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import InLineError from '../../messages/InLineError';
import FlashMessagesList from '../../messages/FlashMessagesList';

const formInputStyle = {
    color : 'white',
    fontSize : '15px',
    letterSpacing : '1px'
};

const LoginForm = (props) =>{

    const { data, errors, loading } = props.state;
    return(
        <div id='backgroundimg'>
            <div className='ui  grid'>
                <div className="five wide column" />
                <div className="six wide column formBackground" >
                    <h1>Login</h1>
                    <FlashMessagesList />
                    <Form onSubmit={ props.onSubmit } loading={ loading } >
                        {errors.message && <Message negative onDismiss={ props.handleDismiss }>
                            <Message.Header> Something went wrong </Message.Header>
                            <p> {errors.message} </p>
                        </Message>}
                        <Form.Field error={ !!errors.username }>
                            <label htmlFor='username' style={ formInputStyle }> username 
                                <input type='text' name='username' id='username'
                                    placeholder='username'
                                    value={ data.username }
                                    onChange={ props.onChange }
                                />
                            </label>
                            { errors.username && <InLineError message={ errors.username } /> }
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
                        <Button type="submit" primary> Login </Button>
                        <p style={ formInputStyle }>
                            Do not have an account?
                            <Link className='auth'  to='/auth/signup'>Register here </Link>
                        </p>
                        <p style={ formInputStyle }>
                            Forgot Password?
                            <Link className='auth'  to='/auth/reset'>Reset here</Link>
                        </p>
                    </Form>
                </div>
            </div>
        </div>
    );
};

LoginForm.propTypes ={
    onSubmit: PropTypes.func.isRequired,
    handleDismiss: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    state : PropTypes.shape({}).isRequired
};

export default LoginForm;
