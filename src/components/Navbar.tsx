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
export const Navbar: React.FC<{}> = () => {
  const menuItemStyle = { width: "15%", minWidth: "100px", margin: "8px" };
  return (
    <Header className="header fade-in">
      <Menu
        theme="dark"
        mode="horizontal"
        className="header-menu"
        defaultSelectedKeys={["Home"]}
      >
        <Menu.Item key="Home" style={menuItemStyle}>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </Menu.Item>
        <Menu.Item key="Media" style={menuItemStyle}>
          <Link to="/media">Media</Link>
        </Menu.Item>
        <Menu.Item key="Contact" style={menuItemStyle}>
          <Link to="/contact">Contact</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};
