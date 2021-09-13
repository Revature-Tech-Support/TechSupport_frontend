import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Jumbotron from './Components/Jumbotron';
import LoginOrRegister from './Components/LoginOrRegister';
import Chat from './Components/Chat';
import Footer from './Components/Footer';

function App() {

const [user] = useState(null);
//return user == null ? (
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <div className="content">
        {user ? (<LoginOrRegister> </LoginOrRegister>) : (<Chat> </Chat>)}
      </div>
      <Footer />
    </div>





//<Navbar />
      // <div className="content">

    //   { user ? 
    //     ( <LoginOrRegister />) : 
    //     (<Chat />)
    // }
      //</div>
      //<Footer />
  ); 
}

export default App;
