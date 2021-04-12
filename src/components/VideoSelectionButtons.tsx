// React Imports
import { Dispatch, SetStateAction } from "react";
// Dependency Imports
import clsx from "clsx";
// Ant Design Imports
import { Space, Button } from "antd";

/**
 * VideoSelectionButtons
 *
 * TODO: styles & documentation
 */
export const VideoSelectionButtons: React.FC<{
  videoType: "Live" | "Transcriptions" | "Studio";
  setVideoType: Dispatch<SetStateAction<"Live" | "Transcriptions" | "Studio">>;
}> = ({ videoType, setVideoType }) => (
  <div className="button-container">
    <Space size={30}>
      <Button
        type="text"
        onClick={() => setVideoType("Live")}
        className={clsx("media-button", { border: videoType === "Live" })}
      >
        Live
      </Button>
      <Button
        type="text"
        onClick={() => setVideoType("Transcriptions")}
        className={clsx("media-button", {
          border: videoType === "Transcriptions",
        })}
      >
        Transcriptions
      </Button>
      <Button
        type="text"
        onClick={() => setVideoType("Studio")}
        className={clsx("media-button", { border: videoType === "Studio" })}
      >
        Studio
      </Button>
    </Space>
  </div>
);
