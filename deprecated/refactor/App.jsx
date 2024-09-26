import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Landing from "./routes/Landing";
import LeftNav from "./components/LeftNav";

const App = () => {
  return (
    <Switch>
      <Layout>
        <Route exact path="/" component={Landing} />

        <Route path="/about">
          <About />
          <LeftNav />
        </Route>
        <Route path="/projects">
          <Projects />
          <LeftNav />
        </Route>
      </Layout>
    </Switch>
  );
};

export default App;
