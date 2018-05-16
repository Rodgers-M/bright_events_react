import React from 'react';
import PropTypes from 'prop-types';

const SingleEventCard = ({event, pathName}) => {
    const {name, description, location} = event;
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
            {pathName === '/events/myEvents' ?
                <div className='extra content'>
                    <div className='ui three buttons'>
                        <div className='ui basic green button'>Guests</div>
                        <div className='ui basic teal button'>Edit</div>
                        <div className='ui basic red button'>Delete</div>
                    </div>
                </div>
                :
                <div className='extra content'>
                    <button className="ui teal basic button">
                        <i className="calendar plus outline icon" />
                        RSVP
                    </button>
                    we are at {pathName}
                </div>
            }
        </div>
    );
};


SingleEventCard.propTypes = {
    event : PropTypes.shape({}).isRequired,
    pathName : PropTypes.string.isRequired
};

export default SingleEventCard;
