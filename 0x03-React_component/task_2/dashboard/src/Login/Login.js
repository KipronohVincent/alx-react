import React from 'react';
import './Login.css';

function Login() {
  return (
    <React.Fragment>
      <div className="App-login">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">email</label>
        <input type="email" id="email"></input>
        <label htmlFor="password">password</label>
        <input type="password" id="password"></input>
        <button>Ok</button>
      </div>
    </React.Fragment>
  );
}

export default Login;

