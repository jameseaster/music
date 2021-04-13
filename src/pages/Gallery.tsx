// Dependency Imports
import clsx from "clsx";
// Hooks
import { useCurrentBreakpoint } from "../hooks";
// Components
import { ImageGroup } from "../components/ImageGroup";

/**
 * Gallery Page
 *
 * TODO:
 */
export const Gallery: React.FC<{}> = () => {
  // Hooks
  const { breakpoint: bp } = useCurrentBreakpoint();

  return (
    <div className="pages-container">
      <div
        className={clsx("gallery-container", "fade-in", {
          [`${bp}-height`]: bp.length,
        })}
      >
        <ImageGroup />
      </div>
    </div>
  );
};
