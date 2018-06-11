import  React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import  PropTypes from 'prop-types';
import EventsNavBar from './EventsNavBar';
import * as actions from '../../../redux/actions/auth';
import {addFlashMessage} from '../../../redux/actions/flashMessages';
import FlashMessagesList from '../../messages/FlashMessagesList';
import { isTokenExpired, getUsername } from '../../helpers/helpers';

export const EventsLayout = ({component : Component, ...rest}) =>{
    const {page,isAuthenticated,username, logout, addFlashMessage} = rest;
    return(
        <Route { ...rest } render={ matchProps => isAuthenticated ? (
            <div >
                <EventsNavBar page={ page } username={ username } logout={ logout }/>
                <div className='ui grid' style={ { backgroundColor : '#f1f1f1' } }>
                    <div className="twelve wide centered column" style={ { marginTop:'4%' } }>
                        <FlashMessagesList />
                        <Component  { ...matchProps } username={ username }/>   
                    </div>
                </div>
            </div>
        )
            :
            (addFlashMessage({ type : 'warning', text : 'please login to continue' }),
            <Redirect to={ { pathname: '/auth/login', state: { from: rest.location } } }/> ) }/>);
};
 
EventsLayout.propTypes = {
    isAuthenticated : PropTypes.bool.isRequired,
    logout : PropTypes.func.isRequired,
    component : PropTypes.func.isRequired,
    addFlashMessage : PropTypes.func.isRequired
};

function mapStateToProps(state){
    return{
        isAuthenticated : !!state.user.access_token && !isTokenExpired(state.user.access_token),
        username : getUsername(state.user.access_token)
    };
}
export default connect(mapStateToProps,{logout : actions.logout, addFlashMessage })(EventsLayout);
