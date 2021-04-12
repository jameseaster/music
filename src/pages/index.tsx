// React Imports
import React from "react";
import { Switch, Route } from "react-router-dom";
// React Ant Design
import { Layout, Divider } from "antd";
// Components
import { Home } from "./Home";
import { Audio } from "./Audio";
import { Video } from "./Video";
import { Contact } from "./Contact";
// Hooks
import { useCurrentBreakpoint, useMobileFormatting } from "../hooks";
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
export const Pages: React.FC<{}> = () => {
  // Hooks
  const mobileLayout = useMobileFormatting();
  const { breakpoint } = useCurrentBreakpoint();

  // Widths for divider at the top of the Pages
  type Widths = { [key: string]: string };
  const dividerWidth: Widths = {
    xs: "70%",
    sm: "60%",
    md: "50%",
    lg: "55%",
    xl: "45%",
    xxl: "35%",
  };

  return (
    <>
      <div
        className="home-divider"
        style={{
          width: dividerWidth[breakpoint],
          marginTop: "42px",
          visibility: mobileLayout ? "hidden" : "visible",
        }}
      >
        <Divider />
      </div>
      <Switch>
        <Route path="/audio">
          <Content>
            <Audio />
          </Content>
        </Route>
        <Route path="/video">
          <Content>
            <Video />
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
    </>
  );
};
