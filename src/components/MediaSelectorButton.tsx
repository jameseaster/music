// React Imports
import { Dispatch, SetStateAction } from "react";
// Dependency Imports
import clsx from "clsx";
// Ant Design Imports
import { Space, Button } from "antd";

/**
 * MediaSelectorButton
 *
 * TODO: styles & documentation
 */
export const MediaSelectorButton: React.FC<{
  media: "audio" | "video";
  setMedia: Dispatch<SetStateAction<"audio" | "video">>;
}> = ({ media, setMedia }) => (
  <div className="button-container">
    <Space size={30}>
      <Button
        type="text"
        onClick={() => setMedia("audio")}
        className={clsx("media-button", { border: media === "audio" })}
      >
        Audio
      </Button>
      <Button
        type="text"
        className={clsx("media-button", { border: media === "video" })}
        onClick={() => setMedia("video")}
      >
        Video
      </Button>
    </Space>
  </div>
);
