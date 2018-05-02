import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import jwtDecode from 'jwt-decode';
import  PropTypes from 'prop-types';
import * as actions from '../../redux/actions/auth';

export const Landing = ({isAuthenticated, logout }) => (
    <header id='backgroundimg'>
        <div className='ui inverted menu'>
            <li className='item'>
                 Bright Events
            </li>
            <div className='right menu'>
                <li className='item'>
                    <Link to='/events/dashboard'>
                       <i className='tasks icon' /> Dashborad 
                    </Link>
                </li>
                {!isAuthenticated?
                    console.log("status is", isAuthenticated)
                    : console.log("no way")
                }
                {!isAuthenticated? /*if a user is not authenticated, show login icon*/
                <li className='item'>
                    <Link to='/auth/login'>
                    <i className='sign in icon' />
                     Login  
                    </Link>
                </li>
                 ://else show a logout icon
                <li className='item'>
                    <a href="#logout" className='logout'  onClick={()=> logout()}>
                        Logout   <i className='sign out icon' />
                    </a>
                </li>}
            </div>
        </div>
        <div className='text-box'>
            <div className='ui container'>
                <div className='ui grid'>
                    <div className='column row centered'>
                      <h2>Welcome to Bright Events. You can create and view latest events.</h2>
                    </div>
                    <div className='three wide column centered'>
                        <button className='ui icon button'>
                            <i className='rocket icon' />
                            <Link to='/auth/signup'>Get Started</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </header>
    );

Landing.propTypes = {
    isAuthenticated : PropTypes.bool.isRequired,
    logout : PropTypes.func.isRequired
};

const isTokenExpired = token => {
    let currentTime = new Date() / 1000;
    if(jwtDecode(token).exp < currentTime){
        return true;
    }else{
        return false;
    }
}

function mapStateToProps(state){
    return{
        isAuthenticated : !!state.user.access_token && !isTokenExpired(state.user.access_token)
    }
}

export default connect(mapStateToProps, {logout : actions.logout })(Landing);

