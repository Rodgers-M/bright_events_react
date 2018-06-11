import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EventsModal extends Component {

    onClose = () => {
        this.props.onClose();
    }

    render() {
        return (
            <div className='custom-modal-wrapper'>
                <div className='custom-modal'>
                    <button className="close" onClick={ this.onClose }>&times;</button>
                    <div className=''>{ this.props.children }</div>
                </div> 
            </div>
        );
    }
}

EventsModal.propTypes = {
    onClose : PropTypes.func.isRequired,
    children : PropTypes.shape({}).isRequired
};
export default EventsModal;
