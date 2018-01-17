import React, { Component } from 'react';
import '../css/App.css';

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer light-blue">
        <div className="footer-copyright">
          <div className="container">
          © 2018 <a className="yellow-text text-darken-1" href="https://github.com/omhoumz" target="_blank">Omar Houmz</a>
          <a className="grey-text text-lighten-4 right" href="https://github.com/omhoumz/log-auth" target="_blank">Github.com</a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
