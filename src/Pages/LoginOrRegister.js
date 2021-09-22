import React, { useState } from 'react';
import axios from 'axios';
import Layout from '../Components/Layout';
const LoginOrRegister = () => {

    const [loginState, setLoginState] = useState({
      users: [],
      isSignedIn: false
    })

    loginState.handleInputChange = event => {
      setLoginState({ ...loginState, [event.target.name]: event.target.value })
    }

    loginState.handleLogin = event => {
      event.preventDefault();
      axios.post('/users/login', {
        username: loginState.username,
        password: loginState.password
      })
        .then(({ data }) => {
          console.log(data);
          if (data) {
            localStorage.setItem('user', data)
            window.location = '/createTicket'
          } else {
            alert('An error occurred during login. Please try again.')
            window.location = '/'
          }
        })
        .catch(err => console.error(err))
    }

    if (localStorage.getItem('user')) {
      axios.get('/users/authorize', {
        username: loginState.username
        })
        .then(({ data }) => {
          console.log(data)
          window.location = '/createTicket'
        })
        .catch(err => console.error(err))
      }

  const [registerState, setRegisterState] = useState({
    users: '',
    handleRegister: '',
    handleInputChange: ''
  })

  registerState.handleInputChange = event => {
    setRegisterState({ ...registerState, [event.target.name]: event.target.value })
    console.log(registerState);
  }

  registerState.handleRegister = event => {
    event.preventDefault()
    axios.post('/users/register', {
      username: registerState.username,
      password: registerState.password
    })
      .then(({ data }) => {        
        if (data) {
          console.log(data)
          localStorage.setItem('user', data)
          window.location = '/createTicket'
        } else {
          alert('An error occurred during registration. Please try again.')
          window.location = '/';
        }
      })
      .catch(err => console.error(err))
    }
      
  return (
    <>
    <Layout>
    <form id='loginForm' className='form'>
      <div className='row justify-content-center'>
          <h3 id='alertDiv' className='pb-5 alert display-4'>Get started!</h3>
          <div className='col-sm-3 input-form'>
          {/* <label htmlFor='registerName' className='form-label'>Register here</label> */}
          <input 
            className='form-control' 
            type='text' 
            aria-label='Register Input'
            id='registerName'
            name='registerName'
            placeholder='Username'
            onChange={event => loginState.handleInputChange(event)}
          />
          <br />
          <input
            className='form-control'
            type='password'
            aria-label='Register Password'
            id='registerPassword'
            name='registerPassword'
            placeholder='Password'
            onChange={event => loginState.handleInputChange(event)}
          />
          <br />
          <button 
            type='button' 
            className='btn btn-outline-primary'
            onClick={event => registerState.handleRegister(event)}
          >
            Register
          </button>
        </div>
          <div className='col-sm-3 input-form'>
          {/* <label htmlFor='loginName' className='form-label'>Log in here</label> */}
          <input 
            className='form-control' 
            type='text' 
            aria-label='Login Name'
            id='loginName'
            name='loginName'
            placeholder='Username'
            onChange={event => loginState.handleInputChange(event)}
          />
          <br />
          <input
            className='form-control'
            type='password'
            aria-label='Login Password'
            id='loginPassword'
            name='loginPassword'
            placeholder='Password'
            onChange={event => loginState.handleInputChange(event)}
          />
          <br />
          <button 
            type='button' 
            className='btn btn-outline-primary'
            onClick={event => loginState.handleLogin(event)}
          >
            Log In
          </button>
        </div>
      </div>
    </form>
    </Layout>
    </>
  );
};

export default LoginOrRegister;