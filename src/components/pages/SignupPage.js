import React, {Component} from 'react';
import  PropTypes from 'prop-types';
import {connect} from 'react-redux';
import SignupForm from '../forms/SignupForm';
import {signup} from '../../actions/auth';
import {addFlashMessage} from '../../actions/flashMessages';

class SignupPage extends Component {

submit=data => this.props.signup(data).then(()=>{ 
    this.props.addFlashMessage({
        type : 'success',
        text : 'registration successful, now login'
    })
    this.props.history.push("/auth/login")
});

    render(){
        return(
            <div>
                <div className='ui  grid'>
                  <div className="six wide column"></div>
                  <div className="four wide column"><h1>Signup Page </h1></div>
                </div>
                <div className='ui  grid'>
                  <div className="five wide column"></div>
                  <div className="six wide column">
                    <SignupForm submit={this.submit} />
                  </div>
                </div>
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
}

export default connect(null, {signup, addFlashMessage})(SignupPage);
