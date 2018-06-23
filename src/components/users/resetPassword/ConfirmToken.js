import React, { Component } from 'react';
import { connect } from 'react-redux';
import  PropTypes from 'prop-types';
import { confirmToken } from '../../../redux/actions/auth';
import { addFlashMessage } from '../../../redux/actions/flashMessages';
import CustomLoader from './CustomLoader';

class ConfirmToken extends Component {

    componentDidMount(){
        const token = this.props.match.params.token.slice(2, -1);
        this.props.confirmToken(token).then(data => {
            this.props.addFlashMessage({
                type : 'success',
                text : data.message  
            });
            this.props.history.push(`/auth/newpass/${token}`);
        }).catch(error => {
            if (error.request.status === 500){
                this.props.addFlashMessage({
                    type : 'warning',
                    text : 'service unavailable, please try again later'
                });
                this.props.history.push('/auth/login');
            }else{
                this.props.addFlashMessage({
                    type : 'warning',
                    text : error.response.data.message
                });
                this.props.history.push('/auth/reset');
            }
        });
    }
    render() {
        return (
            <div id='backgroundimg' >
                <div className='ui grid' >
                    <div className='six wide column centered formBackground'>
                        <CustomLoader />
                    </div>
                </div> 
            </div>
        );
    }
}

ConfirmToken.propTypes = {
    confirmToken: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired,
    match : PropTypes.shape({
        params : PropTypes.shape({
            token: PropTypes.string
        })  
    }).isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
};

export default connect(null, { addFlashMessage, confirmToken })(ConfirmToken);
