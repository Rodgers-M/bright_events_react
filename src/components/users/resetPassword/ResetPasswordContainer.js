import React, { Component} from 'react';
import PropTypes from 'prop-types';
import GetUserEmail from './GetUserEmail';

class ResetPasswordContainer extends Component {
    state = {
        data: {
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

    render() {
        return (
            <div>
                <GetUserEmail  
                    loading = { this.state.loading }
                    onChange = { this.onChange }
                    state={ this.state }
                />
                
            </div>
        );
    }
}
export default ResetPasswordContainer;
