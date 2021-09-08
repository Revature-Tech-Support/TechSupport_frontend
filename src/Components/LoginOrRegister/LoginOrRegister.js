import React, { useState } from 'react';
import axios from 'axios';

const LoginOrRegister = () => {

    const [loginState, setLoginState] = useState({
      users: []
    })

    loginState.handleInputChange = event => {
      setLoginState({ ...loginState, [event.target.name]: event.target.value })
    }

    loginState.handleLogin = event => {
      event.preventDefault();
      axios.post('/users/login', {
        username: loginState.username
      })
        .then(({ data }) => {
          console.log(data);
          if (data) {
            localStorage.setItem('user', data)
            window.location = '/chat'
          } else {
            window.location = '/'
          }
        })
        .catch(err => console.error(err))
    }

    if (localStorage.getItem('user')) {
      axios.get('/users/authorize', {
        username: loginState.username
        }
      })
        .then(() => {
          window.location = '/chat'
        })
        .catch(err => console.error(err))

  const [registerState, setRegisterState] = useState({
    users: [],
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
    })
      .then(({ data }) => {
        console.log(data)
        if (data) {
          window.location = '/chat'
        } else {
          window.location = '/'
        }
      })
      .catch(err => console.error(err))
  }

  return (
    <>
    <form id="loginForm">
      <div className="row">
          <div className="col-sm-3 offset-md-3">
          <label htmlFor="registerName" className="form-label">Register with a username</label>
          <input 
            className="form-control" 
            type="text" 
            aria-label="Register Input"
            id='registerName'
            name='registerName'
            onChange={(event) => loginState.handleInputChange(event)}
          />
          <br />
          <button 
            type="button" 
            className="btn btn-primary"
            onClick={(event) => registerState.handleRegister(event)}
          >
            Register
          </button>
        </div>
          <div className="col-sm-3">
          <label htmlFor="loginName" className="form-label">Log in with your username</label>
          <input 
            className="form-control" 
            type="text" 
            aria-label="Login Input"
            id='loginName'
            name='loginName'
            onChange={(event) => loginState.handleInputChange(event)}
          />
          <br />
          <button 
            type="button" 
            className="btn btn-info"
            onClick={(event) => loginState.handleLogin(event)}
          >
            Log In
          </button>
        </div>
      </div>
    </form>
    </>
  );
}

export default LoginOrRegister;