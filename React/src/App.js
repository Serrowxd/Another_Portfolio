import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="main_container">
        {/* Navigation */}
        <div className="navigation" id="nav">
          <div className="nav_head">
            <a href="#top">
              {' '}
              <p>K/J</p>{' '}
            </a>
          </div>
          <div className="nav_items">
            <p>Github</p>
            <p>LinkedIn</p>
            <p>Resume</p>
          </div>
        </div>

        {/* Jumbo */}
        <div className="jumbo" id="jumbo">
          <h1>Kevin Jolley</h1>
          <h2>JavaScript Web Developer</h2>

          {/* Jumbo Nav */}
          <div className="jumbo_nav">
            <a href="#about">
              {' '}
              <p>About</p>{' '}
            </a>
            <a href="#skills">
              {' '}
              <p>Skills</p>{' '}
            </a>
            <p>Projects</p>
            <p>Extra</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
