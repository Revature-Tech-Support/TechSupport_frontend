import React, { useState } from 'react';
import './App.css';
import { Route, Redirect, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Jumbotron from './Components/Jumbotron';
import LoginOrRegister from './Pages/LoginOrRegister';
import Chat from './Pages/Chat';
import Queue from './Pages/Queue';

const App = () => {

const [user] = useState(null);
  //return user == null ? (
  return(
    <>
      <Router>
        <Switch>
          <Redirect exact from="/" to="/login" />
          <Route path="/login" component= {LoginOrRegister} />
          <Route path="/chat" component={Chat} />
          <Route path="/queue" component={Queue} />
        </Switch>
      </Router>
    </>
  ); 
}

export default App;
