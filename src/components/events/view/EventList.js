/* eslint react/forbid-prop-types: 0 */
import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {addFlashMessage} from '../../../redux/actions/flashMessages';
import SingleEventCard  from './SingleEventCard';
import { fetchEvents, rsvp, deleteRsvp } from '../../../redux/actions/events';
import NoEventsMessage from '../common/NoEventsMessage';
import SearchComponent from '../common/SearchComponent';
import NoResults from '../common/NoResults';

export class EventList extends Component {

    state={
        search: ''
    }

    componentDidMount() {
        this.props.fetchEvents();
    }

    handleErrors = () => this.props.addFlashMessage({
        type : 'warning',
        text : 'you already reserved a seat' 
    }) 

    updateSearch = event =>{
        this.setState({ search: event.target.value });
    }

    render() {
        const{ allEvents, location, username, rsvp, deleteRsvp } = this.props;
        let filteredEvents = allEvents.filter(event => {
            return event.name.toLowerCase().includes(this.state.search) ||
               event.category.toLowerCase().includes(this.state.search) ||
               event.location.toLowerCase().includes(this.state.search);
        });
        return (
            <div>
                <SearchComponent onChange={ this.updateSearch } />
                {allEvents.length === 0?
                    //show a message if no events exist in the app
                    <NoEventsMessage username={ username } pathName={ location.pathname }/>
                    :filteredEvents.length !== 0 ?
                    //filteredEvents holds either all events or search results
                        <div className='ui three cards'>
                            {filteredEvents.map(event =>
                                <SingleEventCard
                                    rsvp={ rsvp }
                                    deleteRsvp={ deleteRsvp }
                                    event={ event }
                                    pathName={ location.pathname }
                                    key={ event.id }
                                    dismissMessage={ this.handleDismiss }
                                    handleErrors={ this.handleErrors }
                                    username={ username }
                                />
                            )}
                        </div>
                        //if the search did not match any events
                        : <NoResults /> 
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
