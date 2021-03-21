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
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["Home"]}
      style={{
        textAlign: "center",
        justifyContent: "space-around",
        display: "flex",
      }}
    >
      <Menu.Item key="Home">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="Media">
        <Link to="/media">Media</Link>
      </Menu.Item>
      <Menu.Item key="Bio">
        <Link to="/bio">Bio</Link>
      </Menu.Item>
      <Menu.Item key="Contact">
        <Link to="/contact">Contact</Link>
      </Menu.Item>
    </Menu>
  </Header>
);
