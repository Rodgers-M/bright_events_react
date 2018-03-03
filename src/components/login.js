import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    render(){
        return(
            <div id='backgroundimg'>
                <div className='container forms'>
                    <div className='col-md-5 col-md-offset-3 backgrnd'>
                        <h1 className='text-center'> Login </h1>
                        <form>
                            <div className='form-group row'>
                                <label className='col-sm-3'>
                                     <h4>Username</h4>
                                </label>
                                <div className='col-sm-9'>
                                    <input className='form-control' name='username' type='text'
                                        placeholder='Enter username' />
                                </div>
                            </div>
                            <div className='form-group row'>
                                <label className='col-sm-3'>
                                     <h4>Password</h4>
                                </label>
                                <div className='col-sm-9'>
                                    <input className='form-control' name='password' type='password'
                                        placeholder='Enter your password' />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-4 col-md-offset-4'>
                                    <button type='submit' className='center btn btn-success
                                        btn-block '>
                                    Submit
                                    </button>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-7 col-md-offset-3'>
                                    <h4>
                                        Not yet registered?
                                        <Link to='/auth/register'> Sign Up </Link>
                                    </h4>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-7 col-md-offset-3'>
                                    <h4>
                                       Forgot password? 
                                        <Link to='/auth/resetpass'> Reset </Link>
                                    </h4>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    
}
