import React from 'react'
import { Route } from 'react-router-dom';
import Landing from './pages/landing';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

const App = () => <div className='ui'>
        <Route path='/' exact component={Landing} />
        <Route path='/auth/login' exact component={LoginPage} />
        <Route path='/auth/signup' exact component={SignupPage} />
    </div>

export default App;