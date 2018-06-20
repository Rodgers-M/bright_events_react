import React, {Component} from 'react';
import  PropTypes from 'prop-types';
import {connect} from 'react-redux';
import SignupForm from './SignupForm';
import {signup} from '../../redux/actions/auth';
import {addFlashMessage} from '../../redux/actions/flashMessages';

class SignupPage extends Component {

submit=data => this.props.signup(data).then((data)=>{ 
    this.props.addFlashMessage({
        type : 'success',
        text : data.message
    })
    this.props.history.push("/auth/login")
});

    render(){
        return(
            <div>
              <SignupForm submit={this.submit} />
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
