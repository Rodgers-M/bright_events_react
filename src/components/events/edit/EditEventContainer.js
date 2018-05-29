/* eslint new-cap: ["error", { "newIsCap": false }] */
/* eslint-disable react/no-unused-state */
import React, {Component} from 'react';
import  PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import CreateEventForm from '../EventForm';
import { updateEvent } from '../../../redux/actions/events';
import { addFlashMessage } from '../../../redux/actions/flashMessages';
import { formatDate, validateEventData } from '../../helpers/helpers';
import FlashMessagesList from '../../messages/FlashMessagesList';

export class EditEventContainer extends Component{
    state = {
        data: { 
            id : '',
            name: '',
            description: '',
            category: '',
            location: '',
            event_date: moment() 
        },
        loading: false,
        errors: {}
    };


    componentWillMount(){
        const events = this.props.events;
        // eslint-disable-next-line
        const filteredEvent = events.filter(event=>event.id == this.props.match.params.id);
        const event = filteredEvent[0];
        this.setState({
            data : {
                ...this.state.data, id: event.id, name: event.name, category: event.category,
                description: event.description, location : event.location
            } 
        });
    }

    onChange = e => this.setState({
        data : {...this.state.data, [e.target.name]: e.target.value}
    });


    onSubmit = () => {
        const errors = validateEventData(this.state.data);
        this.setState({ errors });
        if(Object.keys(errors).length===0){
            this.setState({loading : true});
            const eventDetails = {...this.state.data, event_date : formatDate(this.state.data.event_date)};
            this.props.updateEvent(eventDetails, this.state.data.id)
                .then((message) =>{
                    this.setState({loading : false});
                    this.props.addFlashMessage({
                        type : 'success',
                        text : message  
                    });
                    this.props.history.push('/events/myEvents');
                })
                .catch(err => {
                    if (err.request.status === 500){ 
                        this.setState({errors: {message: 'Service is unavailable, please try again later'},loading : false});
                    }else {
                        this.setState({errors: err.response.data, loading : false});
                    }
                });
        }
    };

    handleDismiss= () => {
        this.setState({
            errors : {} 
        });
    }
    handleDate = date => this.setState({
        data : {...this.state.data, event_date : date }
    });

    render(){
        return(
            <div >
                <FlashMessagesList />
                <CreateEventForm
                    onSubmit={this.onSubmit} 
                    onChange={this.onChange}
                    handleDate={this.handleDate}
                    handleDismiss={this.handleDismiss}
                    state={this.state}
                    buttonText='Update'
                />
            </div>
        );
    }
}



function mapStateToProps(state) {
    return {
        events :  state.events
    };
}

EditEventContainer.propTypes = {
    events: PropTypes.array.isRequired,
    updateEvent: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired
};

export default connect(mapStateToProps,{ updateEvent, addFlashMessage } )(EditEventContainer);

