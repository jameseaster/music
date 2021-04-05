// React Imports
import React, { useState, useEffect } from "react";

// Dependency Imports
import ReactPlayer from "react-player";
import clsx from "clsx";

// Ant Design
import { Card, Button, Typography, Space } from "antd";

// Ant Design Icons
import {
  DownOutlined,
  // LeftOutlined,
  // RightOutlined,
  StepForwardOutlined,
  StepBackwardOutlined,
} from "@ant-design/icons";

// Components
import { List } from "./List";

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
  toPrevVideo?: () => void;
  toPrevCategory?: () => void;
  toNextCategory?: () => void;
  videoCategoryTitle?: string;
  handleSelect: MenuClickEventHandler;
};

// Constants
const { Title, Text } = Typography;

/**
 * VideoPlayer
 *
 * TODO: add details here
 */
export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videos,
  playing,
  className,
  videoIndex,
  handleSelect,
  selectedIndex,
  videoCategoryTitle = "Transcriptions",
  toNextVideo = () => console.log("to next video"),
  toPrevVideo = () => console.log("to prev video"),
  toPrevCategory = () => console.log("to prev category"),
  toNextCategory = () => console.log("to next category"),
}) => {
  const [showPlaylist, setShowPlaylist] = useState(false);
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
    xs: { width: "350px", height: "197px" },
    sm: { width: "400px", height: "225px" },
    md: { width: "500px", height: "281px" },
    lg: { width: "600px", height: "338px" },
    xl: { width: "700px", height: "394px" },
    xxl: { width: "800px", height: "450px" },
    // xxl: { width: "900px", height: "506px" },
  };

  const togglePlaylist = () => setShowPlaylist(!showPlaylist);

  useEffect(() => {
    setCurrentVideo(videos[Number(videoIndex)].url);
  }, [videoIndex, videos]);

  return (
    <div className="video-player-container">
      <Card
        className={className}
        style={{ borderRadius: "8px", backgroundColor: "#141414" }}
      >
        <div className="video-player-header">
          <Space size={30}>
            {/* <LeftOutlined onClick={toPrevCategory} /> */}
            <Title level={4}>{videoCategoryTitle}</Title>
            {/* <RightOutlined onClick={toNextCategory} /> */}
          </Space>
        </div>
        <ReactPlayer
          controls
          stopOnUnmount
          playing={playing}
          url={currentVideo}
          className="react-player"
          width={dimensions[breakpoint]?.width || "100%"}
          height={dimensions[breakpoint]?.height || "100%"}
        />
        <div className="video-playlist-icon-container">
          <div style={{ width: "25%" }}>
            <a
              className="pdf"
              target="_blank"
              rel="noopener noreferrer"
              href={videos[videoIndex].pdf}
            >
              view PDF
            </a>
          </div>
          <div style={{ width: "25%" }}>
            <Button type="text" size="small" onClick={toPrevVideo}>
              <StepBackwardOutlined style={{ fontSize: "20px" }} />
            </Button>
          </div>
          <div style={{ width: "25%" }}>
            <Button type="text" size="small" onClick={toNextVideo}>
              <StepForwardOutlined style={{ fontSize: "20px" }} />
            </Button>
          </div>
          <div style={{ width: "25%", paddingLeft: "40px" }}>
            <Button
              type="text"
              size="small"
              onClick={togglePlaylist}
              style={{
                display: "flex",
              }}
            >
              <Text style={{ color: "#FFF", marginRight: "8px" }}>
                Playlist
              </Text>
              <div className={clsx("icon", { "icon-open": showPlaylist })}>
                <DownOutlined />
              </div>
            </Button>
          </div>
        </div>
        {showPlaylist && (
          <List
            noPadding
            height={150}
            list={videos}
            handleSelect={handleSelect}
            selectedIndex={selectedIndex}
            className="video-player-list"
          />
        )}
      </Card>
    </div>
  );
};