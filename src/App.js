import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Jumbotron from './Components/Jumbotron';
import LoginOrRegister from './Components/LoginOrRegister';
import Chat from './Components/Chat';
import Footer from './Components/Footer';

function App() {

const [user, setUser] = useState(null);
//return user == null ? ()
  return user ? (
    <>
      <Navbar />
      <Jumbotron />
      <br />
      <LoginOrRegister />
      <br />
      <Footer />
      </>
      ) : (
      <>
      <Navbar />
      <Jumbotron />
      <br />
      <Chat />
      <br />
      <Footer />
    </>
  );
}

export default App;
