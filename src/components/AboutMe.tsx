// React Imports
import React from "react";

// Ant Design Imports
import { Typography } from "antd";
const { Text } = Typography;

/**
 * AboutMe
 *
 * A short paragraph about me which leads into my contact form
 */
export const AboutMe: React.FC<{}> = () => {
  return (
    <div className="about-me">
      <Text strong>
        I am a jazz guitarist in Colorado Springs, CO. I studied classical music
        at Harding University and completed my master's degree in Jazz Studies
        from the University of New Orleans.
        <br />
        <br />
        Feel free to contact me anytime, I'd love to hear from you!
      </Text>
    </div>
  );
};
