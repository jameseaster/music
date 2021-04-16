// React Imports
// import { useState } from "react";
// Dependency Imports
import clsx from "clsx";
// Components
import { AboutMe } from "../components/AboutMe";
// Hooks
import { useCurrentBreakpoint } from "../hooks";

/**
 * About Page
 *
 * TODO:
 */
export const About: React.FC<{}> = () => {
  // Hooks
  const { breakpoint: bp } = useCurrentBreakpoint();

  return (
    <div className="pages-container">
      <div className={clsx("about-container", { [`${bp}-height`]: bp.length })}>
        <AboutMe />
      </div>
    </div>
  );
};
