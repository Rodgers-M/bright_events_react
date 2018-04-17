import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Landing from './pages/landing';
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import NotFound from './pages/NotFound';
import FlashMessagesList from './messages/flasshMessagesList';

const App = () => <div className='ui'>
        <FlashMessagesList />
        <Switch>
            <Route path='/' exact component={Landing} />
            <Route path='/auth/login' exact component={LoginPage} />
            <Route path='/auth/signup' exact component={SignupPage} />
            <Route component={NotFound} />
        </Switch>
    </div>

export default App;
