// React Imports
import { useState, useEffect } from "react";
// Hooks
import useCurrentBreakpoint from "./useCurrentBreakpoint";

/**
 * useMobileFormatting
 *
 * This hook utilizes useCurrentBreakpoint to return a boolean
 * value if the current breakpoint is a mobile device ("xs")
 */
const useMobileFormatting = () => {
  // Local State
  const [mobileLayout, setMobileLayout] = useState(false);
  // Hooks
  const { breakpoint } = useCurrentBreakpoint();

  // Adapt format to mobile
  useEffect(() => {
    if (breakpoint === "xs" && !mobileLayout) {
      setMobileLayout(true);
    } else if (breakpoint !== "xs" && mobileLayout) {
      setMobileLayout(false);
    }
  }, [breakpoint, mobileLayout]);

  return mobileLayout;
};

export default useMobileFormatting;
