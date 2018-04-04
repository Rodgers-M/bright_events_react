import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import  PropTypes from 'prop-types';
import * as actions from '../../actions/auth';

const Landing = ({isAuthenticated, logout }) => (
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
                {!isAuthenticated? /*if a user is not authenticated, show login button*/
                <li className='item'>
                    <Link to='/auth/login'>
                    <i className='sign in icon' />
                     Login  
                    </Link>
                </li>
                 ://else show a logout button
                <li className='item'>
                    <button onClick={()=> logout()}>
                        Logout   <i className='sign out icon' />
                    </button>
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
                            <Link to='/auth/register'>Get Started</Link>
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

function mapStateToProps(state){
    return{
        isAuthenticated : !!state.user.access_token
    }
}

export default connect(mapStateToProps, {logout : actions.logout })(Landing);

