import React, { Fragment } from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";

const Landing = () => {
  return (
    <Fragment>
      {/* Jumbo */}
      <div className="jumbo">
        <h1>Kevin Jolley</h1>
        <h2>JavaScript Web Developer</h2>

        <div className="jumbo_nav">
          <Link to="/about">
            <p>About</p>
          </Link>
          <Link to="/projects">
            <p>Projects</p>
          </Link>
          <Link to="/life">
            <p>Life</p>
          </Link>
          <Link to="/contact">
            <p>Contact</p>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Landing;
