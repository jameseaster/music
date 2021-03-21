import React from "react";
import "./App.less";
import { Pages } from "./Pages";
import { Navbar } from "./Components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

export const App: React.FC<{}> = () => (
  <div className="App">
    <Router>
      <Navbar />
      <Pages />
    </Router>
  </div>
);
