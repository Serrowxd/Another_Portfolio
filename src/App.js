import React, { Component } from 'react';
import { Landing, About, Projects, Contact, Life } from './reducer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      button: false,
      isTop: true,
      scrolled: false,
      render: (
        <Landing
          renderA={this.compRenderA}
          renderP={this.compRenderP}
          renderL={this.compRenderL}
          renderC={this.compRenderC}
        />
      ),

      // Development State
      // render: <Projects />,
    };
  }

  // Navigation
  componentDidMount() {
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.sideNavCheckerF();
        this.navScroll();
      } else {
        this.sideNavChecker();
        this.setState({ scrolled: false });
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.navScroll);
  }

  navScroll = () => {
    this.setState({ scrolled: true });
  };

  // Click Handlers
  clickHandler = () => {
    let state = this.state.button;
    this.setState({ button: !state });
  };

  compRender(compName, e) {
    this.setState({ render: compName });
  }

  // Sets to True
  sideNavChecker = () => {
    if (this.state.button === false) {
      this.setState({ button: true });
    }
  };

  // Sets to False
  sideNavCheckerF = () => {
    if (this.state.button === true) {
      this.setState({ button: false });
    }
  };

  setHome = () => {
    if (this.state.button === true) {
      this.setState({ button: false });
    }
    this.setState({
      render: (
        <Landing
          renderA={this.compRenderA}
          renderP={this.compRenderP}
          renderL={this.compRenderL}
          renderC={this.compRenderC}
        />
      ),
    });
  };

  // Really Cheap, refactor this!!

  compRenderA = () => {
    this.sideNavChecker();
    this.setState({ render: <About /> });
  };

  compRenderP = () => {
    this.sideNavChecker();
    this.setState({ render: <Projects /> });
  };

  compRenderL = () => {
    this.sideNavChecker();
    this.setState({ render: <Life /> });
  };

  compRenderC = () => {
    this.sideNavChecker();
    this.setState({ render: <Contact /> });
  };

  // I'm so sorry this exists ;-;

  render() {
    return (
      <div className="main_container">
        {/* Navigation */}
        <div
          className={this.state.scrolled ? 'navigation scrolled' : 'navigation'}
          id="nav"
        >
          <div className="nav_head">
            <p onClick={this.clickHandler}>K/J</p>
          </div>
          <div className="nav_items">
            <a
              href="https://github.com/Serrowxd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Github</p>
            </a>
            <a
              href="https://www.linkedin.com/in/serrowxd/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>LinkedIn</p>
            </a>
            <p>Resume</p>
          </div>
        </div>

        {/* Rendered Component */}
        {this.state.render}

        {/* Left-Nav */}
        <div className={this.state.button ? 'smol_nav' : 'hidden_nav'}>
          <div className="smol_buttons">
            <p onClick={this.setHome}>Home</p>
            <p onClick={this.compRender.bind(this, <About />)}>About</p>
            <p onClick={this.compRender.bind(this, <Projects />)}>Projects</p>
            <p onClick={this.compRender.bind(this, <Life />)}>Life</p>
            <p onClick={this.compRender.bind(this, <Contact />)}>Contact</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
