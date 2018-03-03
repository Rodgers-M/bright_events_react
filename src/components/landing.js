import React from 'react'
import SearchIcon from 'react-icons/lib/fa/search'
import { Link } from 'react-router-dom'

const Landing = () => (
    <header id='backgroundimg'>
        <nav className='navbar navbar-inverse'>
            <div className='container-fluid'>
                <div className='navbar-header'>
                    <a className='navbar-brand' href='#brand'>
                        Bright Events
                    </a>
                </div>
                <ul className='navbar-right navbar-nav'></ul>
                <ul className='nav navbar-nav navbar-right'>
                    <li>
                      <Link to='auth/login'>Login</Link>
                    </li>
                    <li>
                      <Link to='auth/register'>Register</Link>
                    </li>
                </ul>
            </div>
        </nav>
        <div className='text-box'>
            <div className='row'>
               <h3 className='text-center'>
                Welcome to Bright Events. You can create and view latest events.
               </h3>
            </div>
            <div className='row'>
              <div className='col-md-4 col-md-offset-4'>
                <div className='input-group'>
                  <input type='text' className='form-control' placeholder='event name'
                    name='search'/>
                  <span className='input-group-btn'>
                    <button className='btn btn-search' type='button' id='search'>
                     <SearchIcon />   Search
                    </button>
                  </span>
                </div>
              </div>
            </div>
        </div>
    </header>
    );

export default Landing;


