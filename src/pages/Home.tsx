// React Imports
import React from "react";

// Components
import { ImageGroup } from "../components/ImageGroup";

/**
 * Home Page
 *
 * TODO: Randomly switch photos around
 *
 * This is the initial view that a webpage visitor is greeted with, it
 * contains a slider of images that are relative to James Easter Music
 */
export const Home: React.FC<{}> = () => {
  return (
    <div className="pages-container">
      <div className="home-container">
        <ImageGroup />
      </div>
    </div>
  );
};
