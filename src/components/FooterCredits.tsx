// Dependency Imports
import clsx from "clsx";
// Ant Design Imports
import { Layout, Typography } from "antd";
// Hooks
import { useMobileFormatting } from "../hooks";
// Constants
const { Footer } = Layout;
const { Text } = Typography;

/**
 * FooterCredits
 *
 * This is the footer of the webpage. The FooterCredits utilizes the
 * Footer component from Ant Design for built in Layout functionality.
 */
export const FooterCredits: React.FC<{}> = () => {
  // Adapt format to mobile
  const mobileLayout = useMobileFormatting();

  console.log(mobileLayout);
  return (
    <Footer className={clsx("fade-in", { "mobile-footer": mobileLayout })}>
      <div className="footer-text-container">
        <Text>James Easter Music ©2021</Text>
      </div>
    </Footer>
  );
};
