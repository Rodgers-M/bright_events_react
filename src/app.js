import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import Landing from './components/pages/landing'

const App = () => <div className='ui'>
        <Route path='/' exact component={Landing} />
    </div>

export default App;
