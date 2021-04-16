// React Imports
import { useState } from "react";
// Dependency Imports
import { Link } from "react-router-dom";
// Ant Design Imports
import { Menu, Layout, Typography, Space, Drawer, Button, Divider } from "antd";
// Ant Design Icons
import { MenuOutlined } from "@ant-design/icons";
// Hooks
import { useMobileFormatting, useCurrentBreakpoint } from "../hooks";
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

  // Hooks
  const mobileLayout = useMobileFormatting();
  const { breakpoint } = useCurrentBreakpoint();

  // Open and close nav drawer
  const showDrawer = () => setVisible(true);
  const onClose = () => setVisible(false);

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
      <Header className="header-container fade-in">
        {/* Mobile Header */}
        {mobileLayout ? (
          <Space size={6} className="mobile-navbar">
            <MenuOutlined onClick={showDrawer} className="hamburger" />
            <Title level={3}>James Easter Music</Title>
          </Space>
        ) : (
          // Desktop Header //
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Menu
              theme="dark"
              className="header-menu"
              defaultSelectedKeys={["Home"]}
            >
              <Menu.Item key="Home" style={menuItemStyle}>
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="Music" style={menuItemStyle}>
                <Link to="/music">Music</Link>
              </Menu.Item>
              <Menu.Item key="Video" style={menuItemStyle}>
                <Link to="/video">Video</Link>
              </Menu.Item>
              {/* <Menu.Item key="About" style={menuItemStyle}>
                <Link to="/about">About</Link>
              </Menu.Item> */}
              <Menu.Item key="gallery" style={menuItemStyle}>
                <Link to="/gallery">Gallery</Link>
              </Menu.Item>
              <Menu.Item key="Contact" style={menuItemStyle}>
                <Link to="/contact">Contact</Link>
              </Menu.Item>
            </Menu>
            <div
              className="home-divider"
              style={{
                width: dividerWidth[breakpoint],
                visibility: mobileLayout ? "hidden" : "visible",
                marginTop: "-25px",
              }}
            >
              <Divider />
            </div>
          </div>
        )}
      </Header>
      {/* Mobile Menu */}
      <Drawer
        height={"auto"}
        closable={true}
        placement={"top"}
        visible={visible}
        onClose={onClose}
      >
        <div className="mobile-header-menu">
          <Button type="text" onClick={onClose} style={menuItemStyle}>
            <Link to="/">Home</Link>
          </Button>
          <Button type="text" onClick={onClose} style={menuItemStyle}>
            <Link to="/music">Music</Link>
          </Button>
          <Button type="text" onClick={onClose} style={menuItemStyle}>
            <Link to="/video">Video</Link>
          </Button>
          {/* <Button type="text" onClick={onClose} style={menuItemStyle}>
            <Link to="/about">About</Link>
          </Button> */}
          <Button type="text" onClick={onClose} style={menuItemStyle}>
            <Link to="/gallery">Gallery</Link>
          </Button>
          <Button type="text" onClick={onClose} style={menuItemStyle}>
            <Link to="/contact">Contact</Link>
          </Button>
        </div>
      </Drawer>
    </>
  );
};
