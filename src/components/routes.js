import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from './app'
import LoginForm from './login'

export default (
    <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/auth/login' component={LoginForm} />
        <Route exact path='/auth/register' render={()=>(
        <h1> You are about to register </h1>)
        }/>
        <Route exact path='*' render={()=>(
        <h1>Ooooops, u lost your way</h1>)
        }/>
    </Switch>
);
