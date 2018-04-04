import React from 'react'
import { Route } from 'react-router-dom';
import Landing from './components/pages/landing';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';

const App = () => <div className='ui'>
        <Route path='/' exact component={Landing} />
        <Route path='/auth/login' exact component={LoginPage} />
        <Route path='/auth/signup' exact component={SignupPage} />
    </div>

export default App;
