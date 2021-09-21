import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../../Components/Navbar';
import Jumbotron from '../../Components/Jumbotron';
import Footer from '../../Components/Footer';

const LoginOrRegister = () => {
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleRegisterUsernameChange = event => {
    setRegisterUsername(event.target.value);
  };

  const handleRegisterPasswordChange = event => {
    setRegisterPassword(event.target.value);
  };

  const handleLoginUsernameChange = event => {
    setLoginUsername(event.target.value);
  };

  const handleLoginPasswordChange = event => {
    setLoginPassword(event.target.value);
  };

  const handleLogin = event => {
    event.preventDefault();
    axios.post('/user/login', {
      username: loginUsername,
      password: loginPassword
    })
      .then(({ data }) => {
        console.log(data);
        if (data) {
          window.localStorage.setItem('user', JSON.stringify(data));
          if (data.techAgent) {
            window.location = '/queue';
          } else {
            window.location = '/createTicket';
          }
        } else {
          window.alert('An error occurred during login. Please try again.'); // user already exists
        }
      })
      .catch(err => console.error(err));
  };

  const handleRegister = event => {
    event.preventDefault();
    axios.post('/user', {
      username: registerUsername,
      password: registerPassword
    })
      .then(({ data }) => {
        if (data) {
          console.log(data);
          window.localStorage.setItem('user', data);
          window.location = '/createTicket';
        } else {
          window.alert('An error occurred during registration. Please try again.'); // password is wrong
        }
      })
      .catch(err => console.error(err));
  };

  if (window.localStorage.getItem('user')) {
    if (window.localStorage.getItem('user').techAgent) {
      window.location = '/queue';
    } else {
      window.location = '/createTicket';
    }
  }

  return (
    <>
      <Navbar />
      <Jumbotron />
      <form id='loginForm'>
        <div className='row'>
          <h3 id='alertDiv'>To begin, log in or register below!</h3>
          <div className='col-sm-3 offset-md-3'>
            <label htmlFor='registerName' className='form-label'>Register here</label>
            <input
              className='form-control'
              type='text'
              aria-label='Register Input'
              id='registerName'
              name='registerName'
              placeholder='Username'
              input={registerUsername}
              onChange={event => handleRegisterUsernameChange(event)}
            />
            <br />
            <input
              className='form-control'
              type='password'
              aria-label='Register Password'
              id='registerPassword'
              name='registerPassword'
              placeholder='Password'
              input={registerPassword}
              onChange={event => handleRegisterPasswordChange(event)}
            />
            <br />
            <button
              type='button'
              className='btn btn-primary'
              onClick={event => handleRegister(event)}
            >
              Register
            </button>
          </div>
          <div className='col-sm-3'>
            <label htmlFor='loginName' className='form-label'>Log in here</label>
            <input
              className='form-control'
              type='text'
              aria-label='Login Name'
              id='loginName'
              name='loginName'
              placeholder='Username'
              input={loginUsername}
              onChange={event => handleLoginUsernameChange(event)}
            />
            <br />
            <input
              className='form-control'
              type='password'
              aria-label='Login Password'
              id='loginPassword'
              name='loginPassword'
              placeholder='Password'
              input={loginPassword}
              onChange={event => handleLoginPasswordChange(event)}
            />
            <br />
            <button
              type='button'
              className='btn btn-info'
              onClick={event => handleLogin(event)}
            >
              Log In
            </button>
          </div>
        </div>
      </form>
      <Footer />
    </>
  );
};

export default LoginOrRegister;
