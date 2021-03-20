import React from "react";
import "./App.css";
import { Bio } from "./Pages/Bio";
import { Home } from "./Pages/Home";
import { Media } from "./Pages/Media";
import { Contact } from "./Pages/Contact";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Row, Col } from "antd";

export const App: React.FC<{}> = () => (
  <Router>
    <div className="App">
      <Row>
        <Col span={6}>
          <Link to="/">Home</Link>
        </Col>
        <Col span={6}>
          <Link to="/media">Media</Link>
        </Col>
        <Col span={6}>
          <Link to="/bio">Bio</Link>
        </Col>
        <Col span={6}>
          <Link to="/contact">Contact</Link>
        </Col>
      </Row>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/media">
          <Media />
        </Route>
        <Route path="/bio">
          <Bio />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
);
