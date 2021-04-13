// React Imports
import { useState } from "react";
// Dependency Imports
import clsx from "clsx";
// Ant Design Imports
import { Typography, Space, Button } from "antd";
// Ant Design Icons
import { EllipsisOutlined, DownOutlined } from "@ant-design/icons";
// Components
import { PictureText } from "../components/PictureText";
import { AboutMe } from "../components/AboutMe";
// Assets
import home from "../assets/images/3x2-gsg01.jpg";
import mobile from "../assets/images/3x4-gsg01-mobile.jpg";
// Hooks
import { useMobileFormatting, useCurrentBreakpoint } from "../hooks";

const { Title, Text } = Typography;
/**
 * Home Page
 *
 *
 * This is the initial view that a webpage visitor is greeted with
 */
export const Home: React.FC<{}> = () => {
  // Local State
  const [viewInfo, setViewInfo] = useState(false);

  // Hooks
  const mobileLayout = useMobileFormatting();
  const { breakpoint: bp } = useCurrentBreakpoint();

  // Click Handler
  const toggleInfo = () => setViewInfo((viewInfo) => !viewInfo);

  return (
    <div className="pages-container">
      <div
        className={clsx("home-container", "fade-in", {
          [`${bp}-height`]: bp.length,
        })}
      >
        {!mobileLayout ? (
          // Web layout //
          <Space
            direction="vertical"
            style={{ position: "relative", textAlign: "center" }}
          >
            <img src={home} alt="home" style={{ maxWidth: "100%" }}></img>
            <Title level={1} className="picture-title">
              JAMES EASTER
            </Title>
            <Title level={1} className="picture-subtitle">
              musician/ guitarist/ composer
            </Title>
            <PictureText classNames="picture-text" />
          </Space>
        ) : (
          // Mobile layout //
          <Space
            direction="vertical"
            style={{ position: "relative", textAlign: "center" }}
          >
            <img src={mobile} alt="mobile" style={{ width: "100%" }}></img>
            <Title level={1} className="mobile-name-text">
              musician/ guitarist/ composer
            </Title>
          </Space>
        )}
        {mobileLayout && (
          <div className="about-text">
            <Text strong>
              Communicating through improvisation is unlike anything else. I
              hope to use this website to share some of the music I've written,
              learned, and continue to study.
            </Text>
          </div>
        )}

        {/* Show more info button */}

        <Button
          type="text"
          className={clsx("about-text-btn", "icon", {
            "icon-open": viewInfo && mobileLayout,
          })}
          onClick={toggleInfo}
        >
          {mobileLayout ? (
            <DownOutlined />
          ) : viewInfo ? (
            <EllipsisOutlined />
          ) : (
            "-More Info-"
          )}
        </Button>

        {/* About Me Info */}
        {viewInfo && <AboutMe classNames="about-text" />}
      </div>
    </div>
  );
};
