import React from 'react';
import PropTypes from 'prop-types';

function ConfirmDelete(props) {
    const{closeModal, onDelete, eventId} = props;
    return (
        <div className='ui grid'>
            <div className='ten wide column'>
                <p>are you sure you want to delete this event?</p>
            </div>
            <div className='four wide column'>
                <div className='ui buttons'>
                    <button onClick={closeModal} className='ui primary button'>Cancel</button>
                    <div className="or" />
                    <button onClick={()=>onDelete(eventId)} className='ui red button'>Delete</button>
                </div>
            </div>
        </div>
    );
}


ConfirmDelete.propTypes = {
    closeModal: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    eventId: PropTypes.string.isRequired
};

export default ConfirmDelete;
