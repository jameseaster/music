// React Imports
import React from "react";
import { Link } from "react-router-dom";

// Ant Design Imports
import { Menu, Layout } from "antd";

// Constants
const { Header } = Layout;

/**
 * Navbar
 *
 * The Navbar is wrapped in Ant Design's Header component to
 * take advantage of some baked in Layout features. It renders
 * at the top of the webpage and utilizes react-router-dom to
 * navigate between Pages
 */
export const Navbar: React.FC<{}> = () => (
  <Header className="header">
    <Menu
      className="header-menu"
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["Home"]}
    >
      <Menu.Item key="Home" style={{ width: "15%", minWidth: "100px" }}>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="Media" style={{ width: "15%", minWidth: "100px" }}>
        <Link to="/media">Media</Link>
      </Menu.Item>
      <Menu.Item key="Contact" style={{ width: "15%", minWidth: "130px" }}>
        <Link to="/contact">About / Contact</Link>
      </Menu.Item>
    </Menu>
  </Header>
);
