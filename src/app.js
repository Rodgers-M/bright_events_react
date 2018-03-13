import React from 'react'
import { Route } from 'react-router-dom';
import Landing from './components/pages/landing'
import LoginPage from './components/pages/LoginPage'

const App = () => <div className='ui'>
        <Route path='/' exact component={Landing} />
        <Route path='/auth/login' exact component={LoginPage} />
    </div>

export default App;
