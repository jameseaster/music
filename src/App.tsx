// Dependency Imports
import { BrowserRouter as Router } from "react-router-dom";

// Style Imports
import "./styles/app/_app.less";

// Ant Design Imports
import { Layout } from "antd";

// Components
import { Pages } from "./pages";
import { Navbar } from "./components/Navbar";
import { FooterCredits } from "./components/FooterCredits";

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
