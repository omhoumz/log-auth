import React, { Component } from 'react';
import '../../css/App.css';

class Profile extends Component {
  render() {
    return (
      <section className="Profile">
        <div className="row">
          <div className="col s6 offset-s2">
            <h4>Welcome</h4>
          </div>
        </div>
        <div className="row">
          <div className="col s6 offset-s2">
            <div class="card horizontal">
              <div class="card-image">
                <img src="https://lorempixel.com/200/200/people/5" />
              </div>
              <div class="card-stacked">
                <div class="card-content">
                  <h5>Full Name</h5>
                  <p className="grey-text">@username</p>
                </div>
                <div class="card-action">
                  <a href="#!" className="light-blue-text">mail@mail.com</a>
                </div>
              </div>
            </div>
          </div>          
        </div>
      </section>
    );
  }
}

export default Profile;
