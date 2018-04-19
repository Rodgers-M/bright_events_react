import React, {Component} from 'react';
import  PropTypes from 'prop-types';
import {connect} from 'react-redux';
import LoginForm from './LoginForm';
import {login} from '../../redux/actions/auth';

class LoginPage extends Component{

    submit=data => this.props.login(data).then(()=> this.props.history.push("/"));

    render(){
        return(
            <div>
                <LoginForm submit={this.submit} />
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
