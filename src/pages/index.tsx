// Dependency Imports
import { Switch, Route } from "react-router-dom";
// React Ant Design
import { Layout /*Divider */ } from "antd";
// Components
import { Home } from "./Home";
// import { About } from "./About";
import { Music } from "./Music";
import { Video } from "./Video";
import { Contact } from "./Contact";
import { Gallery } from "./Gallery";
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
    {/* <Route path="/about">
      <Content>
        <About />
      </Content>
    </Route> */}
    <Route path="/video">
      <Content>
        <Video />
      </Content>
    </Route>
    <Route path="/music">
      <Content>
        <Music />
      </Content>
    </Route>
    <Route path="/gallery">
      <Content>
        <Gallery />
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
