// Dependency Imports
import clsx from "clsx";
// Ant Design Imports
import { Button } from "antd";
// Ant Design Icons
import { RightOutlined } from "@ant-design/icons";
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
      <Button
        type="text"
        size="small"
        shape="circle"
        onClick={togglePlaylistView}
        className={clsx(
          "icon",
          { "icon-open": viewPlaylist && size !== "small" },
          { condensed: !viewPlaylist && size === "small" },
          { "condensed-open": viewPlaylist && size === "small" }
        )}
      >
        <RightOutlined />
      </Button>
    </div>
  );
};
