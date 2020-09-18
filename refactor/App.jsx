import React, { useState, useEffect } from "react";
import { BrowserRouter as Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
    </Switch>
  );
};

// Landing rendered here for simplicity
const Landing = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default App;
