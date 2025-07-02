import React, { Fragment } from "react";

const Landing = (props) => {
  return (
    <Fragment>
      {/* Jumbo */}
      <div className="jumbo">
        <h1>Kevin Jolley</h1>
        <h2>JavaScript Web Developer</h2>

        {/* Jumbo Nav */}
        <div className="jumbo_nav">
          <p onClick={props.renderA}>About</p>
          <p onClick={props.renderP}>Projects</p>
          <p onClick={props.renderL}>Life</p>
          <p onClick={props.renderC}>Contact</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Landing;
