// React Imports
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// Style Imports
import "./styles/app.less";

// Ant Design Imports
import { Layout } from "antd";

// Components
import { Pages } from "./Pages";
import { Navbar } from "./Components/Navbar";
import { FooterCredits } from "./Components/FooterCredits";

/**
 * App
 *
 * Top level component that is rendered in index.tsx
 */
export const App: React.FC<{}> = () => (
  <div className="app-container">
    <Router>
      <Layout>
        <Navbar />
        <Pages />
        <FooterCredits />
      </Layout>
    </Router>
  </div>
);
