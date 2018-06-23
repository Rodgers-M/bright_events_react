import React from 'react';
import { connect } from 'react-redux';
import  PropTypes from 'prop-types';
import FlashMessage from './FlashMessage';
import { deleteFlashMessage } from '../../redux/actions/flashMessages';

export const FlashMessagesList = (props) => {
    const messages = props.messages.map(message =>
        <FlashMessage key={ message.id } message={ message } deleteFlashMessage={ props.deleteFlashMessage } />
    );
    return(
        <div style= { {position : 'sticky',textAlign: 'center', top: '5%', zIndex: 3} } >
            { messages }
        </div>
    );
};

function mapStateToProps(state){
    return {
        messages : state.flashMessages
    };
}

FlashMessagesList.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    deleteFlashMessage : PropTypes.func.isRequired
};

export default connect(mapStateToProps , { deleteFlashMessage })(FlashMessagesList);
