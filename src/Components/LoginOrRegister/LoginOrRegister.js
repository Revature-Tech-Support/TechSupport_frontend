import React from 'react';

const LoginOrRegister = () => {
  return (
    <>
    <form id="loginForm">
      <div className="row">
          <div className="col-sm-3 offset-md-3">
          <label htmlFor="registerName" className="form-label">Register with a username</label>
          <input className="form-control" type="text" aria-label="Register Input" size="50" />
          <br />
          <button type="button" className="btn btn-primary">Register</button>
        </div>
          <div className="col-sm-3">
          <label htmlFor="loginName" className="form-label">Log in with your username</label>
          <input className="form-control" type="text" aria-label="Login Input" />
          <br />
          <button type="button" className="btn btn-info">Log In</button>
        </div>
      </div>
    </form>
    </>
  );
}

export default LoginOrRegister;