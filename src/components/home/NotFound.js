import React from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/notfound.css';

const  NotFound = () =>(
    <div className='notfound'>
        <div className="circles">
            <p>404</p> 
            <h1>Whooops, seems you lost your way, lets get back</h1> 
            <h1>
                <Link to='/'>
                    <i className='home icon' /> Home 
                </Link>
            </h1>
            <Link to='/'>
                <span className="circle med" />
            </Link>
            <Link to='/'>
                <span className="circle small" />
            </Link>
            <Link to='/'>
                <span className="circle big" />
            </Link>
        </div>
    </div>
);

export default NotFound;
