import React from 'react';
import {connect} from 'react-redux';
import  PropTypes from 'prop-types';
import FlashMessage from './FlashMessage';
import {deleteFlashMessage} from '../../redux/actions/flashMessages';

class FlashMessagesList extends React.Component {
    render(){
        const messages = this.props.messages.map(message =>
        <FlashMessage key={message.id} message={message} deleteFlashMessage={this.props.deleteFlashMessage} />
        );
        return(
            <div className='ui grid'>
                <div className="five wide column"></div>
                <div className='six wide column'>
                    {messages}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        messages : state.flashMessages
    }
}

FlashMessagesList.propTypes = {
    messages : PropTypes.array.isRequired,
    deleteFlashMessage : PropTypes.func.isRequired
}

export default connect(mapStateToProps , {deleteFlashMessage})(FlashMessagesList);
