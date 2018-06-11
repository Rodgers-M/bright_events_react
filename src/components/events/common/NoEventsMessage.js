import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NoEventsMessage(props) {
    const { username, pathName } = props;
    return (
        <div style={ { marginTop : '10%', fontSize : '16px' } }>
            <div className="ui centered raised card">
                <div className="content">
                    <div className='header'>
                        Welcome to Bright Events {username}. We are happy to see you here.
                    </div>
                    {pathName === '/events/myEvents' ?
                        <p>
                            Go to <Link to='/events/create'> this page < /Link> to create your
                            first event or visit  <Link to='/events'> this < /Link>
                            to see events created by other people.
                        </p>
                        :
                        <p>
                            No recent events available, visit
                            <Link to='/events/create'> this page < /Link>
                            to create the most recent event
                        </p>
                    }
                </div>
            </div>
        </div>
    );
}

NoEventsMessage.propTypes = {
    username : PropTypes.string.isRequired,
    pathName : PropTypes.string.isRequired
};

export default NoEventsMessage;
