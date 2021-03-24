// React Imports
import { useState, useEffect } from "react";

// Ant Design Imports
import { Grid } from "antd";

// Constants
const { useBreakpoint } = Grid;

/**
 * useCurrentBreakpoint
 *
 * This hook utilizes Ant Designs useBreakpoint hook and returns
 * the name (string) of the current breakpoint that is being used
 */
const useCurrentBreakpoint = () => {
  // Ant design breakpoints
  type Screens = { [key: string]: boolean | undefined };
  const screens: Screens = useBreakpoint();

  // The name of the current breakpoint as a string
  const [breakpoint, setBreakpoint] = useState("");

  // When the screens breakpoint changes
  useEffect(() => {
    // Find the largest breakpoint that is truthy
    const bp = Object.keys(screens)
      .reverse()
      .find((screen) => screens[screen]);

    if (bp) {
      // If bp is true, set local state
      setBreakpoint(bp);
    }
  }, [screens]);

  // Return breakpoint, which is the name of the current breakpoint in use
  return { breakpoint };
};

export default useCurrentBreakpoint;
