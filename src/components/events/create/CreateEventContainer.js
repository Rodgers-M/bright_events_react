/* eslint new-cap: ["error", { "newIsCap": false }] */
/* eslint-disable react/no-unused-state */
import React, {Component} from 'react';
import  PropTypes from 'prop-types';
import  Validator from 'validator';
import {connect} from 'react-redux';
import moment from 'moment';
import CreateEventForm from '../EventForm';
import {create} from '../../../redux/actions/events';
import {addFlashMessage} from '../../../redux/actions/flashMessages';

const validate=(data) => {
    const errors = {};
    if(Validator.isEmpty(data.name)) errors.name = 'name can\'t be blank';
    if(Validator.isEmpty(data.description)) errors.description = 'description can\'t be blank';
    if(Validator.isEmpty(data.category)) errors.category = 'category can\'t be blank';
    if(Validator.isEmpty(data.location)) errors.location = 'location can\'t be blank';
    return errors;
};
const formatDate = eventDate => {
    const date = new Date(eventDate);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return [year, month, day].join('-');
};

export class CreateEventContainer extends Component{
    state = {
        data: { 
            name: '',
            description: '',
            category: '',
            location: '',
            event_date: moment() 
        },
        loading: false,
        errors: {}
    };

    onChange = e => this.setState({
        data : {...this.state.data, [e.target.name]: e.target.value}
    });

    onSubmit = () => {
        const errors = validate(this.state.data);
        this.setState({ errors });
        if(Object.keys(errors).length===0){
            this.setState({loading : true});
            const eventDetails = {...this.state.data, event_date : formatDate(this.state.data.event_date)};
            this.props.create(eventDetails)
                .then(() => {
                    this.setState({loading : false});
                    this.props.addFlashMessage({
                        type : 'success',
                        text : 'event created successfully' 
                    });
                    this.props.history.push('/events/create');
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
                <CreateEventForm
                    onSubmit={this.onSubmit} 
                    onChange={this.onChange}
                    handleDate={this.handleDate}
                    handleDismiss={this.handleDismiss}
                    state={this.state}
                    buttonText='Create'
                />
            </div>
        );
    }
}

CreateEventContainer.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    create: PropTypes.func.isRequired,
    addFlashMessage : PropTypes.func.isRequired,
};

export default connect(null,{create, addFlashMessage} )(CreateEventContainer);

