import React from 'react';

export default class Landing extends React.Component{
    render(){
        return(
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
                              <a href='#login'>Login</a>
                            </li>
                            <li>
                              <a href='#register'>Register</a>
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
                                Search
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                </div>
            </header>
        )
    }
}
