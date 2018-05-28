/* eslint react/forbid-prop-types: 0 */ 
import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SingleEventCard  from './SingleEventCard';
import {fetchMyEvents, onDelete} from '../../../redux/actions/events';

class MyEvents extends Component {

    componentDidMount() {
        this.callFetchMyEvents();
    }

    callFetchMyEvents = () => this.props.fetchMyEvents();

    render() {
        return (
            <div className='ui three cards'>
                {this.props.MyEvents.map(event =>
                    <SingleEventCard
                        event={event}
                        pathName={this.props.location.pathname}
                        onDelete={this.props.onDelete}
                        key={event.id}
                    />
                )}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        MyEvents :  state.events
    };
}
MyEvents.propTypes = {
    MyEvents :PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    fetchMyEvents : PropTypes.func.isRequired,
    location : PropTypes.shape({
        pathname : PropTypes.string.isRequired
    }).isRequired
};

export default connect(mapStateToProps, {fetchMyEvents, onDelete})(MyEvents);
