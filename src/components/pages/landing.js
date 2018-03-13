import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => (
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
                <li className='item'>
                    <Link to='/auth/login'>
                    <i className='sign in icon' />
                     Login  
                    </Link>
                </li>
                <li className='item'>
                    Logout   <i className='sign out icon' />
                </li>
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

export default Landing;

