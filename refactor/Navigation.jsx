import React from "react";

const Navigation = () => {
  return (
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
  );
};

export default Navigation;
