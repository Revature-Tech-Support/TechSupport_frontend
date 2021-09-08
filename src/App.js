import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Welcome to Revature Tech Support!</h1>
        <h3> Need help with anything tech-related? </h3>
        <h3> You've come to the right place.</h3>
        <h3>Click on the chat box below to talk to a tech support specialist!</h3>
      </div>
      <Footer />
    </div>
  );
}

export default App;
