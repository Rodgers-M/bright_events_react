import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import InLineError from '../../messages/InLineError';

const formInputStyle = {
    color : 'white',
    fontSize : '15px',
    letterSpacing : '1px'
};

const GetNewPassword = (props) => {
    const { data, loading, errors } = props.state;
    return (
        <div id='backgroundimg'>
            <div className='ui grid'>
                <div className='four wide column centered formBackground'>
                    <Form onSubmit={ props.onSubmit } loading={ loading }>
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
                    </Form>
                </div> 
            </div> 
        </div>
    );
};


GetNewPassword.propTypes = {
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    state : PropTypes.shape({}).isRequired
};

export default GetNewPassword;
