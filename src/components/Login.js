import React from 'react';
import PropTypes from 'prop-types';

const Login = props => (
  <nav className="login">
    <h2>Inventory Login</h2>
    <p>Sign In to manage your stores Inventory</p>
    <button className="github" onClick={() => props.authenticate('Github')}>Log In With Github</button>
    <button className="facebook" onClick={() => props.authenticate('Facebook')}>Log In With FaceBook</button>
  </nav>
);

Login.propTypes = {
  authenticate: PropTypes.func.isRequired,
};

export default Login;
