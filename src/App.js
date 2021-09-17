import React, { useState } from 'react';
import './App.css';
import { Route, Redirect, Switch, BrowserRouter as Router } from 'react-router-dom';
import LoginOrRegister from './Pages/LoginOrRegister';
import Ticket from './Pages/Ticket';
import Chat from './Pages/Chat';
import Queue from './Pages/Queue';
import History from './Pages/History';

const App = () => {

const [user] = useState(null);
  //return user == null ? (
  return(
    <>
      <Router>
        <Switch>
          <Redirect exact from='/' to='/login' />
          <Route path='/login' component= {LoginOrRegister} />
          <Route path='/createTicket' component={Ticket} />
          <Route path='/chat' component={Chat} />
          <Route path='/queue' component={Queue} />
          <Route path='/history' component={History} />
        </Switch>
      </Router>
    </>
  ); 
};

export default App;
