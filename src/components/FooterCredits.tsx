// React Imports
import React from "react";

// Ant Design Imports
import { Layout } from "antd";

// Constants
const { Footer } = Layout;

/**
 * FooterCredits
 *
 * This is the footer of the webpage. The FooterCredits utilizes the
 * Footer component from Ant Design for built in Layout functionality.
 */
export const FooterCredits: React.FC<{}> = () => (
  <Footer className="footer fade-in">James Easter Music ©2021</Footer>
);
