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
        username: loginState.username,
        password: loginState.password
      })
        .then(({ data }) => {
          console.log(data);
          if (data) {
            localStorage.setItem('user', data)
          } else {
            //change to show an alert which tells the user user that an error occurred
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
        })
        .catch(err => console.error(err))
      }

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
      password: registerState.password
    })
      .then(({ data }) => {        
        if (data) {
          console.log(data)
        } else {
          console.log("error occurred")
          //add in div to alert user that error occurred
          //alertDiv.innerHTML = "An error occurred during registering. Please try again."
        }
      })
      .catch(err => console.error(err))
    }
      
  return (
    <>
    <form id="loginForm">
      <div className="row">
          <h3 id="alertDiv">To begin, log in or register below!</h3>
          <div className="col-sm-3 offset-md-3">
          <label htmlFor="registerName" className="form-label">Register here</label>
          <input 
            className="form-control" 
            type="text" 
            aria-label="Register Input"
            id='registerName'
            name='registerName'
            placeholder="Username"
            onChange={event => loginState.handleInputChange(event)}
          />
          <br />
          <input
            className="form-control"
            type="password"
            aria-label="Register Password"
            id="registerPassword"
            name="registerPassword"
            placeholder="Password"
            onChange={event => loginState.handleInputChange(event)}
            //onKeyPress={event => { if (event.key === 13) { handleRegister(event) } }}
          />
          <br />
          <button 
            type="button" 
            className="btn btn-primary"
            onClick={event => registerState.handleRegister(event)}
          >
            Register
          </button>
        </div>
          <div className="col-sm-3">
          <label htmlFor="loginName" className="form-label">Log in here</label>
          <input 
            className="form-control" 
            type="text" 
            aria-label="Login Name"
            id='loginName'
            name='loginName'
            placeholder="Username"
            onChange={event => loginState.handleInputChange(event)}
          />
          <br />
          <input
            className="form-control"
            type="password"
            aria-label="Login Password"
            id="loginPassword"
            name="loginPassword"
            placeholder="Password"
            onChange={event => loginState.handleInputChange(event)}
            //onKeyPress={event => { if (event.key === 13) { handleLogin(event)} }}
          />
          <br />
          <button 
            type="button" 
            className="btn btn-info"
            onClick={event => loginState.handleLogin(event)}
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