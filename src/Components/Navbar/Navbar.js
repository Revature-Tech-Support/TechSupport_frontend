import React from 'react';
// import axios from 'axios';

const Navbar = () => {
  const user = JSON.parse(window.localStorage.getItem('user'));

  const signOut = () => {
    window.localStorage.removeItem('user');
    window.localStorage.clear();
    window.location = './login';
  };

  // const longestWaiting = issueId => {
  //   axios.get('/issues/oldest')
  //     .then(({ data }) => {
  //       console.log(data);
  //     })
  //     .catch(err => console.error(err));
  // };

  if (!user) { // not logged in
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-secondary'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='http://revature.com'>{}</a>
          <div className='navbar-nav'>
            <a className='nav-link' href='/login'>Login/Register</a>
          </div>
        </div>
      </nav>
    );
  } else if (user.techAgent) { // you are logged in and you are tech support
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-secondary'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='http://revature.com'>Revature</a>
          <div className='navbar-nav'>
            <a className='nav-link' href='/login' onClick={event => signOut(event)}>Sign Out</a>
            <a className='nav-link' href='/chat'>Chat</a>
            <a className='nav-link' href='/queue'>Queue</a>
          </div>
        </div>
      </nav>
    );
  // } else if (user.username !== longestWaiting) { // this if will have to change
  //   return (
  //     <nav className='navbar navbar-expand-lg navbar-light bg-secondary'>
  //       <div className='container-fluid'>
  //         <a className='navbar-brand' href='http://revature.com'>Revature</a>
  //         <div className='navbar-nav'>
  //           <a className='nav-link' href='/login' onClick={event => signOut(event)}>Sign Out</a>
  //           <a className='nav-link' href='/createTicket'>Create Ticket</a>
  //         </div>
  //       </div>
  //     </nav>
  //   );
  // } else if (user === longestWaiting) { // this if will have to change
  //   return (
  //     <nav className='navbar navbar-expand-lg navbar-light bg-secondary'>
  //       <div className='container-fluid'>
  //         <a className='navbar-brand' href='www.revature.com'>Revature</a>
  //         <div className='navbar-nav'>
  //           <a className='nav-link' href='/login' onClick={event => signOut(event)}>Sign Out</a>
  //           <a className='nav-link' href='/createTicket'>Create Ticket</a>
  //           <a className='nav-link' href='/chat'>Chat</a>
  //         </div>
  //       </div>
  //     </nav>
  //   );
  } else {
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-secondary'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='www.revature.com'>Revature</a>
          <div className='navbar-nav'>
            <a className='nav-link' href='/login' onClick={event => signOut(event)}>Sign Out</a>
            <a className='nav-link' href='/createTicket'>Create Ticket</a>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
