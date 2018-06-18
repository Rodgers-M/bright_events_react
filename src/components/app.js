import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './home/landing';
import LoginContainer from './users/login/LoginContainer';
import SignupContainer from './users/signup/SignupContainer';
import ResetPasswordContainer from './users/resetPassword/ResetPasswordContainer';
import CreateEventContainer from './events/create/CreateEventContainer';
import EditEventContainer from './events/edit/EditEventContainer';
import NotFound from './home/NotFound';
import EventsLayout from './events/common/EventsLayout';
import EventList from './events/view/EventList';
import MyEvents from './events/view/MyEvents';

const App = () => <div className='ui'>
    <Switch>
        <Route path='/' exact component={ Landing } />
        <Route path='/auth/login' exact component={ LoginContainer } />
        <Route path='/auth/signup' exact component={ SignupContainer } />
        <Route path='/auth/forgortpass' exact component={ ResetPasswordContainer } />
        <Route path='/auth/reset' exact component={ ResetPasswordContainer } />
        <EventsLayout path='/events/create' exact component={ CreateEventContainer } page='create' />
        <EventsLayout path='/events/myEvents' exact component={ MyEvents } page='myEvents' />
        <EventsLayout path='/events/:id/edit' exact component={ EditEventContainer } page='edit' />
        <EventsLayout path='/events' exact component={ EventList } page='allEvents' />
        <Route component={ NotFound } />
    </Switch>
</div>;

export default App;

