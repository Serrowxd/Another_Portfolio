import React from "react";

const LeftNav = () => {
  return (
    <div className={sideNav ? "smol_nav" : "hidden_nav"}>
      <div className="smol_buttons">
        <p onClick={this.setHome}>Home</p>
        <p onClick={this.compRender.bind(this, <About />)}>About</p>
        <p onClick={this.compRender.bind(this, <Projects />)}>Projects</p>
        <p onClick={this.compRender.bind(this, <Life />)}>Life</p>
        <p onClick={this.compRender.bind(this, <Contact />)}>Contact</p>
      </div>
    </div>
  );
};

export default LeftNav;
