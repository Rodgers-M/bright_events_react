/* eslint new-cap: ["error", { "newIsCap": false }] */
/* eslint-disable react/no-unused-state */
import React, {Component} from 'react';
import  PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import CreateEventForm from '../common/EventForm';
import { updateEvent } from '../../../redux/actions/events';
import { addFlashMessage } from '../../../redux/actions/flashMessages';
import { formatDate, validateEventData } from '../../helpers/helpers';

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


    updateState = () =>{
        const event = this.props.event;
        this.setState({
            data : {
                ...this.state.data, id: event.id, name: event.name, category: event.category,
                description: event.description, location : event.location
            } 
        });
    }

    componentDidMount(){
        this.updateState();
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


EditEventContainer.propTypes = {
    event: PropTypes.shape({}).isRequired,
    updateEvent: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired
};

export default connect(null,{ updateEvent, addFlashMessage } )(EditEventContainer);

