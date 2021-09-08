import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Jumbotron from './Components/Jumbotron';
import LoginOrRegister from './Components/LoginOrRegister';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Navbar />
        <Jumbotron />
        <br />
        <LoginOrRegister />
      <Footer />
    </div>
  );
}

export default App;
