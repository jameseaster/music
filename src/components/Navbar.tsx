// React Imports
import { useState } from "react";
// Dependency Imports
import { Link } from "react-router-dom";
// Ant Design Imports
import { Menu, Layout, Typography, Space, Drawer, Button } from "antd";
// Ant Design Icons
import { MenuOutlined } from "@ant-design/icons";
// Hooks
import { useMobileFormatting } from "../hooks";
// Constants
const { Header } = Layout;
const { Title } = Typography;

/**
 * Navbar
 *
 * The Navbar is wrapped in Ant Design's Header component to
 * take advantage of some baked in Layout features. It renders
 * at the top of the webpage and utilizes react-router-dom to
 * navigate between Pages
 */
export const Navbar: React.FC<{}> = () => {
  // Local State
  const [visible, setVisible] = useState(false);

  // Style
  const menuItemStyle = { margin: "12px" };

  // Adapt format to mobile
  const mobileLayout = useMobileFormatting();

  // Open and close nav drawer
  const showDrawer = () => setVisible(true);
  const onClose = () => setVisible(false);

  return (
    <>
      <Header className="header-container fade-in">
        {mobileLayout ? (
          <Space size={6} className="mobile-navbar">
            <MenuOutlined onClick={showDrawer} className="hamburger" />
            <Title level={3}>James Easter Music</Title>
          </Space>
        ) : (
          <Menu
            theme="dark"
            className="header-menu"
            defaultSelectedKeys={["Home"]}
          >
            <Menu.Item key="Home" style={menuItemStyle}>
              <Link className="nav-link" to="/">
                {/* FIXME: add home page */}
                Gallery
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
        )}
      </Header>
      <Drawer
        height={"auto"}
        closable={true}
        placement={"top"}
        visible={visible}
        onClose={onClose}
      >
        <div className="mobile-header-menu">
          <Button type="text" onClick={onClose} style={menuItemStyle}>
            <Link className="nav-link" to="/">
              Gallery
            </Link>
          </Button>
          <Button type="text" onClick={onClose} style={menuItemStyle}>
            <Link to="/audio">Music</Link>
          </Button>
          <Button type="text" onClick={onClose} style={menuItemStyle}>
            <Link to="/video">Video</Link>
          </Button>
          <Button type="text" onClick={onClose} style={menuItemStyle}>
            <Link to="/contact">Contact</Link>
          </Button>
        </div>
      </Drawer>
    </>
  );
};
