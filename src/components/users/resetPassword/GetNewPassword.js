import React from 'react';
import { Form, Button, Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import FlashMessagesList from '../../messages/FlashMessagesList';
import InLineError from '../../messages/InLineError';

const formInputStyle = {
    color : 'white',
    fontSize : '15px',
    letterSpacing : '1px'
};

export const GetNewPassword = (props) => {
    const { data, loading, errors } = props.state;
    return (
        <div id='backgroundimg'>
            <div className='ui grid'>
                <div className='five wide column centered formBackground'>
                    <h2>Reset Password </h2>
                    <FlashMessagesList />
                    <Form onSubmit={ props.onSubmit } loading={ loading }>
                        {errors.message && <Message negative onDismiss={ props.handleDismiss }>
                            <Message.Header> Something went wrong </Message.Header>
                            <p> {errors.message} </p>
                        </Message>}
                        <Form.Field error={ !!errors.password } >
                            <label htmlFor='password' style={ formInputStyle }> new password 
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
                        <Button primary>Reset</Button>
                    </Form>
                </div> 
            </div> 
        </div>
    );
};


GetNewPassword.propTypes = {
    onChange: PropTypes.func.isRequired,
    handleDismiss: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    state : PropTypes.shape({}).isRequired
};

export default GetNewPassword;
