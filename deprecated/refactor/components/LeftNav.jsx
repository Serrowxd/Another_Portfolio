import React from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";

const LeftNav = () => {
  return (
    <div className="smol_nav">
      <div className="smol_buttons">
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/about">
          <p>About</p>
        </Link>
        <Link to="/projects">
          <p>Projects</p>
        </Link>
        <Link to="/Life">
          <p>Life</p>
        </Link>
        <Link to="/Contact">
          <p>Contact</p>
        </Link>
      </div>
    </div>
  );
};

export default LeftNav;
