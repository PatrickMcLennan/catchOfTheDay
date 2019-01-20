import React from 'react';

const Login = props => (
  <nav className="login">
    <h2>Inventory Login</h2>
    <p>Sign In to manage your stores Inventory</p>
    <button className="github" onClick={() => props.authenticate('Github')}>Log In With Github</button>
    <button className="facebook" onClick={() => props.authenticate('Facebook')}>Log In With FaceBook</button>
  </nav>
);

export default Login;


// 20:36 authentication
