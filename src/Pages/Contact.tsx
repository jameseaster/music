// React Imports
import React from "react";

// Ant Design Imports
import { Divider } from "antd";

// Components
import { AboutMe } from "../Components/AboutMe";
import { EmailForm } from "../Components/EmailForm";

/**
 * Contact Page
 *
 * TODO: update description
 *
 * Contact is a form that allows webpage visitors to send an
 * inquery via email to me directly
 */
export const Contact: React.FC<{}> = () => {
  return (
    <div className="contact-container">
      <AboutMe />
      <Divider />
      <EmailForm />
    </div>
  );
};
