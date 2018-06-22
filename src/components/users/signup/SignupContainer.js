/* eslint new-cap: ["error", { "newIsCap": false }] */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import  PropTypes from 'prop-types';
import { connect } from 'react-redux';
import  Validator from 'validator';
import SignupForm from './SignupForm';
import { signup } from '../../../redux/actions/auth';
import { addFlashMessage } from '../../../redux/actions/flashMessages';
import { validpassword } from '../../helpers/helpers';

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
        'password should not have spaces, must be more than 6 characters contain numbers and both lower and uppercase letters';
    if(!Validator.equals(data.password , data.confirm_password)) errors.password
        = 'passwords do not match';
    return errors;
};
 
class SignupPage extends Component {

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
            this.props.signup(this.state.data).then(data=>{
                this.props.addFlashMessage({
                    type : 'success',
                    text : data.message  
                });
                this.props.history.push('/auth/login');
            })
                .catch(err=> {
                    if (String(err).includes('Network Error')){ 
                        this.setState({errors: {message: 'Service is unavailable, please try again later'},loading : false});
                    }else {
                        this.setState({errors: err.response.data, loading : false});
                    }
                });
        }
    };

    render(){
        return(
            <div>
                <SignupForm
                    onSubmit={ this.onSubmit }
                    onChange={ this.onChange } 
                    state={ this.state }
                />
            </div>
        );
    }
}

SignupPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    signup: PropTypes.func.isRequired,
    addFlashMessage : PropTypes.func.isRequired
};

export default connect(null, {signup, addFlashMessage})(SignupPage);

