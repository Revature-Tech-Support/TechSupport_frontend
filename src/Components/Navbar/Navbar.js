import React from 'react';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Revature</a>
            <div className="navbar-nav">
              <a className="nav-link" href="/login">Login/Register</a>
              <a className="nav-link" href="/createTicket">Create Ticket</a>
              <a className="nav-link" href="/chat">Chat</a>
              <a className="nav-link" href="/queue">Queue</a>
              <a className="nav-link" href="/history">History</a>
            </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
