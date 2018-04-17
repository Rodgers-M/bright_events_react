import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/notfound.css';

class NotFound extends Component {

    render(){
        return(
            <div className='notfound'>
                    <div className="circles">
                      <p>404</p> 
                      <h1>Whooops, seems you lost your way, lets get back</h1> 
                        <h1>
                             <Link to='/'>
                               <i className='home icon' /> Home 
                            </Link>
                        </h1>
                      <span className="circle med"></span>
                      <span className="circle small"></span>
                    </div>
            </div>
        );
    }
    
}

export default NotFound;
