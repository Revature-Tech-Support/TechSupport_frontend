import React, { useState } from 'react';
import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginOrRegister from './Pages/LoginOrRegister';
import Ticket from './Pages/Ticket';
import Chat from './Pages/Chat';
import Queue from './Pages/Queue';
import History from './Pages/History';

const App = () => {
  const [user, setUser] = useState(window.localStorage.getItem('username'));

  return (
    <>
      <Router>
        <Switch>
          <Redirect exact from='/' to='/login' />
          <Route path='/login' component={LoginOrRegister} />
          <Route path='/chat' component={() => <Chat user={user} />} />
          <Route path='/createTicket' component={Ticket} />
          <Route path='/queue' component={Queue} />
          <Route path='/history' component={History} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
