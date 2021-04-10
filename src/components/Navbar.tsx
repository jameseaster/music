// Dependency Imports
import clsx from "clsx";
import { Link } from "react-router-dom";
// Ant Design Imports
import { Menu, Layout } from "antd";
// Hooks
import { useMobileFormatting } from "../hooks";
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
  const menuItemStyle = {};
  // Adapt format to mobile
  const mobileLayout = useMobileFormatting();

  return (
    <Header className="header-container fade-in">
      <Menu
        theme="dark"
        mode="horizontal"
        className={clsx("header-menu", { "mobile-header": mobileLayout })}
        defaultSelectedKeys={["Home"]}
      >
        <Menu.Item key="Home" style={menuItemStyle}>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </Menu.Item>
        <Menu.Item key="Audio" style={menuItemStyle}>
          <Link to="/audio">Audio</Link>
        </Menu.Item>
        <Menu.Item key="Video" style={menuItemStyle}>
          <Link to="/video">Video</Link>
        </Menu.Item>
        <Menu.Item key="Contact" style={menuItemStyle}>
          <Link to="/contact">Contact</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};
