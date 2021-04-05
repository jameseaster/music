// React Imports
import React, { useState, useEffect } from "react";

// Dependency Imports
import ReactPlayer from "react-player";

// Ant Design
import { Card } from "antd";

// Ant Design Icons
import { UpOutlined, DownOutlined } from "@ant-design/icons";

// Components
import { List } from "../components/List";

// Hooks
import { useCurrentBreakpoint } from "../hooks";

// Types
import { MenuClickEventHandler } from "rc-menu/lib/interface";

type Video = {
  title: string;
  url: string;
  pdf: any;
};

type VideoPlayerProps = {
  videos: Video[];
  height?: number;
  playing: boolean;
  className: string;
  videoIndex: number;
  selectedIndex: number;
  toNextVideo?: () => void;
  handleSelect: MenuClickEventHandler;
};

/**
 * ResponsivePlayer
 *
 * TODO: add details here
 */
export const ResponsivePlayer: React.FC<VideoPlayerProps> = ({
  videos,
  playing,
  className,
  videoIndex,
  handleSelect,
  selectedIndex,
}) => {
  const [showPlaylist, setShowPlaylist] = useState(true);
  const [currentVideo, setCurrentVideo] = useState<string>(
    videos[Number(videoIndex)].url
  );
  const { breakpoint } = useCurrentBreakpoint();

  // Widths for divider at the top of the Pages
  type Dimensions = {
    [key: string]: {
      height: string;
      width: string;
    };
  };
  const dimensions: Dimensions = {
    xs: { width: "400px", height: "225px" },
    sm: { width: "500px", height: "281px" },
    md: { width: "600px", height: "338px" },
    lg: { width: "700px", height: "394px" },
    xl: { width: "800px", height: "450px" },
    xxl: { width: "900px", height: "506px" },
  };

  const togglePlaylist = () => setShowPlaylist(!showPlaylist);

  useEffect(() => {
    setCurrentVideo(videos[Number(videoIndex)].url);
  }, [videoIndex, videos]);

  return (
    <Card
      className={className}
      style={{ borderRadius: "8px" }}
      actions={[
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={videos[videoIndex].pdf}
        >
          download pdf
        </a>,
        <>
          {showPlaylist ? (
            <UpOutlined onClick={togglePlaylist} /> // TODO: change this to rotate via CSS
          ) : (
            <DownOutlined onClick={togglePlaylist} />
          )}
        </>,
      ]}
    >
      <ReactPlayer
        controls
        stopOnUnmount
        playing={playing}
        url={currentVideo}
        className="react-player"
        width={dimensions[breakpoint]?.width || "100%"}
        height={dimensions[breakpoint]?.height || "100%"}
      />
      {showPlaylist && (
        <List
          noPadding
          height={150}
          list={videos}
          handleSelect={handleSelect}
          selectedIndex={selectedIndex}
          className="responsive-player-list"
        />
      )}
    </Card>
  );
};
