import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";

const Layout = ({ children }) => {
  return (
    <div className="main_container">
      <Navigation />

      {children}
    </div>
  );
};

export default Layout;
