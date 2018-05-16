import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SingleEventCard  from './SingleEventCard';
import {fetchEvents} from '../../../redux/actions/events';

class EventList extends Component {
    state = {
        event : {name : 'holla event', description : 'holla there',
        category : 'greeting', location : 'there', event_date : 'leo', created_by : 'me'} 
    };

    componentDidMount() {
        this.callFetchEvent();
    };

    callFetchEvent = () => this.props.fetchEvents()

    render() {
        return (
            <div className='ui three cards'>
                <SingleEventCard event={this.state.event} />
                <SingleEventCard event={this.state.event} />
                <SingleEventCard event={this.state.event} />
                <SingleEventCard event={this.state.event} />
                <SingleEventCard event={this.state.event} />
                <SingleEventCard event={this.state.event} />
                <SingleEventCard event={this.state.event} />
                <SingleEventCard event={this.state.event} />
                <SingleEventCard event={this.state.event} />
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
    fetchEvents : PropTypes.func.isRequired
};

export default connect(mapStateToProps, {fetchEvents})(EventList);
