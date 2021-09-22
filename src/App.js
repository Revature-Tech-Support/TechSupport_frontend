import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginOrRegister from './Pages/LoginOrRegister';
import Ticket from './Pages/Ticket';
import Chat from './Pages/Chat/Chat';
import Queue from './Pages/Queue';
import History from './Pages/History';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' component={LoginOrRegister} exact />
          <Route path='/login' component={LoginOrRegister} />
          <Route path='/chat' component={Chat} />
          <Route path='/createTicket' component={Ticket} />
          <Route path='/queue' component={Queue} />
          <Route path='/history' component={History} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
