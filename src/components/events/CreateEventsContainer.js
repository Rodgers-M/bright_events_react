import React, {Component} from 'react';
import  PropTypes from 'prop-types';
import {connect} from 'react-redux';
import CreateEventForm from '../../forms/events/CreateEventForm';
import {create} from '../../../actions/events';
import {addFlashMessage} from '../../../actions/flashMessages';

   const validate=(data) => {
        const errors = {};
        if(Validator.isEmpty(data.name)) errors.name = 'name can\'t be blank';
        if(Validator.isEmpty(data.description)) errors.description = 'descriotion can\'t be blank';
        if(Validator.isEmpty(data.category)) errors.category = 'category can\'t be blank';
        if(Validator.isEmpty(data.location)) errors.location = 'location can\'t be blank';
        return errors;
    }

class CreateEventPage extends Component{
    state = {
        data: { 
            name: '',
            description: '',
            category: '',
            location: '',
            event_date: '' 
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
            this.props.create(this.state.data)
            .then(()=> {
                this.props.addFlashMessage({
                    type : 'success',
                    text : 'event created succesful'
                })
                this.props.history.push("/")
            })
            .catch(err=> this.setState({errors : err.response.data, loading : false }));
        }
    };

    render(){
        return(
            <div >
                <CreateEventForm submit={this.onSubmit} />
            </div>
        );
    }
}

CreateEventPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    create: PropTypes.func.isRequired,
    addFlashMessage : PropTypes.func.isRequired
}

export default connect(null,{create, addFlashMessage} )(CreateEventPage);
