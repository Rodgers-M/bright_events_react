import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SingleEventCard  from './SingleEventCard';
import {fetchEvents} from '../../../redux/actions/events';

class EventList extends Component {

    componentDidMount() {
        this.callFetchEvent();
    };

    callFetchEvent = () => this.props.fetchEvents();

    render() {
        return (
            <div className='ui three cards'>
                {this.props.allEvents.map(event =>
                    <SingleEventCard
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
    allEvents :PropTypes.array.isRequired,
    fetchEvents : PropTypes.func.isRequired,
    location : PropTypes.shape({
        pathname : PropTypes.string.isRequired
    }).isRequired
};

export default connect(mapStateToProps, {fetchEvents})(EventList);
