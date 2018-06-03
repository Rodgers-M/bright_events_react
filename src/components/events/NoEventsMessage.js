import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NoEventsMessage(props) {
    return (
        <div >
            <div className="ui message">
                <div className="header">
                Welcome to Bright Events {props.username}
                </div>
                <p> You have no events of your own yet</p>
                <p> You can go to <Link to='/events/create'> Create < /Link> to Create Events</p>
            </div>            
        </div>
    );
}

NoEventsMessage.propTypes = {
    username : PropTypes.string.isRequired
};

export default NoEventsMessage;
