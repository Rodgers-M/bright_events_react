import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SingleEventCard  from './SingleEventCard';
import {fetchMyEvents, onDelete} from '../../../redux/actions/events';
import {openModal,openConfirmModal, closeModal} from '../../../redux/actions/modals';
import EventsModal from '../EventsModal';
import EditEventContainer from '../edit/EditEventContainer';
import NoEventsMessage from '../NoEventsMessage';
import ConfirmDelete from './ConfirmDelete';

class MyEvents extends Component {

    componentDidMount() {
        this.callFetchMyEvents();
    }

    callFetchMyEvents = () => this.props.fetchMyEvents();


    renderModal = () => {
        const {modal,myEvents,closeModal, onDelete} = this.props;
        if (modal.open && modal.type === 'edit'){
            const  filteredEvent = myEvents.filter(event=>event.id == modal.id);
            const event = filteredEvent[0];
            return(
                <EventsModal onClose={closeModal} >
                    <EditEventContainer event={event} />
                </EventsModal>
            );
        }else if(modal.open && modal.type === 'confirm') {
            return (
                <EventsModal onClose={closeModal}>
                    <ConfirmDelete
                        closeModal={closeModal}
                        onDelete={onDelete}
                        eventId={modal.id}
                    />
                </EventsModal>
            );
        }
        return null;
    };

    render() {
        const {myEvents,location,openModal,openConfirmModal} = this.props;
        return (
            <div className='ui three cards'>
                {myEvents.length !== 0 ?
                    myEvents.map(event =>
                        <SingleEventCard
                            event={event}
                            pathName={location.pathname}
                            key={event.id}
                            openModal={openModal}
                            openConfirmModal={openConfirmModal}
                        />
                    )
                    : <NoEventsMessage username={this.props.username}/>                }
                {this.renderModal()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        myEvents:  state.events,
        modal: state.modal
    };
}
MyEvents.propTypes = {
    myEvents :PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    fetchMyEvents : PropTypes.func.isRequired,
    onDelete : PropTypes.func.isRequired,
    openModal : PropTypes.func.isRequired,
    closeModal : PropTypes.func.isRequired,
    openConfirmModal : PropTypes.func.isRequired,
    location : PropTypes.shape({
        pathname : PropTypes.string.isRequired
    }).isRequired,
    username: PropTypes.string.isRequired,
    modal: PropTypes.shape({}).isRequired
};

export default connect(mapStateToProps, {fetchMyEvents, onDelete, openModal,openConfirmModal, closeModal})(MyEvents);
