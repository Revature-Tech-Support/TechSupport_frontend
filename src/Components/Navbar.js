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
  //   axios.get(`/issues/${issueId}`)
  //     .then(({ data }) => {
  //       console.log(data);
  //     })
  //     .catch(err => console.error(err));
  // };

  if (!user) { // not logged in
    return (
<<<<<<< HEAD:src/Components/Navbar.js
      <>
        <nav className='navbar navbar-expand-lg navbar-light bg-secondary'>
          <div className='container'>
            <a className='navbar-brand' href='/'> <img 
              src='./resources/imgs/logo.png'
              alt='logo'></img></a>
            <div className='navbar-nav'>
              <a className='nav-link' href='/'>Home</a>
              <a className='nav-link' href='/login'>Login/Register</a>
            </div>
=======
      <nav className='navbar navbar-expand-lg navbar-light bg-secondary'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='http://revature.com'>{}</a>
          <div className='navbar-nav'>
            <a className='nav-link' href='/login'>Login/Register</a>
>>>>>>> lanchi-copy:src/Components/Navbar/Navbar.js
          </div>
        </div>
      </nav>
    );
  } else if (user.techAgent) { // you are logged in and you are tech support
    return (
<<<<<<< HEAD:src/Components/Navbar.js
      <>
        <nav className='navbar navbar-expand-lg navbar-light bg-secondary main-navbar'>
          <div className='container'>
            <a className='navbar-brand' href='/'>
              <img 
              src='./resources/imgs/logo.png'
              alt='logo'></img></a>
            <div className='navbar-nav'>
              <a className='nav-link' href='/login' onClick={event => signOut(event)}>Sign Out</a>
              <a className='nav-link' href='/chat'>Chat</a>
              <a className='nav-link' href='/queue'>Queue</a>
              <a className='nav-link' href='/history'>History</a>
            </div>
=======
      <nav className='navbar navbar-expand-lg navbar-light bg-secondary'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='http://revature.com'>Revature</a>
          <div className='navbar-nav'>
            <a className='nav-link' href='/login' onClick={event => signOut(event)}>Sign Out</a>
            <a className='nav-link' href='/chat'>Chat</a>
            <a className='nav-link' href='/queue'>Queue</a>
>>>>>>> lanchi-copy:src/Components/Navbar/Navbar.js
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
<<<<<<< HEAD:src/Components/Navbar.js
      <>
        <nav className='navbar navbar-expand-lg navbar-light bg-secondary'>
          <div className='container-fluid'>
            <a className='navbar-brand' href='/'> <img 
              src='./resources/imgs/logo.png'
              alt='logo'></img></a>
            <div className='navbar-nav'>
              <a className='nav-link' href='/login' onClick={event => signOut(event)}>Sign Out</a>
              <a className='nav-link' href='/createTicket'>Create Ticket</a>
            </div>
=======
      <nav className='navbar navbar-expand-lg navbar-light bg-secondary'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='www.revature.com'>Revature</a>
          <div className='navbar-nav'>
            <a className='nav-link' href='/login' onClick={event => signOut(event)}>Sign Out</a>
            <a className='nav-link' href='/createTicket'>Create Ticket</a>
>>>>>>> lanchi-copy:src/Components/Navbar/Navbar.js
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
