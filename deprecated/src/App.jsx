import React, { Component } from "react";
import { Landing, About, Projects, Contact, Life } from "./reducer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      // SideNavigation === Button
      button: false,
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
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 50;
      let nav = document.getElementById("nav");
      if (isTop) {
        nav.addClass("scrolled");
        this.sideNavCheckerF();
      } else {
        nav.removeClass("scrolled");
        this.sideNavChecker();
      }
    });
  }

  // Navigation Display/Hide
  componentWillUnmount() {
    window.removeEventListener("scroll", this.navScroll);
  }

  // Click Handlers
  clickHandler = () => {
    let state = this.state.button;
    this.setState({ button: !state });
  };

  // Component Navigation Render Function
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

  // Sets Home on Nav Click
  setHome = () => {
    this.sideNavCheckerF();
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

  notWorking = () => {
    window.alert("I'm not working right now! (OvO') Check back later!");
  };

  // Really Cheap, refactor this!!
  // Switch Statement, or just add router / loading animation

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

  render() {
    return (
      <div className="main_container">
        {/* Navigation */}
        <div id="nav" className="navigation">
          <div className="nav_head">
            <p onClick={this.clickHandler}>K/J</p>
          </div>
          <div className="nav_items">
            <a href="https://github.com/Serrowxd" target="_blank" rel="noopener noreferrer">
              <p>Github</p>
            </a>
            <a href="https://www.linkedin.com/in/serrowxd/" target="_blank" rel="noopener noreferrer">
              <p>LinkedIn</p>
            </a>
            <p onClick={this.notWorking}>Resume</p>
          </div>
        </div>

        {/* Rendered Component */}
        {this.state.render}

        {/* Left-Nav */}
        <div className={this.state.button ? "smol_nav" : "hidden_nav"}>
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
