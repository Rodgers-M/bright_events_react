/* eslint react/forbid-prop-types: 0 */
import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SingleEventCard  from './SingleEventCard';
import { fetchEvents, rsvp } from '../../../redux/actions/events';

class EventList extends Component {

    componentDidMount() {
        this.callFetchEvents();
    }

    callFetchEvents = () => this.props.fetchEvents();

    render() {
        return (
            <div className='ui three cards'>
                {this.props.allEvents.map(event =>
                    <SingleEventCard
                        rsvp={this.props.rsvp}
                        event={event}
                        pathName={this.props.location.pathname}
                        key={event.id}
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
    rsvp: PropTypes.func.isRequired,
    location: PropTypes.shape({
        pathname : PropTypes.string.isRequired
    }).isRequired
};

export default connect(mapStateToProps, { fetchEvents, rsvp })(EventList);
