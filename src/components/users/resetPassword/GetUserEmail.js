import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Form, Button, Message } from 'semantic-ui-react';
import InLineError from '../../messages/InLineError';
import FlashMessagesList from '../../messages/FlashMessagesList';

const formInputStyle = {
    color : 'white',
    fontSize : '15px',
    letterSpacing : '1px'
};

const GetUserEmail = (props) => {
    const { data, errors, loading} = props.state;
    return (
        <div id='backgroundimg'>
            <div className='ui grid'>
                <div className='five wide column centered formBackground'>
                    <h3> Enter your email to reset passorwd </h3>
                    <FlashMessagesList />
                    <Form onSubmit={ props.onSubmit } loading={ loading }>
                        {errors.message && <Message negative onDismiss={ props.handleDismiss }>
                            <Message.Header> Something went wrong </Message.Header>
                            <p> {errors.message} </p>
                        </Message>}
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
                        <Button primary>Submit</Button>
                        <p style={ formInputStyle }>
                            <Link className='auth'  to='/auth/login'>Back to Login?</Link>
                        </p>
                    </Form>
                </div>
            </div> 
        </div>
    );
};


GetUserEmail.propTypes = {
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    handleDismiss: PropTypes.func.isRequired,
    state : PropTypes.shape({}).isRequired
};

export default GetUserEmail;
