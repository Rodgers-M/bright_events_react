import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import  Validator from 'validator';
import { submitEmail, submitPassword } from '../../../redux/actions/auth';
import { addFlashMessage } from '../../../redux/actions/flashMessages';
import { validpassword } from '../../helpers/helpers';
import GetUserEmail from './GetUserEmail';
import GetNewPassword from './GetNewPassword';

const validatePass = data => {
    const errors = {};
    if(Validator.isEmpty(data.password)) errors.password = 'Password can\'t be blank';
    if(!validpassword.validate(data.password)) errors.password = 
        'password should not have spaces, must be more than 6 characters contain numbers and both lower and uppercase letters';
    if(!Validator.equals(data.password , data.confirm_password)) errors.password
        = 'passwords do not match';
    return errors;
};

const validateEmail = data => {
    const errors = {};
    if(!Validator.isEmail(data.email) || Validator.isEmpty(data.email)) errors.email
        = 'please provide a valid email';
    return errors;
};

class ResetPasswordContainer extends Component {
    state = {
        data: {
            token : '',
            email: '',
            password: '',
            confirm_password : ''
        },
        loading: false,
        errors: {}
    }

    onChange = e => this.setState({
        data : {...this.state.data, [e.target.name]: e.target.value}
    }); 

    sendEmail = () => {
        const errors = validateEmail(this.state.data);
        this.setState({ errors });
        if(Object.keys(errors).length===0){
            this.setState({loading : true});
            this.props.submitEmail(this.state.data).then((data)=>{
                this.props.addFlashMessage({
                    type : 'success',
                    text : data.message  
                });
                this.setState({loading: false});
            }).catch(error => {
                if (error.request.status === 500){
                    this.setState({errors: {message: 'Service is unavailable, please try again later'},loading: false});
                }else{
                    this.setState({errors: error.response.data, loading : false});
                }
            });
        }
    }; 

    sendPassword = () => {
        const errors = validatePass(this.state.data);
        this.setState({ errors });
        if(Object.keys(errors).length===0){
            this.setState({loading : true});
            const data = {...this.state.data, token : this.props.match.params.token};
            this.props.submitPassword(data).then(message =>{
                this.props.addFlashMessage({
                    type : 'success',
                    text : message  
                });
                this.setState({loading: false});
                this.props.history.push('/auth/login');
            }).catch(error =>{
                if (error.request.status === 500){
                    this.setState({errors: {message: 'Service is unavailable, please try again later'},loading: false});
                }else{
                    this.setState({errors: error.response.data, loading : false});
                }
            });
        }
    };

    handleDismiss= () => {
        this.setState({
            errors : {} 
        });
    }

    render() {
        const { pathname } = this.props.location;
        return (
            <div>
                {pathname === '/auth/reset' ?
                    <GetUserEmail  
                        loading = { this.state.loading }
                        errors = { this.state.errors }
                        onChange = { this.onChange }
                        state={ this.state }
                        onSubmit={ this.sendEmail }
                        handleDismiss={ this.handleDismiss }
                    />
                    :
                    <GetNewPassword
                        loading = { this.state.loading }
                        errors = { this.state.errors }
                        onChange = { this.onChange }
                        state={ this.state }
                        onSubmit={ this.sendPassword }
                        handleDismiss={ this.handleDismiss }
                    />
                }
                
            </div>
        );
    }
}

ResetPasswordContainer.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    location: PropTypes.shape({
        pathname : PropTypes.string   
    }).isRequired,
    match : PropTypes.shape({
        params : PropTypes.shape({
            token: PropTypes.string
        })  
    }).isRequired,
    submitEmail: PropTypes.func.isRequired,
    submitPassword: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired,
};
export default connect(null, {submitPassword, submitEmail, addFlashMessage})(ResetPasswordContainer);
