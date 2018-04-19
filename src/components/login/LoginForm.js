import  React, {Component} from 'react';
import  Validator from 'validator';
import {Form, Button, Message } from 'semantic-ui-react';
import  PropTypes from 'prop-types';
import InLineError from '../messages/InLineError';

export const validate = data => {
        const errors = {};
        if(Validator.isEmpty(data.username)) errors.username = 'username can\'t be blank';
        if(Validator.isEmpty(data.password)) errors.password = 'Password can\'t be blank';
        return errors;
    }

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
        const { data, errors, loading } = this.state;
        return(
            <div >
                <div className='ui  grid'>
                  <div className="six wide column"></div>
                  <div className="four wide column"><h1>Login Page</h1></div>
                </div>
                <div className='ui  grid'>
                  <div className="five wide column"></div>
                  <div className="six wide column">
                    <Form onSubmit={this.onSubmit}loading={loading}>
                        {errors.message && <Message negative>
                            <Message.Header> Something went wrong </Message.Header>
                            <p> {errors.message} </p>
                        </Message>}
                        <Form.Field error={!!errors.username}>
                            <label htmlFor='username' > username </label>
                            <input type='text' name='username' id='username'
                                placeholder='username'
                                value={data.username}
                                onChange={this.onChange}
                            />
                        {errors.username && <InLineError message={errors.username} /> }
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
                  </div>
                </div>
            </div>
        );
    }
}

LoginForm.propTypes ={
    submit: PropTypes.func.isRequired
};

export default LoginForm;
