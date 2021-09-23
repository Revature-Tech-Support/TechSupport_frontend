import React, { useState } from 'react';
import axios from 'axios';
import Layout from '../Components/Layout';

const LoginOrRegister = () => {
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleRegisterUsernameChange = (event) => {
    setRegisterUsername(event.target.value);
  };

  const handleRegisterPasswordChange = (event) => {
    setRegisterPassword(event.target.value);
  };

  const handleLoginUsernameChange = (event) => {
    setLoginUsername(event.target.value);
  };

  const handleLoginPasswordChange = (event) => {
    setLoginPassword(event.target.value);
  };

  const handleRegisterEnterKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleRegister(event);
    }
  };

  const handleLoginEnterKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleLogin(event);
    }
  };

  const handleLogin = (event) => {
    event.preventDefault();
    axios
      .post('/user/login', {
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
      .catch((err) => console.error(err));
  };

  const handleRegister = (event) => {
    event.preventDefault();
    axios
      .post('/user', {
        username: registerUsername,
        password: registerPassword
      })
      .then(({ data }) => {
        if (data && data.techAgent) {
          window.localStorage.setItem('user', JSON.stringify(data));
          window.location = '/queue';
        } else if (data && !data.techAgent) {
          window.localStorage.setItem('user', JSON.stringify(data));
          window.location = '/createTicket';
        } else {
          window.alert(
            'An error occurred during registration. Please try again.'
          ); // password is wrong
        }
      })
      .catch((err) => console.error(err));
  };

  if (window.localStorage.getItem('user')) {
    if (JSON.parse(window.localStorage.getItem('user')).techAgent) {
      window.location = '/queue';
    } else {
      window.location = '/createTicket';
    }
  }

  return (
    <Layout
      childClass='pt-5 pb-5'
    >
      <form id='loginForm' className='pb-5'>
        <div className='row pb-5'>
          <h3 id='alertDiv' className='display-4 alert pt-5'>Get Started!</h3>
          <div className='col-sm-3 offset-md-3'>
            {/* <label htmlFor='registerName' className='form-label'>
              Register here
            </label> */}
            <input
              className='form-control'
              type='text'
              aria-label='Register Input'
              id='registerName'
              name='registerName'
              placeholder='Username'
              input={registerUsername}
              onChange={(event) => handleRegisterUsernameChange(event)}
              onKeyPress={(event) => handleRegisterEnterKeyPress(event)}
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
              onChange={(event) => handleRegisterPasswordChange(event)}
              onKeyPress={(event) => handleRegisterEnterKeyPress(event)}
            />
            <br />
            <button
              type='button'
              className='btn btn-outline-primary'
              onClick={(event) => handleRegister(event)}
            >
              Register
            </button>
          </div>
          <div className='col-sm-3'>
            {/* <label htmlFor='loginName' className='form-label'>
              Log in here
            </label> */}
            <input
              className='form-control'
              type='text'
              aria-label='Login Name'
              id='loginName'
              name='loginName'
              placeholder='Username'
              input={loginUsername}
              onChange={(event) => handleLoginUsernameChange(event)}
              onKeyPress={(event) => handleLoginEnterKeyPress(event)}
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
              onChange={(event) => handleLoginPasswordChange(event)}
              onKeyPress={(event) => handleLoginEnterKeyPress(event)}
            />
            <br />
            <button
              type='button'
              className='btn btn-outline-primary'
              onClick={(event) => handleLogin(event)}
            >
              Log In
            </button>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default LoginOrRegister;
