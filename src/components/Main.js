import React, { Component } from 'react';

import '../css/App.css';
import Profile from './elements/Profile';
import Signin from './elements/Signin';
import Signup from './elements/Signup';

class Main extends Component {
  render() {
    return (
      <main className="Main">
        <section className="container">
          <Profile />
          <Signin />
          <br />
          <Signup />
        </section>        
      </main>
    );
  }
}

export default Main;
