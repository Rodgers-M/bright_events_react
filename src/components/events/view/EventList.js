/* eslint react/forbid-prop-types: 0 */
import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {addFlashMessage} from '../../../redux/actions/flashMessages';
import SingleEventCard  from './SingleEventCard';
import { fetchEvents, rsvp, deleteRsvp } from '../../../redux/actions/events';
import NoEventsMessage from '../NoEventsMessage';

class EventList extends Component {

    componentDidMount() {
        this.callFetchEvents();
    }

    callFetchEvents = () => this.props.fetchEvents();

    handleErrors = () => this.props.addFlashMessage({
        type : 'warning',
        text : 'you already reserved a seat' 
    }) 

    render() {
        const{ allEvents, location, username, rsvp, deleteRsvp } = this.props;
        return (
            <div>
                {allEvents.length !== 0 ?
                    <div className='ui three cards'>
                        {this.props.allEvents.map(event =>
                            <SingleEventCard
                                rsvp={rsvp}
                                deleteRsvp={deleteRsvp}
                                event={event}
                                pathName={location.pathname}
                                key={event.id}
                                dismissMessage={this.handleDismiss}
                                handleErrors={this.handleErrors}
                                username={username}
                            />
                        )}
                    </div>
                    : <NoEventsMessage username={username} pathName={location.pathname}/>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        allEvents :  state.events
    };
}
EventList.propTypes = {
    allEvents: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    fetchEvents: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired,
    rsvp: PropTypes.func.isRequired,
    deleteRsvp: PropTypes.func.isRequired,
    location: PropTypes.shape({
        pathname : PropTypes.string.isRequired
    }).isRequired,
    username: PropTypes.string.isRequired
};

export default connect(mapStateToProps, { fetchEvents, rsvp,deleteRsvp, addFlashMessage })(EventList);
