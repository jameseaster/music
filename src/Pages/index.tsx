import React from "react";
import { Bio } from "./Bio";
import { Home } from "./Home";
import { Media } from "./Media";
import { Contact } from "./Contact";
import { Switch, Route } from "react-router-dom";

export const Pages: React.FC<{}> = () => (
  // A <Switch> looks through its children <Route>s and
  // renders the first one that matches the current URL.
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
);
