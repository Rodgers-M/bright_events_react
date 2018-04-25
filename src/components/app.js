import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Landing from './home/landing';
import LoginContainer from './login/LoginContainer';
import SignupContainer from './signup/SignupContainer';
import NotFound from './home/NotFound';
import FlashMessagesList from './messages/flasshMessagesList';

const App = () => <div className='ui'>
        <FlashMessagesList />
        <Switch>
            <Route path='/' exact component={Landing} />
            <Route path='/auth/login' exact component={LoginContainer} />
            <Route path='/auth/signup' exact component={SignupContainer} />
            <Route component={NotFound} />
        </Switch>
    </div>

export default App;
