// Dependency Imports
import clsx from "clsx";
// Ant Design Imports
import { Typography, Space } from "antd";
// Assets
import home from "../assets/images/3x2-gsg01.jpg";
import mobile from "../assets/images/3x5-gsg01-mobile.jpg";
// Hooks
import { useMobileFormatting, useCurrentBreakpoint } from "../hooks";

const { Title } = Typography;
/**
 * Home Page
 *
 *
 * This is the initial view that a webpage visitor is greeted with
 */
export const Home: React.FC<{}> = () => {
  // Hooks
  const mobileLayout = useMobileFormatting();
  const { breakpoint: bp } = useCurrentBreakpoint();

  return (
    <div className="pages-container fade-in">
      <div
        className={clsx("home-container", "fade-in", {
          [`${bp}-height`]: bp.length,
        })}
      >
        {!mobileLayout ? (
          // Web layout //
          <Space
            direction="vertical"
            style={{ position: "relative", textAlign: "center", width: "95%" }}
          >
            <img src={home} alt="home" style={{ maxWidth: "100%" }}></img>
            <Title level={1} className="picture-title">
              JAMES EASTER
            </Title>
            <Title level={1} className="picture-subtitle">
              musician/ guitarist/ composer
            </Title>
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
      </div>
    </div>
  );
};
