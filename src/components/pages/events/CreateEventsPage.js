import React, {Component} from 'react';
import  PropTypes from 'prop-types';
import {connect} from 'react-redux';
import CreateEventForm from '../../forms/events/CreateEventForm';
import {create} from '../../../actions/events';
import {addFlashMessage} from '../../../actions/flashMessages';

class CreateEventPage extends Component{

    submit=data => this.props.create(data).then(()=> {
        this.props.addFlashMessage({
            type : 'success',
            text : 'event created succesful'
        })
        this.props.history.push("/")})

    render(){
        return(
            <div>
                <div className='ui  grid'>
                  <div className="six wide column"></div>
                  <div className="four wide column"><h1>Create Event</h1></div>
                </div>
                <div className='ui  grid'>
                  <div className="five wide column"></div>
                  <div className="six wide column">
                    <CreateEventForm submit={this.submit} />
                  </div>
                </div>
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
