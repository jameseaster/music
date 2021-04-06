// React Imports
import React, {
  useRef,
  useState,
  Dispatch,
  useEffect,
  SetStateAction,
} from "react";

// Dependency Imports
import ReactPlayer from "react-player";
import clsx from "clsx";

// Ant Design
import { Card, Button, Typography } from "antd";

// Ant Design Icons
import {
  DownOutlined,
  LeftOutlined,
  RightOutlined,
  PauseOutlined,
  FilePdfOutlined,
  CaretRightOutlined,
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
  pdf?: any;
  id: string;
  url: string;
  image: string;
  title: string;
  pdf_title?: string;
};

type VideoPlayerProps = {
  videos: Video[];
  height?: number;
  playing: boolean;
  className: string;
  videoIndex: number;
  selectedIndex: number;
  videoPlayPause: () => void;
  videoCategoryTitle?: string;
  handleSelect: MenuClickEventHandler;
  setPlaying: Dispatch<SetStateAction<boolean>>;
  changeCategory: (to: "prev" | "next") => void;
  skip: (type: "audio" | "video", to: "next" | "prev") => void;
};

// Constants
const { Title, Text } = Typography;

/**
 * VideoPlayer
 *
 * TODO: add details here
 */
export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  skip,
  videos,
  playing,
  className,
  setPlaying,
  videoIndex,
  handleSelect,
  selectedIndex,
  changeCategory,
  videoPlayPause,
  videoCategoryTitle,
}) => {
  // Local State
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<string>(
    videos[Number(videoIndex)].url
  );

  // refs
  const playerRef = useRef<ReactPlayer>(null);

  // Hooks
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
  };

  const togglePlaylist = () => setShowPlaylist(!showPlaylist);

  useEffect(() => {
    setCurrentVideo(videos[Number(videoIndex)].url);
  }, [videoIndex, videos]);

  // Keep Player in Preview Mode
  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.showPreview();
    }
  }, [videoIndex, videos]);

  return (
    <Card className={`video-player-container ${className}`}>
      <div className="video-player-header">
        <div className="video-player-button">
          <LeftOutlined onClick={() => changeCategory("prev")} />
        </div>
        <div className="video-player-button">
          <Title level={4}>{videoCategoryTitle}</Title>
        </div>
        <div className="video-player-button">
          <RightOutlined onClick={() => changeCategory("next")} />
        </div>
      </div>
      <ReactPlayer
        controls
        ref={playerRef}
        stopOnUnmount
        playing={playing}
        url={currentVideo}
        className="react-player"
        onClickPreview={() => setPlaying(true)}
        light={videos[Number(videoIndex)].image}
        width={dimensions[breakpoint]?.width || "100%"}
        height={dimensions[breakpoint]?.height || "100%"}
      />

      <Title className="video-title" level={5}>
        {videos[Number(videoIndex)].title}
      </Title>

      <div className="video-playlist-icon-container">
        {/* PDF Download button */}
        <div className="video-player-button">
          {videos[videoIndex].pdf ? (
            <a
              className="pdf"
              target="_blank"
              rel="noopener noreferrer"
              href={videos[videoIndex].pdf}
            >
              {videos[selectedIndex].pdf_title}{" "}
              <FilePdfOutlined className="video-pdf-icon" />
            </a>
          ) : null}
        </div>

        {/* Prev, Play, Next buttons */}
        <div className="video-player-button">
          {/* Previous */}
          <Button
            type="text"
            size="small"
            onClick={() => skip("video", "prev")}
          >
            <StepBackwardOutlined style={{ fontSize: "20px" }} />
          </Button>

          {/* Play */}
          <Button
            type="text"
            style={{ display: "flex", alignItems: "center" }}
            onClick={videoPlayPause}
          >
            {playing ? (
              <PauseOutlined style={{ fontSize: "30px" }} />
            ) : (
              <CaretRightOutlined style={{ fontSize: "30px" }} />
            )}
          </Button>

          {/* Next */}
          <Button
            type="text"
            size="small"
            onClick={() => skip("video", "next")}
          >
            <StepForwardOutlined style={{ fontSize: "20px" }} />
          </Button>
        </div>

        {/* Open playlist */}
        <div className="video-player-button">
          <Button
            type="text"
            size="small"
            onClick={togglePlaylist}
            style={{
              display: "flex",
            }}
          >
            <Text style={{ color: "#FFF", marginRight: "8px" }}>Playlist</Text>
            <span
              className={clsx("icon", {
                "icon-open": showPlaylist,
              })}
            >
              <DownOutlined />
            </span>
          </Button>
        </div>
      </div>
      {showPlaylist && (
        <List
          noPadding
          height={150}
          list={videos}
          handleSelect={handleSelect}
          className="video-player-list"
          selectedIndex={selectedIndex}
        />
      )}
    </Card>
  );
};
