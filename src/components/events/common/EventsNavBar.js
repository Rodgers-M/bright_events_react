import  React from 'react';
import {Link} from 'react-router-dom';
import  PropTypes from 'prop-types';

const EventsNavBar = (props) => {
    
    const {page, username, logout} = props;
    const sticky = {
        position : 'fixed',
        zIndex : '9',
        width : '100%',
        paddingTop : '1%',
    };
    return (
        <div className='ui inverted menu' style={sticky}>
            <li className='item'>
                <Link to='/'>
                    <i className='home icon' /> Bright Events
                </Link>
            </li>
            <li className={page==='create'?'item active':'item'}>
                <Link to='/events/create'>
                    Create Event
                </Link>
            </li>
            
            <li className={page==='myEvents'?'item active':'item'}>
                <Link to='/events/myEvents'>
                    My Events
                </Link>
            </li>
            <li className={page==='allEvents'?'item active':'item'}>
                <Link to='/events'>
                    View All Events
                </Link>
            </li>
            <div className='right menu'>
                <li className='item'>
                    <i className='user icon' /> {username} 
                </li>
                <li className='item'>
                    <Link to='/' className='logout'  onClick={()=> logout()}>
                       Logout   <i className='sign out icon' />
                    </Link>
                </li>
            </div>
        </div>
    );
};

EventsNavBar.propTypes = {
    logout : PropTypes.func.isRequired,
    page : PropTypes.string.isRequired,
    username : PropTypes.string.isRequired
};
 
export default EventsNavBar;
