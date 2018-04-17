import React, {Component} from 'react';
import  PropTypes from 'prop-types';
import {connect} from 'react-redux';
import LoginForm from '../../forms/auth/LoginForm';
import {login} from '../../../actions/auth';

class LoginPage extends Component{

    submit=data => this.props.login(data).then(()=> this.props.history.push("/"));

    render(){
        return(
            <div>
                <div className='ui  grid'>
                  <div className="six wide column"></div>
                  <div className="four wide column"><h1> Login Page </h1></div>
                </div>
                <div className='ui  grid'>
                  <div className="five wide column"></div>
                  <div className="six wide column">
                    <LoginForm submit={this.submit} />
                  </div>
                </div>
            </div>
        );
    }
}

LoginPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    login: PropTypes.func.isRequired
}

export default connect(null, {login})(LoginPage);
