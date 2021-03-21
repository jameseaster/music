import React from "react";
import { Bio } from "./Bio";
import { Home } from "./Home";
import { Media } from "./Media";
import { Contact } from "./Contact";
import { Switch, Route } from "react-router-dom";

export const Pages: React.FC<{}> = () => (
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
