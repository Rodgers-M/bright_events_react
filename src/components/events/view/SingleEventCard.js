import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { Popover, OverlayTrigger } from 'react-bootstrap';

const SingleEventCard = (props) => {
    const { event, pathName, rsvp,deleteRsvp, handleErrors, username } = props;
    const { name, description, location, orgarniser, category } = event;

    const eventDate = event.event_date.split('00')[0];
    const host = orgarniser === username ? 'Me' : orgarniser;

    const handleRsvp = () => {
        rsvp(event.id).catch(()=> handleErrors());
    };

    const handleDeleteRsvp = () => {
        deleteRsvp(event.id).catch(()=> handleErrors());
    };

    const title =`Your Guests for this event (${event.rsvp_list.length})`;
    const popoverLeft = (
        <iPopover id="popover-trigger-hover-focus" title={title}>
            {event.rsvp_list.length !==0?
                event.rsvp_list.map(name => {
                    const id = shortid.generate();
                    return <div key={id}><span >{name}</span><br /> </div>;
                } )
                :
                <strong> No guests yet</strong> 
            }
        </Popover>
    );

    return (
        <div className='ui card'>
            <div className='content'>
                <div className='header' style={{textTransform: 'capitalize'}}>{name}</div> 
            </div>
            <div className='content'>
                {pathName !== '/events/myEvents' ?
                    <h4 className="ui sub header">Host : {host}</h4>
                    : null
                }
                <div className='meta'>
                    <span>Date : {eventDate}</span> <br/>
                    <span>Location : {location}</span> <br/>
                    <span>Category : {category}</span> 
                </div>
                <div className='description'>
                    <p>{description}</p>
                </div>
            </div>
            {pathName === '/events/myEvents' ?
                <div className='extra content'>
                    <div className='ui three buttons'>
                        <OverlayTrigger
                            trigger={['hover', 'focus']}
                            rootClose placement='top'
                            overlay={popoverLeft}>
                            <button className='ui green basic button'>
                            Guests
                            </button>
                        </OverlayTrigger>
                        <button onClick={()=>props.openModal(event.id)}
                            className='ui teal basic button'>
                            Edit
                        </button>
                        <button onClick={()=> props.openConfirmModal(event.id)}
                            className='ui red basic button'>
                            Delete
                        </button>
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
                                    <button onClick={handleDeleteRsvp} className='fluid ui brown basic button'>
                                        <i className="times icon" />
                                        Cancel RSVP
                                    </button>
                                </div>
                                :
                                <button onClick={handleRsvp} className="fluid ui teal basic button">
                                    <i className="heart icon" />
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
    username: PropTypes.string.isRequired,
    handleErrors: PropTypes.func,
    openConfirmModal: PropTypes.func,
    openModal: PropTypes.func,
    rsvp: PropTypes.func,
    deleteRsvp: PropTypes.func
};

export default SingleEventCard;
