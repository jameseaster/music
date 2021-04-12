// Dependency Imports
import clsx from "clsx";
// Ant Design Imports
import { Layout, Typography } from "antd";
// Constants
const { Footer } = Layout;
const { Text } = Typography;

/**
 * FooterCredits
 *
 * This is the footer of the webpage. The FooterCredits utilizes the
 * Footer component from Ant Design for built in Layout functionality.
 */
export const FooterCredits: React.FC<{}> = () => (
  <Footer className={clsx("fade-in")}>
    <div className="footer-text-container">
      <Text>James Easter ©2021</Text>
    </div>
  </Footer>
);
