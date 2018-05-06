import  React from 'react';
import {Link} from 'react-router-dom';

const EventsNavBar = (props) => {
    
    const {page, username, logout} = props;
    return (
        <div className='ui inverted menu'>
            <li className='item'>
                 Bright Events
            </li>
            <li className='item'>
                <Link to='/'>
                    <i className='home icon' /> Home 
                </Link>
            </li>
            <li className={page==="create"?'item active':'item'}>
                <Link to='/events/create'>
                    Create Event
                </Link>
            </li>
            
            <li className={page==="myEvents"?'item active':'item'}>
                <Link to='/events/myEvents'>
                    My Events
                </Link>
            </li>
            <li className={page==="allEvents"?'item active':'item'}>
                <Link to='/events'>
                    View All Events
                </Link>
            </li>
            <div className='right menu'>
                <li className='item'>
                   <i className='user icon' /> {username} 
                </li>
                <li className='item'>
                   <Link to="/" className='logout'  onClick={()=> logout()}>
                       Logout   <i className='sign out icon' />
                   </Link>
                </li>
            </div>
    </div>
)};
 
export default EventsNavBar;
