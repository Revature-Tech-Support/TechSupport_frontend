import React, { useState } from 'react';

const Navbar = () => {
  const [user] = useState(['agent'])
  
  return (
    user === 'agent' ? (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
        <div className="container-fluid">
          <a className="navbar-brand" href="www.revature.com">Revature</a>
          <div className="navbar-nav">
            <a className="nav-link" href="/login">Login/Register</a>
            <a className="nav-link" href="/chat">Chat</a>
            <a className="nav-link" href="/queue">Queue</a>
            <a className="nav-link" href="/history">History</a>
          </div>
        </div>
      </nav>
    </>
    ) : (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
        <div className="container-fluid">
          <a className="navbar-brand" href="www.revature.com">Revature</a>
          <div className="navbar-nav">
            <a className="nav-link" href="/login">Login/Register</a>
            <a className="nav-link" href="/createTicket">Create Ticket</a>
          </div>
        </div>
      </nav>
    </>
    )
  );
}

export default Navbar;
