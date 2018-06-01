/* eslint react/forbid-prop-types: 0 */ 
import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SingleEventCard  from './SingleEventCard';
import {fetchMyEvents, onDelete} from '../../../redux/actions/events';
import {openModal, closeModal} from '../../../redux/actions/modals';
import EventsModal from '../EventsModal';
import EditEventContainer from '../edit/EditEventContainer';

class MyEvents extends Component {

    componentDidMount() {
        this.callFetchMyEvents();
    }

    callFetchMyEvents = () => this.props.fetchMyEvents();


    renderModal = () => {

        if (this.props.modal.open){
           const  filteredEvent = this.props.MyEvents.filter(event=>event.id == this.props.modal.id);
            const event = filteredEvent[0];
            console.log('here is the event', event);
            return(
                <EventsModal onClose={this.props.closeModal} >
                    <EditEventContainer event={event} />
                </EventsModal>
            );
        }
        return null;
    };

    render() {
        return (
            <div className='ui three cards' style={{overFlow: 'hidden'}}>
                {this.props.MyEvents.map(event =>
                    <SingleEventCard
                        event={event}
                        pathName={this.props.location.pathname}
                        onDelete={this.props.onDelete}
                        key={event.id}
                        openModal={this.props.openModal}
                    />
                )}
                        {this.renderModal()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        MyEvents:  state.events,
        modal: state.modal
    };
}
MyEvents.propTypes = {
    MyEvents :PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    fetchMyEvents : PropTypes.func.isRequired,
    location : PropTypes.shape({
        pathname : PropTypes.string.isRequired
    }).isRequired
};

export default connect(mapStateToProps, {fetchMyEvents, onDelete, openModal, closeModal})(MyEvents);
