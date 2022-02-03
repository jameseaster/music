// Dependency Imports
import clsx from "clsx";
// Ant Design Imports
import { Layout, Typography } from "antd";
// Constants
import { CONSTANTS } from "../utils/constants";

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
      <Text className="text">
        All content © {CONSTANTS.currentYear} James Easter
      </Text>
      <Text className="text">
        Site built & designed by{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://jameseaster.dev/"
        >
          <i>James Easter</i>
        </a>
      </Text>
    </div>
  </Footer>
);
