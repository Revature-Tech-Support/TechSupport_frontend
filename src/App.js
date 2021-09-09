import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Jumbotron from './Components/Jumbotron';
import LoginOrRegister from './Components/LoginOrRegister';
import Chat from './Components/Chat'
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Navbar />
        <Jumbotron />
        <br />
        <LoginOrRegister />
        <br />
        <Chat />
      <Footer />
    </>
  );
}

export default App;
