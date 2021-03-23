// React Imports
import React from "react";
import { Switch, Route } from "react-router-dom";

// React Ant Design
import { Layout } from "antd";

// Components
import { Home } from "./Home";
import { Media } from "./Media";
import { Contact } from "./Contact";

// Constants
const { Content } = Layout;

/**
 * Pages
 *
 * Uses react-router-dom to source the page that has been
 * selected by the navbar. Each page is wrapped in the
 * Content component from Ant Design to take advantage
 * of the baked in Layout components
 */
export const Pages: React.FC<{}> = () => (
  <Switch>
    <Route path="/media">
      <Content>
        <Media />
      </Content>
    </Route>
    <Route path="/contact">
      <Content>
        <Contact />
      </Content>
    </Route>
    <Route path="/">
      <Content>
        <Home />
      </Content>
    </Route>
  </Switch>
);
