import React from 'react';
import PropTypes from 'prop-types';

const SingleEventCard = ({event, pathName}) => {
    const {name, description, location, orgarniser} = event;
    const eventDate = event.event_date.split('00')[0];
    return (
        <div className='ui card'>
            <div className='content'>
                <div className='header'>{name}</div> 
            </div>
            <div className='content'>
                <h4 className="ui sub header">Host : {orgarniser}</h4>
                <div className='meta'>
                    <span>Location : {location}</span> <br/>
                    <span>Date : {eventDate}</span> 
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
                <div className='extra content' id='rsvp'>
                    <button className="ui teal basic button">
                        <i className="calendar plus outline icon" />
                        RSVP
                    </button>
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
