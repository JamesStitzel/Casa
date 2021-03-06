import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import loginDoor from '../assets/images/loginpage/loginDoor.jpg'
import logo from '../assets/images/homepage/casa-logo.png'

import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <main className="flex-row justify-content-evenly mb-2 mt-0">
      <div classname="flex-column align-items-center">
        <img class="img-fluid" src={loginDoor} alt="Cracked open door" /></div>
      <div className="login-card flex-column">
        <img class="img-fluid login-logo mx-auto" src={logo} alt="Casa Logo" />
        <h4 className= "mx-auto p-3">Account Login</h4>
        <div className="card-body">
          {data ? (
            <p>
              Success! You may now head{' '}
              <Link to="/">back to the homepage.</Link>
            </p>
          ) : (
            <form className="d-flex flex-column" onSubmit={handleFormSubmit}>

              <div className="d-flex flex-row">
                <input
                  className="login-form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="login-form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
              </div>
              <button
                className="custom-btn mt-3"
                style={{ cursor: 'pointer' }}
                type="submit"
              >
                Sign In
              </button>
            </form>
          )}

          {error && (
            <div className="my-3 p-3 bg-danger text-white">
              {error.message}
            </div>
          )}
          <p id="redirect-text-signup" className="mt-4 d-flex justify-content-center text-muted"> Don't have an account?</p>
          <Link className="redirect-link d-flex justify-content-center" to="/signup">
            <p>Sign Up</p>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Login;
