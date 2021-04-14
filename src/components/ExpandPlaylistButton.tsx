// Dependency Imports
import clsx from "clsx";
// Ant Design Icons
import { UnorderedListOutlined } from "@ant-design/icons";
// Types
type ExpandPlaylistButtonProps = {
  viewPlaylist: boolean;
  togglePlaylistView: () => void;
  size: "small" | "normal" | null;
};

/**
 * ExpandPlaylistButton
 *
 * TODO: format & document
 */
export const ExpandPlaylistButton: React.FC<ExpandPlaylistButtonProps> = ({
  size,
  viewPlaylist,
  togglePlaylistView,
}) => {
  return (
    <div className="playlist-icon-container">
      <div
        onClick={togglePlaylistView}
        className={clsx("playlist-btn", {
          "playlist-btn-open": viewPlaylist,
        })}
      >
        <UnorderedListOutlined style={{ fontSize: "16px" }} />
      </div>
    </div>
  );
};
