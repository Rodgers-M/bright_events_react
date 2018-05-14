/* eslint new-cap: ["error", { "newIsCap": false }] */
/* eslint-disable react/no-unused-state */
import React, {Component} from 'react';
import  PropTypes from 'prop-types';
import {connect} from 'react-redux';
import  Validator from 'validator';
import LoginForm from './LoginForm';
import {login} from '../../redux/actions/auth';
import FlashMessagesList from '../messages/FlashMessagesList';

export const validate = data => {
    const errors = {};
    if(Validator.isEmpty(data.username)) errors.username = 'username can\'t be blank';
    if(Validator.isEmpty(data.password)) errors.password = 'Password can\'t be blank';
    return errors;
};
 
class LoginContainer extends Component{

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
            this.props.login(this.state.data)
                .then(()=>{
                    const {from} = this.props.location.state || {from: {pathname: '/events/create'}}
                    this.props.history.push(from);
                })
                .catch(err=> {
                    if (err.request.status === 500){ 
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
                <LoginForm 
                    onSubmit={this.onSubmit}
                    onChange={this.onChange}
                    state ={this.state}
                />
                <FlashMessagesList />
            </div>
        );
    }
}

LoginContainer.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,

    login: PropTypes.func.isRequired
};

export default connect(null, {login})(LoginContainer);
