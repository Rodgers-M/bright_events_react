import React from 'react'
import SearchIcon from 'react-icons/lib/fa/search'
import { Link } from 'react-router-dom'

const Landing = () => (
    <header id='backgroundimg'>
        <div className='ui inverted menu'>
            <a className='item'>
                 Bright Events
            </a>
            <div className='right menu'>
                <a className='item'>
                    <i className='tasks icon'></i> Dashboard
                </a>
                <a className='item'>
                    <i className='sign in icon'></i> Login
                </a>
                <a className='item'>
                    Logout   <i className='sign out icon'></i>
                </a>
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
                            <i className='rocket icon'></i>
                            <Link to='/auth/register'>Get Started</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </header>
    );

export default Landing;


