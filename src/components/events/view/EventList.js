/* eslint react/forbid-prop-types: 0 */
import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {addFlashMessage} from '../../../redux/actions/flashMessages';
import SingleEventCard  from './SingleEventCard';
import { fetchEvents, rsvp } from '../../../redux/actions/events';

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
        return (
            <div className='ui three cards'>
                {this.props.allEvents.map(event =>
                    <SingleEventCard
                        rsvp={this.props.rsvp}
                        event={event}
                        pathName={this.props.location.pathname}
                        key={event.id}
                        dismissMessage={this.handleDismiss}
                        handleErrors={this.handleErrors}
                        username={this.props.username}
                    />
                )}
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
    location: PropTypes.shape({
        pathname : PropTypes.string.isRequired
    }).isRequired,
    username: PropTypes.string.isRequired
};

export default connect(mapStateToProps, { fetchEvents, rsvp, addFlashMessage })(EventList);
