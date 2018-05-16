import React from 'react';
import PropTypes from 'prop-types';

const SingleEventCard = ({event}) => {
    const {name, description, category, location} = event;
    return (
        <div className='ui card'>
            <div className='content'>
                <div className='header'>{name}</div> 
            </div>
            <div className='content'>
                <h4 className="ui sub header">Host {event.created_by}</h4>
                <div className='meta'>
                    <span>Location {location}</span> 
                    <span>Date {event.event_date}</span> 
                </div>
                <div className='description'>
                    <p>{description}</p>
                </div>
            </div>
            <div className='extra content'>
                <button className="ui teal basic button">
                    <i className="calendar plus outline icon" />
                    RSVP
                </button>
            </div>
        </div>
    );
};


SingleEventCard.propTypes = {
    event : PropTypes.shape({}).isRequired
};

export default SingleEventCard;
