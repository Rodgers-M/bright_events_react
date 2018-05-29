import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SingleEventCard = (props) => {
    const { event, pathName, onDelete, rsvp, handleErrors, username } = props;
    const { name, description, location, orgarniser } = event;
    const url = `/events/${event.id}/edit`;

    const eventDate = event.event_date.split('00')[0];
    const handleDelete = () => {
        onDelete(event.id);
    };
    const host = orgarniser === username ? 'Me' : orgarniser;
    const handleRsvp = () => {
        rsvp(event.id).catch(()=> handleErrors());
    };
    return (
        <div className='ui card'>
            <div className='content'>
                <div className='header' style={{textTransform: 'capitalize'}}>{name}</div> 
            </div>
            <div className='content'>
                <h4 className="ui sub header">Host : {host}</h4>
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
                        <button className="ui green basic button">Guests</button>
                        <div className='ui basic teal button'>
                            <Link className='ui' to={url}>Edit </Link>
                        </div>
                        <button onClick={handleDelete} className="ui red basic button">Delete</button>
                    </div>
                </div>
                :
                <div className='extra content' id='rsvp'>
                    {orgarniser === username ? 
                        <p>Your are the Host of this event</p>
                        :
                        <span>
                        {event.rsvp_list.includes(username)?
                            <div className='ui two buttons'>
                            <div className="ui green basic button">Attending</div>
                            <button  className="ui brown basic button">Cancel RSVP</button>
                            </div>
                            :
                            <button onClick={handleRsvp} className="ui teal basic button">
                            <i className="calendar plus outline icon" />
                            RSVP
                            </button>
                        }
                        </span>
                    }
                </div>
            }
        </div>
    );
};


SingleEventCard.propTypes = {
    event: PropTypes.shape({}).isRequired,
    pathName: PropTypes.string.isRequired,
    onDelete: PropTypes.func,
    handleErrors: PropTypes.func,
    rsvp: PropTypes.func
};

export default SingleEventCard;
