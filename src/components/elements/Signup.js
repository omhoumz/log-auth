import React, { Component } from 'react';
import '../../css/App.css';

class Signin extends Component {
  render() {
    return (
      <section className="Signup">
        <div className="row">
          <div className="col s12 m4 offset-m2">
            <h4>Sign up</h4>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12 m4 offset-m2">
            <input id="name" type="text" className="validate" />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-field col s12 m4">
            <input id="email" type="email" className="validate" />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-field col s12 m4 offset-m2">
            <input id="username" type="text" className="validate" />
            <label htmlFor="username">Username</label>
          </div>
          <div className="input-field col s12 m4">
            <input id="password" type="password" className="validate" />
            <label htmlFor="password">Password</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12 m4 offset-m2">
            <button className="btn light-blue waves-effect waves-dark">Sign in</button>
          </div>
        </div>
      </section>
    );
  }
}

export default Signin;
