// React Imports
import React from "react";

// Ant Design Imports
import { Divider, Typography } from "antd";

// Components
import { EmailForm } from "../Components/EmailForm";

/**
 * Contact Page
 *
 * Contact is a form that allows webpage visitors to send an
 * inquery via email to me directly
 */
export const Contact: React.FC<{}> = () => {
  return (
    <div className="contact-container">
      <Typography>
        I am a jazz guitarist in Colorado Springs, CO. I studied classical music
        at Harding University and completed my master's degree in Jazz Studies
        from the University of New Orleans.
        <br />
        <br />
        Feel free to contact me anytime, I'd love to hear from you!
      </Typography>
      <Divider />
      <EmailForm />
      <Divider />
    </div>
  );
};
